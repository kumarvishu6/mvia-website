"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import s from "../../admin.module.css";

const REAL_CATEGORIES = ["Capsules", "Teas", "Powders", "Oils"];

export default function ProductForm({ action, product }) {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setPending(true);
    setError("");

    const formData = new FormData(e.target);
    const result = await action(formData);

    if (result?.error) {
      setError(result.error);
      setPending(false);
      return;
    }

    router.push("/admin/products");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className={s.formCard}>
      <div className={s.formRow}>
        <div className={s.field}>
          <label htmlFor="name">Product Name</label>
          <input id="name" name="name" type="text" required defaultValue={product?.name} />
        </div>
        <div className={s.field}>
          <label htmlFor="category">Category</label>
          <select id="category" name="category" defaultValue={product?.category || REAL_CATEGORIES[0]}>
            {REAL_CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={s.formRow}>
        <div className={s.field}>
          <label htmlFor="price">Price (USD)</label>
          <input
            id="price"
            name="price"
            type="number"
            step="0.01"
            min="0"
            required
            defaultValue={product?.price}
          />
        </div>
        <div className={s.field}>
          <label htmlFor="tag">Tag (optional)</label>
          <input id="tag" name="tag" type="text" placeholder="Best Seller, New..." defaultValue={product?.tag || ""} />
        </div>
      </div>

      <div className={s.field}>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" defaultValue={product?.description} />
      </div>

      <div className={s.field}>
        <label htmlFor="imageUrl">Image URL (optional)</label>
        <input
          id="imageUrl"
          name="imageUrl"
          type="text"
          placeholder="/img/products/tulsi-tea.svg"
          defaultValue={product?.image_url || ""}
        />
        <p className={s.fieldHint}>
          Leave blank to use the default botanical illustration. Paste a full URL once real product
          photography is available.
        </p>
      </div>

      {product && (
        <div className={s.field}>
          <label>
            <input type="checkbox" name="isActive" defaultChecked={product.is_active} style={{ width: "auto", marginRight: 8 }} />
            Visible on the site
          </label>
        </div>
      )}

      <div className={s.formActions}>
        <button type="submit" className={s.primaryBtn} disabled={pending}>
          {pending ? "Saving..." : product ? "Save Changes" : "Add Product"}
        </button>
        <Link href="/admin/products" className={s.ghostBtn}>
          Cancel
        </Link>
      </div>
      {error && <p className={s.errorText}>{error}</p>}
    </form>
  );
}
