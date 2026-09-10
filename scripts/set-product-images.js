// One-off: points each seeded product at its botanical placeholder art.
// Run with: node scripts/set-product-images.js
const fs = require("fs");
const path = require("path");
const { createClient } = require("@supabase/supabase-js");

const envPath = path.join(__dirname, "..", ".env.local");
const env = {};
fs.readFileSync(envPath, "utf8")
  .split("\n")
  .forEach((line) => {
    const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
    if (m) env[m[1]] = m[2].trim();
  });

const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
});

async function main() {
  const { data: products, error } = await supabase.from("products").select("id, slug, image_url");
  if (error) {
    console.error(error.message);
    process.exit(1);
  }

  const artDir = path.join(__dirname, "..", "public", "img", "products");
  const available = new Set(
    fs.readdirSync(artDir).filter((f) => f.endsWith(".svg")).map((f) => f.replace(/\.svg$/, ""))
  );

  for (const product of products) {
    const art = available.has(product.slug) ? product.slug : "default";
    const url = `/img/products/${art}.svg`;
    if (product.image_url === url) {
      console.log(`= ${product.slug} (already set)`);
      continue;
    }
    const { error: upErr } = await supabase
      .from("products")
      .update({ image_url: url })
      .eq("id", product.id);
    console.log(upErr ? `! ${product.slug}: ${upErr.message}` : `✓ ${product.slug} → ${url}`);
  }
}

main();
