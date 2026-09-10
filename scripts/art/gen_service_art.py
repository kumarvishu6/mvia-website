# -*- coding: utf-8 -*-
"""Service-section illustrations, same visual language as the product art."""
import math, os

OUT = r"C:\Users\Vishnu singh\Downloads\mvia-nextjs_1\public\img\services"
os.makedirs(OUT, exist_ok=True)

W, H = 800, 600
FOREST = "#173D32"
FOREST_LIGHT = "#2F5B4A"
CLAY = "#B96F4A"
CLAY_SOFT = "#D89B79"
SAGE = "#DCE7DF"


def leaf(bx, by, tx, ty, width, fill="none", stroke=FOREST, sw=2.4, opacity=1.0):
    dx, dy = tx - bx, ty - by
    length = math.hypot(dx, dy) or 1
    px, py = -dy / length, dx / length
    mx, my = bx + dx * 0.5, by + dy * 0.5
    return (
        f'<path d="M{bx:.1f},{by:.1f} Q{mx + px * width:.1f},{my + py * width:.1f} {tx:.1f},{ty:.1f} '
        f'Q{mx - px * width:.1f},{my - py * width:.1f} {bx:.1f},{by:.1f} Z" fill="{fill}" '
        f'stroke="{stroke}" stroke-width="{sw}" stroke-linejoin="round" opacity="{opacity}"/>'
    )


