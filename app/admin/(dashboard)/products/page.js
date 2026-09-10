import Link from "next/link";
import s from "../../admin.module.css";
import { supabaseAdmin } from "../../../lib/supabase/admin";
import DeleteProductButton from "./DeleteProductButton";

export const dynamic = "force-dynamic";

export default async function AdminProductsPage() {
  const { data: products, error } = await supabaseAdmin
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <>
      <div className={s.headRow}>
        <h1>Products</h1>
        <Link href="/admin/products/new" className={s.primaryBtn}>
          + Add Product
        </Link>
      </div>

      {error && <p className={s.errorText}>{error.message}</p>}

      {!error && (!products || products.length === 0) ? (
        <div className={s.emptyState}>No products yet. Add your first one.</div>
      ) : (
        <table className={s.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product) => (
              <tr key={product.id}>
                <td>
                  {product.name}
                  {product.tag && <span className={s.badge} style={{ marginLeft: 10 }}>{product.tag}</span>}
                </td>
                <td>{product.category}</td>
                <td>${Number(product.price).toFixed(2)}</td>
                <td>{product.is_active ? "Active" : "Hidden"}</td>
                <td>
                  <div className={s.rowActions}>
                    <Link href={`/admin/products/${product.id}/edit`}>Edit</Link>
                    <DeleteProductButton productId={product.id} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
