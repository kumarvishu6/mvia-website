# -*- coding: utf-8 -*-
"""Generates elegant botanical placeholder art for MVIA products.
Math-driven so curves stay smooth and symmetric."""
import math, os

OUT = r"C:\Users\Vishnu singh\Downloads\mvia-nextjs_1\public\img\products"
os.makedirs(OUT, exist_ok=True)

W = H = 600
FOREST = "#173D32"
FOREST_LIGHT = "#2F5B4A"
CLAY = "#B96F4A"
CLAY_SOFT = "#D89B79"


def leaf(bx, by, tx, ty, width, fill="none", stroke=FOREST, sw=2.6, opacity=1.0):
    """Symmetric leaf from base->tip, bulging by `width` on both sides."""
    dx, dy = tx - bx, ty - by
    length = math.hypot(dx, dy) or 1
    ux, uy = dx / length, dy / length
    px, py = -uy, ux  # perpendicular
    mx, my = bx + dx * 0.5, by + dy * 0.5
    c1 = (mx + px * width, my + py * width)
    c2 = (mx - px * width, my - py * width)
    return (
        f'<path d="M{bx:.1f},{by:.1f} Q{c1[0]:.1f},{c1[1]:.1f} {tx:.1f},{ty:.1f} '
        f'Q{c2[0]:.1f},{c2[1]:.1f} {bx:.1f},{by:.1f} Z" fill="{fill}" stroke="{stroke}" '
        f'stroke-width="{sw}" stroke-linejoin="round" opacity="{opacity}"/>'
    )


def vein(bx, by, tx, ty, sw=1.4, opacity=0.5):
    return (f'<path d="M{bx:.1f},{by:.1f} L{tx:.1f},{ty:.1f}" stroke="{FOREST}" '
            f'stroke-width="{sw}" opacity="{opacity}" stroke-linecap="round"/>')


def stem(points, sw=2.8):
    """Smooth polyline through points via quadratic midpoint smoothing."""
    d = f"M{points[0][0]:.1f},{points[0][1]:.1f}"
    for i in range(1, len(points) - 1):
        x0, y0 = points[i]
        x1, y1 = points[i + 1]
        mx, my = (x0 + x1) / 2, (y0 + y1) / 2
        d += f" Q{x0:.1f},{y0:.1f} {mx:.1f},{my:.1f}"
    d += f" L{points[-1][0]:.1f},{points[-1][1]:.1f}"
    return (f'<path d="{d}" fill="none" stroke="{FOREST}" stroke-width="{sw}" '
            f'stroke-linecap="round"/>')


def circle(cx, cy, r, fill="none", stroke=FOREST, sw=2.4, opacity=1.0):
    return (f'<circle cx="{cx:.1f}" cy="{cy:.1f}" r="{r:.1f}" fill="{fill}" '
            f'stroke="{stroke}" stroke-width="{sw}" opacity="{opacity}"/>')


def wrapper(inner, seed_rot=0):
    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="{W}" height="{H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0.6" y2="1">
      <stop offset="0%" stop-color="#F8F4EB"/>
      <stop offset="100%" stop-color="#EDE3D0"/>
    </linearGradient>
    <radialGradient id="halo" cx="50%" cy="44%" r="52%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.75"/>
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="{W}" height="{H}" fill="url(#bg)"/>
  <circle cx="300" cy="268" r="196" fill="#E6DCC5" opacity="0.55"/>
  <circle cx="300" cy="268" r="196" fill="url(#halo)"/>
  <circle cx="300" cy="268" r="196" fill="none" stroke="{CLAY}" stroke-width="1.1" opacity="0.35"/>
  <g transform="rotate({seed_rot} 300 300)">
{inner}
  </g>
