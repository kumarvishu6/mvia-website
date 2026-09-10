import { supabasePublic } from "./supabase/public";

export const CATEGORIES = ["All", "Capsules", "Teas", "Powders", "Oils"];

// Maps a Supabase row onto the shape the rest of the site already expects
// (id = slug, so URLs like /products/ashwagandha-capsules keep working).
function mapProduct(row) {
  return {
    id: row.slug,
    name: row.name,
    category: row.category,
    price: Number(row.price),
    tag: row.tag,
    initials: row.name
      .replace(/[^a-zA-Z\s]/g, "")
      .split(" ")
      .filter(Boolean)
      .map((w) => w[0])
      .slice(0, 2)
      .join("")
      .toUpperCase(),
    description: row.description,
    imageUrl: row.image_url || "/img/products/default.svg",
  };
}

export async function getAllProducts() {
  const { data, error } = await supabasePublic
    .from("products")
    .select("*")
    .eq("is_active", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("getAllProducts:", error.message);
    return [];
  }

  return data.map(mapProduct);
}

export async function getProductById(id) {
  const { data, error } = await supabasePublic
    .from("products")
    .select("*")
    .eq("slug", id)
    .eq("is_active", true)
    .single();

  if (error || !data) return null;
  return mapProduct(data);
}
