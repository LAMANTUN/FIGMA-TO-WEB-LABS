# Lab 02: CSS Basics — Colors & Typography

**Difficulty**: ⭐⭐ Medium
**Time**: 35–45 minutes
**Concepts**: CSS variables, Google Fonts, color properties, typography, selectors, box model, specificity

## 🎯 Learning Objectives

- Define and use CSS custom properties (variables) for a consistent design system
- Import and apply Google Fonts with proper fallbacks
- Style body text, headings, paragraphs, and links with a cohesive type scale
- Understand the cascade, selector specificity, and inheritance
- Apply the box model correctly with `box-sizing: border-box`

## � Course Elements Covered

| Course Module | Topics Applied in This Lab |
|---|---|
| [01 — Design Fundamentals](../course-01-design-fundamentals/) | Color theory (HSL, complementary colors), typography (font-family, font-weight, line-height, hierarchy), whitespace (padding, margin) |
| [02 — Figma for Developers](../course-02-figma-for-developers/) | Extracting colors, fonts, and spacing values from Dev Mode CSS panel |
| [03 — Design-to-Code Workflow](../course-03-design-to-code-workflow/) | Step 3 — Extract: pulling design tokens into CSS custom properties |

## �📋 Exercise Description

You will take the HTML structure from Lab 01 and apply **colors and typography** to match a given design specification. No layout changes yet — just colors, fonts, and text styling.

> 💡 In real projects, typography and colors are the first CSS step. Get them right and the page already looks 80% better.

## 🛠️ Setup

### Step 1: Open the Starter Files

1. Open `lab-02-css-basics/index.html` and `lab-02-css-basics/style.css` in VS Code
2. The HTML is already provided — you will only edit the CSS file

### Step 2: Review the Design Specification

Use the following design spec to guide your styling:
- **Background**: Light gray (`#F9FAFB`)
- **Primary text**: Dark (`#111827`), **Muted text**: Gray (`#6B7280`)
- **Primary accent**: Blue (`#1D4ED8`)
- **Heading font**: Playfair Display (serif, weight 700)
- **Body font**: Source Sans 3 (sans-serif, weight 400/600)

### Step 3: Preview Your Work

- Right-click `index.html` → **Open with Live Server**
- Keep the browser open — it will reload automatically when you save

## 📝 Step-by-Step Instructions

### Step 1: Define Your Design Tokens

Before writing CSS, gather your design values:

```
COLORS:
- Background color: #F9FAFB
- Main text color:  #111827
- Muted text color: #6B7280
- Primary color:    #1D4ED8 (button, links)

FONTS:
- Heading font: Playfair Display, weight 700
- Body font: Source Sans 3, weight 400/600

TYPE SCALE:
- H1: 36px
- H2: 24px
- Body text: 16px
- Small text: 14px
- Button text: 16px, weight 600
```

### Step 2: Import Google Fonts

At the very top of your `style.css`, add a Google Fonts import:

```css
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;600;700&family=Playfair+Display:wght@700&display=swap");
```

