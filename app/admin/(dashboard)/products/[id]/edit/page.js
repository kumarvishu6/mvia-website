import { notFound } from "next/navigation";
import s from "../../../../admin.module.css";
import ProductForm from "../../ProductForm";
import { updateProduct } from "../../../../actions";
import { supabaseAdmin } from "../../../../../lib/supabase/admin";

export const dynamic = "force-dynamic";

export default async function EditProductPage({ params }) {
  const { data: product } = await supabaseAdmin
    .from("products")
    .select("*")
    .eq("id", params.id)
    .single();

  if (!product) notFound();

  const updateWithId = updateProduct.bind(null, product.id);

  return (
    <>
      <div className={s.headRow}>
        <h1>Edit Product</h1>
      </div>
      <ProductForm action={updateWithId} product={product} />
    </>
  );
}
