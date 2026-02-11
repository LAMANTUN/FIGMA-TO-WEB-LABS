# Lab 03: CSS Positioning & Display — Controlling Element Placement

**Difficulty**: ⭐⭐ Medium
**Time**: 35–45 minutes
**Concepts**: Display property, position (static/relative/absolute/fixed/sticky), z-index, overflow, stacking contexts

## 🎯 Learning Objectives

- Understand the `display` property: `block`, `inline`, `inline-block`, and `none`
- Use all five `position` values: `static`, `relative`, `absolute`, `fixed`, `sticky`
- Control overlapping elements with `z-index`
- Manage content overflow with `overflow`
- Build practical UI patterns: badges, tooltips, sticky headers, back-to-top buttons

## � Course Elements Covered

| Course Module | Topics Applied in This Lab |
|---|---|
| [01 — Design Fundamentals](../course-01-design-fundamentals/) | Proximity (layered/overlapping elements), contrast (z-index stacking), alignment (positioning within containers) |
| [03 — Design-to-Code Workflow](../course-03-design-to-code-workflow/) | Step 5 — Build: understanding layout before writing code, systematic CSS approach |

## �📋 Exercise Description

You will work with a pre-built HTML page and apply positioning techniques to create common UI patterns: a sticky navigation bar, a card with a positioned badge, a tooltip, and a fixed "back to top" button.

> 💡 Flexbox and Grid handle **layout** (arranging siblings). Positioning handles **placement** — placing an element exactly where you want, even overlapping other elements.

## 🛠️ Setup

### Step 1: Open the Starter Files

1. Open `lab-03-css-positioning/index.html` and `lab-03-css-positioning/style.css`
2. The HTML is structured — you will write the CSS

### Step 2: Preview Your Work

- Right-click `index.html` → **Open with Live Server**
- Keep the browser open and resize it to observe sticky/fixed behavior

## 📝 Part A — The Display Property

Before learning positioning, you must understand the `display` property — it defines how an element behaves in the document flow.

### Block vs Inline vs Inline-Block

```
BLOCK elements (div, p, h1, section):
┌─────────────────────────────────────┐
│ Takes the full width available      │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│ Next block starts on a new line     │
└─────────────────────────────────────┘

INLINE elements (span, a, strong, em):
[Sits][next to][other inline][elements] — no width/height control

INLINE-BLOCK elements:
[Sits next to others] [BUT can have width/height and padding]
```

| Property | Width | Height | Margin/Padding | New line? |
|----------|-------|--------|----------------|-----------|
| `block` | Full parent width | Yes | All sides work | Yes |
| `inline` | Content only | No | Only left/right | No |
| `inline-block` | Set manually | Yes | All sides work | No |
| `none` | — | — | — | Removed from flow |

### Step 1: Style the Navigation Links

Make the navigation links behave as `inline-block` so they sit side by side but accept padding:

```css
.nav-link {
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  color: var(--color-text);
}

.nav-link:hover {
  background: var(--color-primary);
  color: #ffffff;
}
```

### Step 2: Understand Display: None vs Visibility: Hidden

```css
/* Completely removed from the page — takes no space */
.hidden {
  display: none;
}

/* Invisible but still takes up space */
.invisible {
  visibility: hidden;
}
```

> 💡 Use `display: none` to remove elements. Use `visibility: hidden` to hide them while keeping their space.

## 📝 Part B — CSS Positioning

### The Five Position Values

Every element starts with `position: static` (the default). When you change the position, you unlock the **offset properties**: `top`, `right`, `bottom`, `left`.

```
┌──────────────────────────────────────────────────────┐
│ static    — Default. Normal document flow. No offsets│
│ relative  — Offset from its normal position          │
│ absolute  — Offset from nearest positioned ancestor  │
│ fixed     — Offset from the viewport (stays on scroll│
│ sticky    — Switches between relative and fixed      │
└──────────────────────────────────────────────────────┘
```

### Step 3: Position Relative — Nudge an Element

`position: relative` moves an element from where it **would normally be**, without affecting surrounding elements:

```css
.hero-title {
  position: relative;
  top: -10px;    /* Moves up by 10px from normal position */
  left: 20px;    /* Moves right by 20px */
}
```

> 💡 The original space is preserved. Other elements don't move.

