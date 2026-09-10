import s from "../../../admin.module.css";
import ProductForm from "../ProductForm";
import { createProduct } from "../../../actions";

export default function NewProductPage() {
  return (
    <>
      <div className={s.headRow}>
        <h1>Add Product</h1>
      </div>
      <ProductForm action={createProduct} />
    </>
  );
}