**How to find Google Fonts:**
1. Go to [fonts.google.com](https://fonts.google.com/)
2. Search for your font name
3. Select the weights you need
4. Copy the `@import` code

### Step 3: Define CSS Variables

Inside `:root`, define all your design values:

```css
:root {
  /* Colors from Figma */
  --color-bg: #f9fafb;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-primary: #1d4ed8;

  /* Fonts from Figma */
  --font-body: "Source Sans 3", Arial, sans-serif;
  --font-heading: "Playfair Display", "Times New Roman", serif;
}
```

> 💡 **Why CSS variables?** If the designer changes a color, you update it in ONE place instead of searching the entire file.

### Step 4: Style the Body

```css
body {
  margin: 0;
  padding: 24px;
  background: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.6;
}
```

### Step 5: Style the Headings

```css
h1, h2 {
  font-family: var(--font-heading);
  color: var(--color-text);
  margin-bottom: 8px;
}
```

### Step 6: Style Paragraphs and Links

```css
p {
  color: var(--color-muted);
  margin-top: 0;
}

nav a {
  color: var(--color-muted);
  text-decoration: none;
}
```

### Step 7: Style the Button Link

```css
.button {
  display: inline-block;
  margin-top: 12px;
  padding: 10px 16px;
  background: var(--color-primary);
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
}
```

### Step 8: Compare with the Spec

Check your page against the design specification:
1. Are the colors correct?
2. Are the fonts loading properly? (check Network tab in DevTools)
3. Is the text readable with proper contrast?

## 💻 Code Structure

### style.css (complete example)

```css
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;600;700&family=Playfair+Display:wght@700&display=swap");

:root {
  --color-bg: #f9fafb;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-primary: #1d4ed8;
  --font-body: "Source Sans 3", Arial, sans-serif;
  --font-heading: "Playfair Display", "Times New Roman", serif;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 24px;
  background: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-body);
  line-height: 1.6;
}

h1, h2 {
  font-family: var(--font-heading);
  color: var(--color-text);
  margin-bottom: 8px;
}

p {
  color: var(--color-muted);
  margin-top: 0;
}

.button {
  display: inline-block;
  margin-top: 12px;
  padding: 10px 16px;
  background: var(--color-primary);
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
}
```

## ✅ Expected Outcome

Your page should:
1. Have a light gray background
2. Use the correct heading font (serif) and body font (sans-serif)
3. Have dark text for headings, lighter text for paragraphs
4. Have a blue button with white text
5. Look clean and readable

## 🧪 Testing Checklist

- [ ] Google Fonts are loading (check Network tab in DevTools)
- [ ] CSS variables are defined in `:root`
- [ ] Body has the correct background color
- [ ] Headings use the heading font
- [ ] Paragraphs use the body font with muted color
- [ ] The button has the primary color
- [ ] No errors in the browser console
- [ ] Colors match the design spec
- [ ] Type scale is consistent (h1 > h2 > body)

## 🎓 Key Concepts

### CSS Variables (Custom Properties)
```css
:root {
  --my-color: #1d4ed8;     /* Define */
}
.button {
  background: var(--my-color);  /* Use */
}
```

### Google Fonts Import
```css
@import url("https://fonts.googleapis.com/css2?family=FontName:wght@400;700&display=swap");
```
Always import fonts **before** any other CSS rules.

### The Box Model
Every HTML element is a box with:
- **Content**: the text or image
- **Padding**: space inside the border
- **Border**: the edge of the box
- **Margin**: space outside the border

Use `box-sizing: border-box` so padding is included in the element's width.

### CSS Units — When to Use Which

| Unit | Relative to | Best for |
|------|------------|----------|
| `px` | Nothing (absolute) | Borders, shadows, small fixed sizes |
| `rem` | Root `<html>` font-size (default 16px) | Font sizes, spacing, padding, margins |
| `em` | Parent element's font-size | Component-internal spacing that scales |
| `%` | Parent element's dimension | Widths, layouts |
| `vh` / `vw` | Viewport height / width | Full-screen sections, hero heights |
| `ch` | Width of the "0" character | Max-width for text (e.g., `max-width: 65ch`) |

```css
/* Practical examples */
h1 { font-size: 2.25rem; }       /* 36px if root is 16px */
p  { font-size: 1rem; }           /* 16px — the body default */
.hero { min-height: 80vh; }       /* 80% of screen height */
.container { max-width: 65ch; }   /* Ideal line length for readability */
border: 1px solid #e2e8f0;        /* px is fine for borders */
```

> 💡 **Rule of thumb**: Use `rem` for font sizes and spacing. Use `px` only for borders and shadows. Use `%` or `vw` for widths.

### CSS Selectors — Beyond Classes and IDs

| Selector | Syntax | What it selects |
|----------|--------|----------------|
| Type | `p` | All `<p>` elements |
| Class | `.button` | Elements with `class="button"` |
| ID | `#hero` | Element with `id="hero"` |
| Descendant | `nav a` | Any `<a>` inside `<nav>` (any depth) |
| Child | `nav > ul` | `<ul>` that is a **direct** child of `<nav>` |
| Adjacent sibling | `h2 + p` | First `<p>` immediately after an `<h2>` |
| General sibling | `h2 ~ p` | All `<p>` siblings after an `<h2>` |
| Attribute | `[type="email"]` | Elements with `type="email"` attribute |
| Pseudo-class | `a:hover` | `<a>` on mouse hover |
| Pseudo-class | `li:first-child` | First `<li>` in its parent |
| Pseudo-class | `li:nth-child(2)` | Second `<li>` in its parent |
| Pseudo-class | `:not(.active)` | Elements without class `.active` |
| Pseudo-element | `p::first-line` | The first line of a `<p>` |
| Pseudo-element | `.card::before` | Generated content before `.card` |

```css
/* Practical examples */
nav > ul > li:first-child a { font-weight: 700; }  /* Bold first nav link */
input[type="email"]:focus { border-color: blue; }   /* Style focused email input */
.card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.1); } /* Card hover shadow */
p:not(:last-child) { margin-bottom: 16px; }         /* Space between paragraphs except last */
```

### Specificity — How CSS Decides Which Rule Wins

When two rules conflict, the browser uses **specificity** to pick the winner. Specificity is scored as `(ID, Class, Type)`:

| Selector | ID | Class | Type | Score |
|----------|:--:|:-----:|:----:|:-----:|
| `p` | 0 | 0 | 1 | 0-0-1 |
| `.button` | 0 | 1 | 0 | 0-1-0 |
| `nav .button` | 0 | 1 | 1 | 0-1-1 |
| `#hero` | 1 | 0 | 0 | 1-0-0 |
| `#hero .button` | 1 | 1 | 0 | 1-1-0 |
| `style="..."` | — | — | — | Wins (inline) |
| `!important` | — | — | — | Wins over everything |

**Rules:**
1. Higher specificity wins
2. At equal specificity, the **last rule** in the CSS wins
3. `!important` overrides everything — avoid it!
4. Inline `style=""` beats any selector — avoid it in stylesheets

> 💡 **Best practice**: Keep specificity low. Use single classes (`.button`, `.card__title`). Avoid IDs for styling. Never use `!important` unless overriding third-party CSS.

### CSS Inheritance

Some CSS properties are **inherited** (passed from parent to children), others are not:

| Inherited ✅ | NOT inherited ❌ |
|---|---|
| `color` | `background` |
| `font-family` | `border` |
| `font-size` | `padding` |
| `line-height` | `margin` |
| `text-align` | `width` / `height` |
| `visibility` | `display` |
| `cursor` | `position` |

```css
body {
  color: #111827;         /* All text inherits this color */
  font-family: sans-serif; /* All text inherits this font */
}

/* Override inheritance for specific elements */
.muted { color: #6b7280; }

/* Force inheritance */
button { font-family: inherit; }  /* Buttons don't inherit font by default! */
```

> 💡 Form elements (`input`, `button`, `select`, `textarea`) don't inherit font styles by default. Always add `font-family: inherit` to them.

## 🚀 Bonus Challenges

1. **Add hover effect**: Change the button color on hover using `.button:hover { background: #1e40af; }`
2. **Add font sizes**: Create CSS variables for `--font-size-lg`, `--font-size-md`, `--font-size-sm`
3. **Use rem units**: Convert all px values to rem (divide by 16)
4. **Style form elements**: Add `font-family: inherit` to all inputs and buttons
5. **Specificity challenge**: Style the first nav link differently using `nav a:first-child`
6. **Style the logo**: Make the logo text bold and larger
7. **Add a border-radius**: Round the button corners with `border-radius: 6px`

## 📚 Resources

- [MDN — CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [Google Fonts](https://fonts.google.com/)
- [MDN — CSS Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors)
- [MDN — CSS Values and Units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)
- [MDN — Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)
- [Specificity Calculator](https://specificity.keegan.st/)
- [CSS-Tricks — A Complete Guide to Custom Properties](https://css-tricks.com/a-complete-guide-to-custom-properties/)

## 🤔 Reflection Questions

1. What are the benefits of using CSS variables instead of hardcoding colors?
2. Why do we add fallback fonts after the Google Font name?
3. What is the difference between `margin` and `padding`?
4. How would you change the entire color scheme of the page quickly?
5. When should you use `rem` instead of `px`? Give 3 examples.
6. What specificity score does `nav .button:hover` have? Why does it beat `.button`?
7. Why don't `<button>` and `<input>` inherit `font-family` by default?

## 💡 Common Mistakes

- **Forgetting `@import` at the top**: Google Fonts import must be the very first line in CSS
- **Typos in variable names**: `var(--color-primry)` won't work — check spelling
- **Not using `box-sizing: border-box`**: Padding will add to element width without it
- **Overusing `!important`**: If you need it, your selector specificity is wrong — fix the selector instead
- **Mixing up `color` and `background`**: `color` is for text, `background` is for backgrounds

## 🎯 Success Criteria

You've successfully completed this exercise when:
- ✅ Fonts are imported and applied correctly
- ✅ All CSS values come from variables (no hardcoded colors in selectors)
- ✅ Typography matches the design spec
- ✅ Colors match the design spec
- ✅ The page is clean and readable

---

**Previous**: [Lab 01: HTML Structure](../lab-01-html-structure/) ←
**Next**: [Lab 03: CSS Positioning](../lab-03-css-positioning/) →
**[Back to Course Home](../README.md)**
