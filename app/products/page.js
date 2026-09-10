import s from "./page.module.css";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ProductsClient from "./ProductsClient";
import { getAllProducts } from "../lib/products";

export const metadata = {
  title: "Shop Botanicals — MVIA",
  description: "Traditional Indian botanicals, sourced and tested.",
};

// Admin edits revalidate this path instantly; this is the safety net for
// changes made outside the app (scripts, direct DB edits).
export const revalidate = 300;

export default async function ProductsPage() {
  const products = await getAllProducts();

  return (
    <main className={s.page}>
      <SiteHeader />

      <div className={s.pageHeader}>
        <div className={s.wrap}>
          <div className={s.eyebrow}>Botanicals</div>
          <h1>Herbal wellness, sourced and tested.</h1>
          <p>
            Traditional Indian botanicals, formulated and tested to a standard modern
            wellness routines can trust.
          </p>
        </div>
      </div>

      <ProductsClient products={products} />

      <SiteFooter />
    </main>
  );
}
