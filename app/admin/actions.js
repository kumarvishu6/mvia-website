"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { createClient } from "@supabase/supabase-js";
import { supabaseAdmin } from "../lib/supabase/admin";

const COOKIE_NAME = "admin_session";

function requireSession() {
  const secret = process.env.ADMIN_SESSION_SECRET;
  const session = cookies().get(COOKIE_NAME)?.value;

  // A missing secret must fail closed — never let undefined match undefined.
  if (!secret || session !== secret) {
    throw new Error("Not authenticated");
  }
}

function slugify(name) {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export async function login(email, password) {
  if (!email || !password) {
    return { error: "Email and password are required." };
  }

  if (!process.env.ADMIN_SESSION_SECRET) {
    console.error("ADMIN_SESSION_SECRET is not set — admin login is disabled.");
    return { error: "Admin sign-in is not configured. Please contact the site administrator." };
  }

  // A throwaway client just to verify the password against Supabase Auth —
  // its own session is discarded; we only care whether this call succeeds.
  const authClient = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
  const { error } = await authClient.auth.signInWithPassword({ email, password });

  if (error) {
    return { error: "Incorrect email or password." };
  }

  cookies().set(COOKIE_NAME, process.env.ADMIN_SESSION_SECRET, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  return { success: true };
}

export async function signOut() {
  cookies().delete(COOKIE_NAME);
  return { success: true };
}

export async function createProduct(formData) {
  requireSession();

  const name = formData.get("name")?.toString().trim();
  const category = formData.get("category")?.toString();
  const price = parseFloat(formData.get("price"));
  const description = formData.get("description")?.toString() || "";
  const tag = formData.get("tag")?.toString().trim() || null;

  if (!name || !category || Number.isNaN(price)) {
    return { error: "Name, category, and price are required." };
  }

  const imageUrl = formData.get("imageUrl")?.toString().trim() || null;

  const { error } = await supabaseAdmin.from("products").insert({
    slug: slugify(name),
    name,
    category,
    price,
    description,
    tag,
    image_url: imageUrl,
  });

  if (error) return { error: error.message };

  revalidatePath("/admin/products");
  revalidatePath("/products");
  revalidatePath("/");
  return { success: true };
}

export async function updateProduct(id, formData) {
  requireSession();

  const name = formData.get("name")?.toString().trim();
  const category = formData.get("category")?.toString();
  const price = parseFloat(formData.get("price"));
  const description = formData.get("description")?.toString() || "";
  const tag = formData.get("tag")?.toString().trim() || null;
  const isActive = formData.get("isActive") === "on";

  if (!name || !category || Number.isNaN(price)) {
    return { error: "Name, category, and price are required." };
  }

  const imageUrl = formData.get("imageUrl")?.toString().trim() || null;

  const { error } = await supabaseAdmin
    .from("products")
    .update({ name, category, price, description, tag, is_active: isActive, image_url: imageUrl })
    .eq("id", id);

  if (error) return { error: error.message };

  revalidatePath("/admin/products");
  revalidatePath("/products");
  revalidatePath("/");
  return { success: true };
}

export async function deleteProduct(id) {
  requireSession();

  const { error } = await supabaseAdmin.from("products").delete().eq("id", id);
  if (error) return { error: error.message };

  revalidatePath("/admin/products");
  revalidatePath("/products");
  revalidatePath("/");
  return { success: true };
}