### Step 4: Position Absolute — Place Relative to a Parent

`position: absolute` removes an element from the normal flow and positions it relative to the **nearest ancestor with `position: relative`** (or the viewport if none exists).

**The parent-child pattern** (most common use case):

```css
/* Parent must be positioned */
.card {
  position: relative;    /* Creates a positioning context */
  padding: 20px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
}

/* Child is positioned inside the parent */
.card__badge {
  position: absolute;
  top: -10px;            /* Above the card */
  right: -10px;          /* Outside the right edge */
  background: #ef4444;
  color: #ffffff;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 700;
}
```

This creates a badge that sits on the corner of the card — a very common UI pattern.

### Step 5: Position Fixed — Stays on Screen

`position: fixed` attaches an element to the **viewport**. It doesn't move when the page scrolls:

```css
/* Fixed "Back to Top" button */
.back-to-top {
  position: fixed;
  bottom: 24px;         /* 24px from the bottom of the screen */
  right: 24px;          /* 24px from the right edge */
  padding: 12px 16px;
  background: var(--color-primary);
  color: #ffffff;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 18px;
  z-index: 100;
}
```

### Step 6: Position Sticky — Sticks on Scroll

`position: sticky` behaves like `relative` until the element reaches a scroll threshold, then it "sticks" like `fixed`:

```css
/* Sticky navigation bar */
.site-header {
  position: sticky;
  top: 0;                /* Sticks when it reaches the top of viewport */
  background: #ffffff;
  padding: 12px 24px;
  border-bottom: 1px solid #e2e8f0;
  z-index: 50;
}
```

> 💡 `sticky` requires a `top`, `bottom`, `left`, or `right` value to know where to stick. It also needs the parent to be tall enough to scroll.

## 📝 Part C — Z-Index & Overflow

### Step 7: Control Stacking with Z-Index

When positioned elements overlap, `z-index` controls which one is on top:

```css
.tooltip {
  position: absolute;
  z-index: 10;          /* Higher values = on top */
}

.header {
  position: sticky;
  z-index: 50;          /* Header stays above tooltips */
}

.modal-overlay {
  position: fixed;
  z-index: 100;         /* Modal above everything */
}
```

**Z-index rules:**
- Only works on **positioned** elements (`relative`, `absolute`, `fixed`, `sticky`)
- Higher number = closer to the user
- Use a consistent scale (e.g., 10, 50, 100) — don't use `z-index: 9999`

### Step 8: Manage Overflow

`overflow` controls what happens when content is bigger than its container:

```css
/* Hide content that overflows */
.card__text--truncated {
  max-height: 80px;
  overflow: hidden;
}

/* Add a scrollbar when content overflows */
.scrollable-list {
  max-height: 200px;
  overflow-y: auto;       /* Vertical scroll only when needed */
}
```

| Value | Behavior |
|-------|----------|
| `visible` | Content overflows freely (default) |
| `hidden` | Content is clipped — no scrollbar |
| `scroll` | Always shows scrollbar |
| `auto` | Scrollbar only when needed |

## 💻 Complete Code Structure

### style.css (key sections)

```css
/* === DISPLAY === */
.nav-link {
  display: inline-block;
  padding: 8px 16px;
}

/* === STICKY HEADER === */
.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: #ffffff;
  border-bottom: 1px solid #e2e8f0;
}

/* === CARD WITH BADGE (absolute) === */
.card {
  position: relative;
}
.card__badge {
  position: absolute;
  top: -10px;
  right: -10px;
}

/* === TOOLTIP (absolute) === */
.tooltip-wrapper {
  position: relative;
  display: inline-block;
}
.tooltip {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  padding: 6px 12px;
  background: #1e293b;
  color: #ffffff;
  font-size: 12px;
  border-radius: 4px;
  white-space: nowrap;
  visibility: hidden;
  opacity: 0;
}
.tooltip-wrapper:hover .tooltip {
  visibility: visible;
  opacity: 1;
}

/* === BACK TO TOP (fixed) === */
.back-to-top {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 100;
}

/* === OVERFLOW === */
.scrollable {
  max-height: 200px;
  overflow-y: auto;
}
```

## ✅ Expected Outcome