</svg>
"""


# ---------------- 1. Ashwagandha: root with berries ----------------
def ashwagandha():
    p = []
    # foliage first (behind), fuller pairs of leaves
    for y, span, wid in [(268, 92, 30), (216, 76, 25), (170, 58, 20)]:
        p.append(leaf(300, y, 300 - span, y - span * 0.42, wid, fill="#DCE7DF"))
        p.append(vein(300, y, 300 - span, y - span * 0.42))
        p.append(leaf(300, y, 300 + span, y - span * 0.42, wid, fill="#E4EDE5"))
        p.append(vein(300, y, 300 + span, y - span * 0.42))
    # upper stalk
    p.append(stem([(300, 300), (300, 240), (300, 186), (300, 140)], sw=3.2))
    # main taproot — thick, tapering
    p.append(f'<path d="M300,300 C306,344 310,376 302,410 C296,436 288,452 282,470" '
             f'fill="none" stroke="{FOREST}" stroke-width="13" stroke-linecap="round"/>')
    p.append(f'<path d="M300,300 C306,344 310,376 302,410 C296,436 288,452 282,470" '
             f'fill="none" stroke="{FOREST_LIGHT}" stroke-width="5" stroke-linecap="round" opacity="0.45"/>')
    # side rootlets, fuller cluster
    p.append(stem([(304, 336), (262, 358), (232, 398), (222, 436)], sw=6))
    p.append(stem([(308, 366), (350, 386), (374, 422), (380, 452)], sw=5.4))
    p.append(stem([(302, 320), (256, 322), (222, 340)], sw=4))
    p.append(stem([(306, 396), (338, 428), (346, 462)], sw=3.6))
    p.append(stem([(298, 416), (266, 442), (258, 468)], sw=3.2))
    # berries in husk (clay)
    p.append(circle(352, 236, 20, fill=CLAY, stroke=FOREST, sw=2.4, opacity=0.92))
    p.append(circle(248, 268, 16, fill=CLAY_SOFT, stroke=FOREST, sw=2.2, opacity=0.92))
    p.append(circle(300, 132, 13, fill=CLAY, stroke=FOREST, sw=2.2, opacity=0.85))
    return "\n".join("    " + s for s in p)


# ---------------- 2. Tulsi: opposite leaf pairs + flower spike ----------------
def tulsi():
    p = []
    p.append(stem([(300, 470), (300, 380), (302, 300), (300, 214), (300, 150)], sw=3.2))
    pairs = [(430, 96, 30), (376, 82, 26), (322, 68, 22), (270, 54, 18)]
    for y, span, wid in pairs:
        p.append(leaf(300, y, 300 - span, y - span * 0.52, wid))
        p.append(vein(300, y, 300 - span, y - span * 0.52))
        p.append(leaf(300, y, 300 + span, y - span * 0.52, wid))
        p.append(vein(300, y, 300 + span, y - span * 0.52))
    # flower spike — small clay buds
    for i, yy in enumerate(range(150, 96, -13)):
        r = 7.5 - i * 0.7
        p.append(circle(300, yy, r, fill=CLAY if i % 2 == 0 else CLAY_SOFT,
                        stroke=FOREST, sw=1.8, opacity=0.92))
    return "\n".join("    " + s for s in p)


# ---------------- 3. Turmeric & ginger: rhizome + blade leaf ----------------
def turmeric():
    p = []
    # blade leaf behind
    p.append(leaf(292, 430, 248, 130, 62, fill="#DCE7DF", stroke=FOREST, sw=2.6, opacity=0.85))
    p.append(vein(288, 420, 250, 150, sw=1.6, opacity=0.45))
    p.append(leaf(300, 430, 372, 196, 44, fill="#E4EDE5", stroke=FOREST, sw=2.4, opacity=0.8))
    # rhizome body (clay filled organic blob)
    p.append(f'<path d="M214,376 C206,344 232,320 268,320 C296,320 306,332 336,330 '
             f'C374,328 400,348 398,378 C396,408 366,424 328,422 C296,420 282,410 254,412 '
             f'C226,414 218,400 214,376 Z" fill="{CLAY}" stroke="{FOREST}" stroke-width="2.8" '
             f'stroke-linejoin="round" opacity="0.92"/>')
    # finger nubs
    p.append(f'<path d="M258,322 C252,300 262,286 280,284 C296,282 304,296 300,318" '
             f'fill="{CLAY_SOFT}" stroke="{FOREST}" stroke-width="2.6" stroke-linejoin="round"/>')
    p.append(f'<path d="M344,330 C346,306 360,294 376,300 C390,306 390,322 380,336" '
             f'fill="{CLAY_SOFT}" stroke="{FOREST}" stroke-width="2.6" stroke-linejoin="round"/>')
    # ring detail lines on rhizome
    for x in (262, 300, 340):
        p.append(f'<path d="M{x},336 C{x-6},358 {x-4},388 {x+4},408" fill="none" '
                 f'stroke="{FOREST}" stroke-width="1.6" opacity="0.45" stroke-linecap="round"/>')
    return "\n".join("    " + s for s in p)


# ---------------- 4. Brahmi: dropper bottle + round leaves ----------------
def brahmi():
    p = []
    # bottle body
    p.append(f'<path d="M262,262 L262,224 L338,224 L338,262 C368,278 380,306 380,346 '
             f'L380,414 C380,438 366,450 340,450 L260,450 C234,450 220,438 220,414 '
             f'L220,346 C220,306 232,278 262,262 Z" fill="#E7EFE8" stroke="{FOREST}" '
             f'stroke-width="2.8" stroke-linejoin="round"/>')
    # liquid fill
    p.append(f'<path d="M226,356 C258,346 300,368 336,356 C360,348 374,352 378,358 '
             f'L378,414 C378,436 364,446 340,446 L260,446 C236,446 222,436 222,414 Z" '
             f'fill="{CLAY}" opacity="0.55"/>')
    # cap / dropper
    p.append(f'<rect x="272" y="186" width="56" height="40" rx="9" fill="{FOREST}" opacity="0.9"/>')
    p.append(f'<rect x="288" y="150" width="24" height="42" rx="10" fill="none" stroke="{FOREST}" stroke-width="2.6"/>')
    # falling drop
    p.append(f'<path d="M300,120 C310,134 316,142 316,150 C316,159 309,165 300,165 '
             f'C291,165 284,159 284,150 C284,142 290,134 300,120 Z" fill="{CLAY}" opacity="0.9"/>')
    # brahmi round leaves at base
    for (cx, cy, r) in [(186, 428, 22), (152, 400, 16), (414, 428, 22), (448, 402, 16)]:
        p.append(circle(cx, cy, r, fill="#DCE7DF", stroke=FOREST, sw=2.4))
        p.append(vein(cx - r * 0.55, cy, cx + r * 0.55, cy, sw=1.3, opacity=0.5))
    p.append(stem([(186, 428), (240, 442), (300, 452)], sw=2.4))
    p.append(stem([(414, 428), (360, 442), (300, 452)], sw=2.4))
    return "\n".join("    " + s for s in p)


# ---------------- 5. Triphala: three fruits ----------------
def triphala():
    p = []
    fruits = [(300, 196, 60, CLAY), (216, 344, 52, CLAY_SOFT), (386, 344, 52, CLAY)]
    for (cx, cy, r, col) in fruits:
        p.append(circle(cx, cy, r, fill=col, stroke=FOREST, sw=2.8, opacity=0.9))
        # crease line
        p.append(f'<path d="M{cx},{cy-r+6} C{cx-10},{cy} {cx-10},{cy} {cx},{cy+r-6}" '
                 f'fill="none" stroke="{FOREST}" stroke-width="1.6" opacity="0.45"/>')
        # little stalk
        p.append(f'<path d="M{cx},{cy-r} C{cx+2},{cy-r-14} {cx+6},{cy-r-20} {cx+14},{cy-r-24}" '
                 f'fill="none" stroke="{FOREST}" stroke-width="2.4" stroke-linecap="round"/>')
    # leaves tucked between
    p.append(leaf(300, 262, 372, 240, 18, fill="#DCE7DF"))
    p.append(leaf(300, 262, 228, 240, 18, fill="#DCE7DF"))
    p.append(leaf(300, 420, 300, 470, 20, fill="#DCE7DF"))
    return "\n".join("    " + s for s in p)


# ---------------- 6. Chamomile + lavender ----------------
def chamomile_lavender():
    p = []
    # lavender sprig (left)
    p.append(stem([(204, 470), (208, 400), (214, 330), (218, 268)], sw=2.8))
    for i in range(9):
        t = i / 8
        yy = 300 - i * 20
        xx = 214 + i * 0.6
        off = 11 - i * 0.7
        p.append(f'<ellipse cx="{xx-off:.1f}" cy="{yy}" rx="8.5" ry="10.5" fill="#8C7BB0" '
                 f'stroke="{FOREST}" stroke-width="1.6" opacity="0.85"/>')
        p.append(f'<ellipse cx="{xx+off:.1f}" cy="{yy-9}" rx="8.5" ry="10.5" fill="#A292C4" '
                 f'stroke="{FOREST}" stroke-width="1.6" opacity="0.85"/>')
    # chamomile flower (right)
    fcx, fcy = 372, 298
    for i in range(12):
        a = (360 / 12) * i
        rad = math.radians(a)
        tipx = fcx + math.cos(rad) * 78
        tipy = fcy + math.sin(rad) * 78
        bx = fcx + math.cos(rad) * 24
        by = fcy + math.sin(rad) * 24
        p.append(leaf(bx, by, tipx, tipy, 15, fill="#FFFFFF", stroke=FOREST, sw=2.0))
    p.append(circle(fcx, fcy, 25, fill=CLAY, stroke=FOREST, sw=2.6))
    p.append(circle(fcx, fcy, 14, fill=CLAY_SOFT, stroke="none", sw=0, opacity=0.8))
    p.append(stem([(fcx, fcy + 78), (368, 400), (360, 470)], sw=2.8))
    p.append(leaf(364, 404, 430, 380, 15, fill="#DCE7DF"))
    p.append(leaf(362, 436, 300, 424, 14, fill="#DCE7DF"))
    return "\n".join("    " + s for s in p)


# ---------------- generic fallback ----------------
def default_art():
    p = []
    p.append(stem([(300, 460), (300, 370), (300, 280), (300, 190)], sw=3.0))
    for y, span, wid in [(410, 88, 27), (352, 74, 23), (296, 60, 19), (244, 46, 15)]:
        p.append(leaf(300, y, 300 - span, y - span * 0.5, wid, fill="#DCE7DF"))
        p.append(leaf(300, y, 300 + span, y - span * 0.5, wid, fill="#E4EDE5"))
    p.append(circle(300, 178, 14, fill=CLAY, stroke=FOREST, sw=2.2))
    return "\n".join("    " + s for s in p)


ART = {
    "ashwagandha-capsules": (ashwagandha, -3),
    "tulsi-tea": (tulsi, 2),
    "turmeric-ginger": (turmeric, 0),
    "brahmi-drops": (brahmi, 0),
    "triphala-powder": (triphala, 0),
    "chamomile-lavender-oil": (chamomile_lavender, 0),
    "default": (default_art, 0),
}

for slug, (fn, rot) in ART.items():
    svg = wrapper(fn(), rot)
    with open(os.path.join(OUT, f"{slug}.svg"), "w", encoding="utf-8") as f:
        f.write(svg)
    print("wrote", slug + ".svg")
