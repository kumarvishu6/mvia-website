"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import s from "../../admin.module.css";
import { deleteProduct } from "../../actions";

export default function DeleteProductButton({ productId }) {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  async function handleClick() {
    if (!confirm("Delete this product? This cannot be undone.")) return;
    setPending(true);
    await deleteProduct(productId);
    router.refresh();
  }

  return (
    <button type="button" className={s.deleteBtn} onClick={handleClick} disabled={pending}>
      {pending ? "..." : "Delete"}
    </button>
  );
}