Your page should:
1. Have a **sticky header** that stays at the top when scrolling
2. Cards with **positioned badges** in the corner (using absolute)
3. A **tooltip** that appears on hover (using absolute)
4. A **fixed "Back to Top" button** in the bottom-right corner
5. A section with **scrollable overflow** content

## 🧪 Testing Checklist

- [ ] Navigation links display as `inline-block` with padding
- [ ] Header sticks to the top when scrolling (`position: sticky`)
- [ ] Card badge is positioned in the top-right corner (`position: absolute`)
- [ ] Card has `position: relative` as the positioning context
- [ ] Tooltip appears on hover (absolute + visibility)
- [ ] "Back to Top" button stays fixed in the bottom-right
- [ ] Z-index values follow a logical scale (10, 50, 100)
- [ ] Scrollable section clips content with `overflow-y: auto`
- [ ] No horizontal scrollbar on the page
- [ ] No elements are accidentally hidden behind others

## 🎓 Key Concepts

### Position Cheat Sheet

| `position` | In flow? | Offset relative to | Common use case |
|------------|----------|-------------------|-----------------|
| `static` | Yes | — (offsets ignored) | Default |
| `relative` | Yes | Its own normal position | Nudging, creating context for children |
| `absolute` | **No** | Nearest positioned ancestor | Badges, tooltips, dropdown menus |
| `fixed` | **No** | Viewport | Sticky navs, floating buttons, modals |
| `sticky` | Yes → **No** | Viewport (when stuck) | Sticky headers, sidebars |

### The positioning context rule

For `position: absolute` to work relative to a parent, the parent **must** have `position: relative` (or any non-static position):

```
<div style="position: relative">   ← positioning context
  <span style="position: absolute; top: 0; right: 0">
    ← positioned relative to the div
  </span>
</div>
```

### Z-Index Scale Convention

```
Elements:    z-index: 1–10
Dropdowns:   z-index: 20–40
Sticky nav:  z-index: 50
Overlays:    z-index: 90
Modals:      z-index: 100
```

## 🚀 Bonus Challenges

1. **Dropdown menu**: Create a nav link that shows a dropdown on hover using `position: absolute`
2. **Centered modal**: Use `position: fixed` + `top: 50%; left: 50%; transform: translate(-50%, -50%)` to center a modal
3. **Sticky sidebar**: Create a two-column layout where the sidebar sticks while content scrolls
4. **Scroll indicator**: Use `position: fixed` + a full-width bar at the top that expands on scroll (CSS only or with minimal JS)

## 📚 Resources

- [MDN — CSS Position](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
- [MDN — Display Property](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
- [MDN — Z-Index](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index)
- [MDN — Overflow](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow)
- [CSS-Tricks — Absolute, Relative, Fixed Positioning](https://css-tricks.com/absolute-relative-fixed-positioining-how-do-they-differ/)

## 🤔 Reflection Questions

1. Why does `position: absolute` need a parent with `position: relative`?
2. What is the difference between `position: fixed` and `position: sticky`?
3. Why should you avoid `z-index: 9999`? What's a better approach?
4. When would you use `overflow: hidden` vs `overflow: auto`?
5. What happens to an `absolute` element if no ancestor has `position: relative`?

## 💡 Common Mistakes

- **Absolute without relative parent**: The element positions relative to the viewport — always set `position: relative` on the parent
- **Z-index without position**: `z-index` only works on positioned elements — it does nothing on `static`
- **Z-index arms race**: Using `z-index: 99999` — use a planned scale instead
- **Forgetting sticky needs a threshold**: `position: sticky` without `top: 0` won't stick
- **Sticky inside overflow:hidden**: Sticky doesn't work if any ancestor has `overflow: hidden`
- **Fixed elements on mobile**: `position: fixed` can behave poorly on iOS Safari with virtual keyboards

## 🎯 Success Criteria

You've successfully completed this exercise when:
- ✅ You can explain the 5 position values and when to use each
- ✅ Display: block, inline, inline-block differences are clear
- ✅ Sticky header works when scrolling
- ✅ Card badges are positioned with absolute/relative pattern
- ✅ Z-index follows a logical scale
- ✅ Overflow is controlled where needed

---

**Previous**: [Lab 02: CSS Basics](../lab-02-css-basics/) ←
**Next**: [Lab 04: Flexbox Layout](../lab-04-flexbox-layout/) →
**[Back to Course Home](../README.md)**