def wrapper(inner):
    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="{W}" height="{H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0.5" y2="1">
      <stop offset="0%" stop-color="#F8F4EB"/>
      <stop offset="100%" stop-color="#EBE1CD"/>
    </linearGradient>
    <radialGradient id="halo" cx="50%" cy="42%" r="60%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.7"/>
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="{W}" height="{H}" fill="url(#bg)"/>
  <circle cx="400" cy="292" r="215" fill="#E6DCC5" opacity="0.5"/>
  <circle cx="400" cy="292" r="215" fill="url(#halo)"/>
  <circle cx="400" cy="292" r="215" fill="none" stroke="{CLAY}" stroke-width="1.1" opacity="0.3"/>
{inner}
</svg>
"""


# ---------- 1. Wellness: seated meditation figure ----------
def wellness():
    p = []
    # breathing arcs behind
    for i, r in enumerate((150, 178, 206)):
        p.append(f'  <path d="M{400 - r},330 A{r},{r} 0 0 1 {400 + r},330" fill="none" '
                 f'stroke="{CLAY}" stroke-width="1.4" opacity="{0.34 - i * 0.09:.2f}" '
                 f'stroke-dasharray="3 9" stroke-linecap="round"/>')
    # figure
    p.append(f'  <circle cx="400" cy="212" r="34" fill="{SAGE}" stroke="{FOREST}" stroke-width="3"/>')
    p.append(f'  <path d="M400,254 C452,254 482,292 482,338 '
             f'C482,364 464,376 442,364 C492,392 522,432 522,478 '
             f'L278,478 C278,432 308,392 358,364 '
             f'C336,376 318,364 318,338 C318,292 348,254 400,254 Z" '
             f'fill="{SAGE}" stroke="{FOREST}" stroke-width="3" stroke-linejoin="round"/>')
    # mat line
    p.append(f'  <path d="M232,482 L568,482" stroke="{FOREST}" stroke-width="3.5" '
             f'stroke-linecap="round" opacity="0.75"/>')
    p.append(f'  <path d="M258,494 L542,494" stroke="{CLAY}" stroke-width="2.4" '
             f'stroke-linecap="round" opacity="0.6"/>')
    return "\n".join(p)


# ---------- 2. Corporate: desk + figure + calm waves ----------
def corporate():
    p = []
    # calm breathing waves above
    for i, y in enumerate((150, 178, 206)):
        p.append(f'  <path d="M250,{y} C310,{y - 22} 370,{y + 22} 430,{y} C480,{y - 18} 520,{y + 12} 556,{y}" '
                 f'fill="none" stroke="{CLAY}" stroke-width="2" opacity="{0.5 - i * 0.13:.2f}" '
                 f'stroke-linecap="round"/>')
    # figure head + torso
    p.append(f'  <circle cx="368" cy="284" r="30" fill="{SAGE}" stroke="{FOREST}" stroke-width="3"/>')
    p.append(f'  <path d="M368,322 C408,322 430,350 430,392 L306,392 C306,350 328,322 368,322 Z" '
             f'fill="{SAGE}" stroke="{FOREST}" stroke-width="3" stroke-linejoin="round"/>')
    # desk
    p.append(f'  <rect x="262" y="392" width="290" height="12" rx="6" fill="{CLAY}" '
             f'stroke="{FOREST}" stroke-width="2.6"/>')
    p.append(f'  <path d="M292,404 L292,470 M522,404 L522,470" stroke="{FOREST}" '
             f'stroke-width="3.4" stroke-linecap="round"/>')
    # laptop
    p.append(f'  <path d="M446,392 L446,348 L520,348 L520,392" fill="#FFFFFF" '
             f'stroke="{FOREST}" stroke-width="2.6" stroke-linejoin="round"/>')
    # chair back
    p.append(f'  <path d="M244,470 L244,352 C244,336 256,326 272,326" fill="none" '
             f'stroke="{FOREST}" stroke-width="3.2" stroke-linecap="round" opacity="0.8"/>')
    return "\n".join(p)


# ---------- 3. Retreats: layered hills + sun ----------
def retreats():
    p = []
    p.append(f'  <circle cx="400" cy="232" r="56" fill="{CLAY}" opacity="0.85" '
             f'stroke="{FOREST}" stroke-width="2.6"/>')
    # far hills
    p.append(f'  <path d="M186,392 C246,318 300,318 356,376 C404,426 452,344 512,344 '
             f'C566,344 592,374 618,398 L618,432 L186,432 Z" fill="{SAGE}" '
             f'stroke="{FOREST}" stroke-width="2.8" stroke-linejoin="round"/>')
    # near hills
    p.append(f'  <path d="M170,470 C232,406 288,412 344,452 C392,486 440,430 502,432 '
             f'C560,434 604,462 632,486 L632,500 L170,500 Z" fill="{FOREST_LIGHT}" '
             f'stroke="{FOREST}" stroke-width="2.8" stroke-linejoin="round" opacity="0.92"/>')
    # small pines
    for x, scale in ((268, 1.0), (306, 0.72), (516, 0.86)):
        h = 46 * scale
        p.append(f'  <path d="M{x},{452 - h} L{x - 15 * scale},{452} L{x + 15 * scale},{452} Z" '
                 f'fill="{FOREST}" opacity="0.9"/>')
        p.append(f'  <path d="M{x},{452} L{x},{464}" stroke="{FOREST}" stroke-width="2.4" '
                 f'stroke-linecap="round"/>')
    # ground line
    p.append(f'  <path d="M198,500 L602,500" stroke="{FOREST}" stroke-width="3" '
             f'stroke-linecap="round" opacity="0.55"/>')
    return "\n".join(p)


# ---------- 4. Botanicals: mortar, pestle & sprigs ----------
def botanicals():
    p = []
    # sprigs behind
    p.append(f'  <path d="M300,332 C296,282 300,240 306,206" fill="none" stroke="{FOREST}" '
             f'stroke-width="2.6" stroke-linecap="round"/>')
    for i, y in enumerate(range(310, 205, -26)):
        span = 44 - i * 5
        p.append(leaf(302, y, 302 - span, y - span * 0.5, 15, fill=SAGE))
        p.append(leaf(302, y, 302 + span, y - span * 0.5, 15, fill="#E6EFE7"))
    p.append(f'  <path d="M498,330 C502,286 500,250 494,216" fill="none" stroke="{FOREST}" '
             f'stroke-width="2.4" stroke-linecap="round"/>')
    for i, y in enumerate(range(312, 214, -24)):
        r = 9 - i * 0.9
        p.append(f'  <circle cx="{498 - (i % 2) * 14 + 7:.0f}" cy="{y}" r="{r:.1f}" '
                 f'fill="{CLAY_SOFT if i % 2 else CLAY}" stroke="{FOREST}" stroke-width="1.8" opacity="0.9"/>')
    # mortar bowl
    p.append(f'  <path d="M290,342 L510,342 C510,412 466,458 400,458 '
             f'C334,458 290,412 290,342 Z" fill="{CLAY}" stroke="{FOREST}" '
             f'stroke-width="3" stroke-linejoin="round" opacity="0.92"/>')
    p.append(f'  <ellipse cx="400" cy="342" rx="110" ry="20" fill="{CLAY_SOFT}" '
             f'stroke="{FOREST}" stroke-width="3"/>')
    # base
    p.append(f'  <path d="M348,458 L452,458 C452,472 436,480 400,480 '
             f'C364,480 348,472 348,458 Z" fill="{FOREST_LIGHT}" stroke="{FOREST}" '
             f'stroke-width="2.8" stroke-linejoin="round"/>')
    # pestle
    p.append(f'  <path d="M470,214 C486,224 492,242 484,258 L430,338 '
             f'C424,346 410,346 406,336 C402,326 408,318 414,312 L470,214 Z" '
             f'fill="#F1EADC" stroke="{FOREST}" stroke-width="2.8" stroke-linejoin="round"/>')
    return "\n".join(p)


ART = {
    "wellness": wellness,
    "corporate": corporate,
    "retreats": retreats,
    "botanicals": botanicals,
}

for name, fn in ART.items():
    with open(os.path.join(OUT, f"{name}.svg"), "w", encoding="utf-8") as f:
        f.write(wrapper(fn()))
    print("wrote", name + ".svg")
