import Link from "next/link";
import { notFound } from "next/navigation";
import s from "./page.module.css";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import AddToCartButton from "./AddToCartButton";
import { getProductById } from "../../lib/products";

export const revalidate = 300;

export async function generateMetadata({ params }) {
  const product = await getProductById(params.id);
  if (!product) return { title: "Product Not Found — MVIA" };
  return {
    title: `${product.name} — MVIA Botanicals`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }) {
  const product = await getProductById(params.id);
  if (!product) notFound();

  return (
    <main className={s.page}>
      <SiteHeader />

      <div className={s.wrap}>
        <div className={s.breadcrumb}>
          <Link href="/products">Shop</Link> / {product.name}
        </div>

        <div className={s.productGrid}>
          <div className={s.media}>
            {product.tag && <span className={s.tag}>{product.tag}</span>}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={product.imageUrl} alt={product.name} />
          </div>
          <div className={s.info}>
            <div className={s.category}>{product.category}</div>
            <h1>{product.name}</h1>
            <div className={s.price}>${product.price.toFixed(2)}</div>
            <p className={s.description}>{product.description}</p>

            <AddToCartButton product={product} />

            <div className={s.detailBlock}>
              <h4>Suggested Use</h4>
              <p>Follow the directions on the product label, or as advised by a healthcare provider.</p>
            </div>
            <div className={s.detailBlock}>
              <h4>Sourcing &amp; Testing</h4>
              <p>Sourced from India and tested for potency and purity before release.</p>
            </div>
            <div className={s.detailBlock}>
              <h4>Disclaimer</h4>
              <p>
                This statement has not been evaluated by the FDA. This product is not
                intended to diagnose, treat, cure, or prevent any disease.
              </p>
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
