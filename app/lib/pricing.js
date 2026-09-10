// Cart pricing rules. When Stripe goes live, promo codes move to Stripe's
// own promotion codes — this file is the single place that has to change.

export const FREE_SHIPPING_THRESHOLD = 75;
export const SHIPPING_FLAT_RATE = 6.95;
export const TAX_RATE = 0.0825; // placeholder — real rate set by Stripe Tax at launch

const DISCOUNT_CODES = {
  WELCOME10: { type: "percent", value: 10, label: "10% off your first order" },
  MVIA15: { type: "percent", value: 15, label: "15% off" },
  FREESHIP: { type: "shipping", value: 0, label: "Free shipping" },
};

export function lookupDiscount(rawCode) {
  if (!rawCode) return null;
  const code = rawCode.trim().toUpperCase();
  const found = DISCOUNT_CODES[code];
  return found ? { code, ...found } : null;
}

export function calculateTotals(subtotal, discount) {
  const discountAmount =
    discount?.type === "percent" ? (subtotal * discount.value) / 100 : 0;

  const afterDiscount = Math.max(subtotal - discountAmount, 0);

  let shipping = 0;
  if (afterDiscount > 0) {
    const qualifiesFree =
      afterDiscount >= FREE_SHIPPING_THRESHOLD || discount?.type === "shipping";
    shipping = qualifiesFree ? 0 : SHIPPING_FLAT_RATE;
  }

  const tax = afterDiscount * TAX_RATE;
  const total = afterDiscount + shipping + tax;

  return {
    subtotal,
    discountAmount,
    shipping,
    tax,
    total,
    qualifiesFreeShipping: shipping === 0 && afterDiscount > 0,
    amountToFreeShipping: Math.max(FREE_SHIPPING_THRESHOLD - afterDiscount, 0),
  };
}

export function formatPrice(amount) {
  return `$${amount.toFixed(2)}`;
}
