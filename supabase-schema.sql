-- MVIA database schema. Run once in Supabase SQL Editor (already applied to
-- the current dev project — keep this as reference for setting up production).

-- Products (managed via the admin panel)
create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  category text not null,
  price numeric(10, 2) not null,
  description text not null default '',
  tag text,
  image_url text,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

alter table products enable row level security;

create policy "Public can view active products"
  on products for select
  using (is_active = true);

-- Contact form submissions
create table if not exists contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  interest text,
  message text not null,
  created_at timestamptz not null default now()
);

alter table contact_submissions enable row level security;

create policy "Anyone can submit the contact form"
  on contact_submissions for insert
  with check (true);

-- Orders (used once Stripe checkout is wired up — no public access at all)
create table if not exists orders (
  id uuid primary key default gen_random_uuid(),
  stripe_session_id text unique,
  customer_email text,
  items jsonb not null,
  total numeric(10, 2) not null,
  status text not null default 'pending',
  created_at timestamptz not null default now()
);

alter table orders enable row level security;

-- Seed the starter catalog
insert into products (slug, name, category, price, description, tag, image_url) values
  ('ashwagandha-capsules', 'Ashwagandha Root Capsules', 'Capsules', 28, 'Adaptogenic support for stress and steady energy, sourced and lab-tested for potency.', 'Best Seller', null),
  ('tulsi-tea', 'Tulsi (Holy Basil) Tea', 'Teas', 18, 'A calming daily ritual tea, traditionally used to ease everyday stress and support focus.', null, null),
  ('turmeric-ginger', 'Turmeric & Ginger Blend', 'Powders', 24, 'An anti-inflammatory kitchen staple, stirred into warm water, smoothies, or meals.', null, null),
  ('brahmi-drops', 'Brahmi Focus Drops', 'Oils', 32, 'A traditional focus-support tincture, taken before study, training, or deep work blocks.', 'New', null),
  ('triphala-powder', 'Triphala Digestive Powder', 'Powders', 22, 'A classical three-fruit blend traditionally used to support gentle, daily digestion.', null, null),
  ('chamomile-lavender-oil', 'Chamomile & Lavender Oil', 'Oils', 26, 'A gentle massage and diffuser oil blend for winding down before rest or meditation.', null, null)
on conflict (slug) do nothing;
