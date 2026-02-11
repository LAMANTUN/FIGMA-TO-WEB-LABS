# Lab 06: UI Components — Build Reusable Pieces

**Difficulty**: ⭐⭐ Medium
**Time**: 35–45 minutes
**Concepts**: Component thinking, BEM naming, CSS modifiers, reusability, design system basics

## 🎯 Learning Objectives

- Think in terms of reusable components
- Use BEM-like naming convention for CSS classes
- Create modifiers for component variants (primary, secondary, etc.)
- Build 3 core UI components: Button, Card, Input
- Understand how component-based thinking works in modern web development

## � Course Elements Covered

| Course Module | Topics Applied in This Lab |
|---|---|
| [01 — Design Fundamentals](../course-01-design-fundamentals/) | Repetition (consistent component styles), contrast (button variants, hover states) |
| [02 — Figma for Developers](../course-02-figma-for-developers/) | Components & variants structure, inspecting component properties in Dev Mode |
| [04 — Design Systems](../course-04-design-systems/) | Atomic Design (atoms → molecules), BEM naming as a convention, component library thinking |

## �📋 Exercise Description

You will build a small **component library** — a collection of reusable UI pieces that can be used anywhere on a page. Each component should have a base style and at least one variant.

> 💡 In design systems, UI elements are built as reusable "components" with variants. As developers, we do the same with CSS classes and modifiers.

## 🛠️ Setup

### Step 1: Open the Starter Files

1. Open `lab-06-ui-components/index.html` and `lab-06-ui-components/style.css`
2. The HTML shows all 3 components — you will style them

### Step 2: Study the Component Specifications

You need to build these components:
- **Buttons**: Primary (blue), Secondary (lighter blue), Ghost (transparent with border)
- **Cards**: White background, border, rounded corners, with title + text + action
- **Input fields**: Labeled inputs with focus states

### Step 3: Preview

- Right-click `index.html` → **Open with Live Server**

## 📝 Step-by-Step Instructions

### Step 1: Understand Component Thinking

A **component** is a self-contained, reusable UI piece:

```
Component = Base Style + Variants (Modifiers)

Example: Button
├── Base: .button (padding, font, cursor)
├── Variant: .button--primary (blue background)
├── Variant: .button--secondary (lighter blue)
└── Variant: .button--ghost (transparent, border only)
```

### Step 2: Learn BEM Naming

**BEM** = Block, Element, Modifier:

| Part | Syntax | Example |
|------|--------|---------|
| Block | `.block` | `.card` |
| Element | `.block__element` | `.card__title` |
| Modifier | `.block--modifier` | `.card--highlighted` |

```html
<article class="card">
  <h3 class="card__title">Title</h3>
  <p class="card__text">Text content</p>
  <button class="button button--primary">Action</button>
</article>
```

### Step 3: Build the Button Component

**Base styles** (shared by all buttons):

```css
.button {
  display: inline-block;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  transition: opacity 0.2s;
}

.button:hover {
  opacity: 0.85;
}
```

**Modifier styles** (specific to each variant):

```css
.button--primary {
  background: var(--color-primary);
  color: #ffffff;
}

.button--secondary {
  background: var(--color-secondary);
  color: #ffffff;
}
```

### Step 4: Build the Card Component

```css
/* Card base */
.card {
  padding: 20px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
}

/* Card elements */
.card__title {
  margin: 0 0 8px 0;
  font-size: 18px;
}

.card__text {
  margin: 0 0 16px 0;
  color: var(--color-muted);
  line-height: 1.5;
}
```

### Step 5: Build the Input Component

```css
/* Field wrapper */
.field {
  display: block;
  margin-bottom: 16px;
}

/* Label */
.field__label {
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
  font-size: 14px;
}

/* Input */
.field__input {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-family: inherit;
  font-size: 16px;
}

.field__input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}
```

### Step 6: Create New Variants (Exercise)

Now create these new variants yourself:

1. **Ghost button**: transparent background, border, colored text
   ```css
   .button--ghost {
     background: transparent;
     border: 2px solid var(--color-primary);
     color: var(--color-primary);
   }
   ```

2. **Highlighted card**: add a colored left border
3. **Disabled input**: gray background, `cursor: not-allowed`

## 💻 Code Structure

### HTML with BEM classes

```html
<!-- Buttons with modifiers -->
<button class="button button--primary">Primary</button>
<button class="button button--secondary">Secondary</button>
<button class="button button--ghost">Ghost</button>

<!-- Card with elements -->
<article class="card">
  <h3 class="card__title">Card Title</h3>
  <p class="card__text">Card description text.</p>
  <button class="button button--primary">Action</button>
</article>

<!-- Input with label -->
<label class="field">
  <span class="field__label">Email</span>
  <input class="field__input" type="email" placeholder="you@example.com" />
</label>
```

## ✅ Expected Outcome

Your page should:
1. Show at least 2 button variants (primary, secondary)
2. Show a card with title, text, and a button inside
3. Show an input field with a label
4. All components look clean and consistent
5. Hover effects work on buttons and inputs

## 🧪 Testing Checklist

- [ ] Buttons use BEM naming: `.button`, `.button--primary`
- [ ] Card uses BEM naming: `.card`, `.card__title`, `.card__text`
- [ ] Input uses BEM naming: `.field`, `.field__label`, `.field__input`
- [ ] At least 2 button variants exist
- [ ] Hover effects are visible on buttons
- [ ] Hover effects use `transition` for smooth animation
- [ ] Cards have `box-shadow` for elevation on hover
- [ ] Focus effect is visible on inputs with transition
- [ ] Components look consistent (same border-radius, same spacing)
- [ ] Components match the specification
- [ ] No JavaScript is used

## 🎓 Key Concepts

### Why Components?
- **Reusability**: Write once, use everywhere
- **Consistency**: Same button looks the same on every page
- **Maintainability**: Change the button style in one place

### BEM Naming Convention
```
.block                    → The component itself
.block__element           → A part of the component
.block--modifier          → A variant of the component

.card                     → The card component
.card__title              → The title inside the card
.card--highlighted        → A highlighted version of the card
```

### Modifier Pattern in HTML
```html
<!-- Base + Modifier together -->
<button class="button button--primary">Click me</button>
```
The element always has the **base class** AND the **modifier class**.

### CSS Transitions — Smooth State Changes

Transitions create smooth animations when a property changes (e.g. on hover):

```css
/* Shorthand: transition: property duration timing-function delay */
.button {
  background: var(--color-primary);
  transition: background 0.2s ease, transform 0.2s ease;
}

.button:hover {
  background: #1e40af;       /* Smooth color change */
  transform: translateY(-2px); /* Slight lift */
}
```

| Property | Example | Purpose |
|----------|---------|--------|
| `transition-property` | `background`, `all` | Which CSS property to animate |
| `transition-duration` | `0.2s`, `300ms` | How long the animation takes |
| `transition-timing-function` | `ease`, `ease-in-out`, `linear` | Speed curve |
| `transition-delay` | `0s`, `0.1s` | Wait before starting |

**Common transitions:**

```css
/* Card hover lift effect */
.card {
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}
.card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  transform: translateY(-4px);
}

/* Input focus glow */
.field__input {
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}
.field__input:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
}

/* Link underline slide-in */
nav a {
  position: relative;
  text-decoration: none;
}
nav a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-primary);
  transition: width 0.3s ease;
}
nav a:hover::after {
  width: 100%;
}
```

### CSS Transforms — Move, Scale, Rotate

`transform` changes an element's visual appearance without affecting layout:

| Function | Example | Effect |
|----------|---------|--------|
| `translateX/Y` | `translateY(-4px)` | Move up/down/left/right |
| `scale` | `scale(1.05)` | Enlarge or shrink |
| `rotate` | `rotate(3deg)` | Rotate clockwise |
| `skew` | `skewX(5deg)` | Tilt/lean |

```css
/* Scale on hover */
.card:hover {
  transform: scale(1.02);     /* 2% bigger */
}

/* Rotate icon on hover */
.icon:hover {
  transform: rotate(15deg);
}

/* Combine multiple transforms */
.button:active {
  transform: translateY(1px) scale(0.98);  /* Press effect */
}
```

> 💡 Always pair `transform` with `transition` for smooth animation. Without transition, the change is instant.

### Pseudo-Elements — `::before` and `::after`

Pseudo-elements inject visual content without adding HTML:

```css
/* Decorative line above section title */
.section-title::before {
  content: '';              /* Required! (even if empty) */
  display: block;
  width: 40px;
  height: 3px;
  background: var(--color-primary);
  margin-bottom: 12px;
}

/* Required field indicator */
.field__label--required::after {
  content: ' *';            /* Adds a red asterisk */
  color: #ef4444;
}

/* Tag/badge with ::before */
.card--featured::before {
  content: '★ Featured';
  display: inline-block;
  background: #f59e0b;
  color: #ffffff;
  padding: 2px 8px;
  font-size: 12px;
  border-radius: 4px;
  margin-bottom: 8px;
}
```

**Rules for pseudo-elements:**
- `content` is **required** (even `content: ''` for decorative)
- They are `inline` by default — add `display: block` or `display: inline-block` if needed
- They are children of the element (`.card::before` is inside `.card`)
- Cannot be used on `<img>`, `<input>`, or `<br>` (void/replaced elements)

### Box-Shadow — Depth and Elevation

```css
/* box-shadow: x-offset y-offset blur spread color */
.card {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);           /* Subtle */
}
.card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);         /* Elevated */
}
.field__input:focus {
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);      /* Focus ring */
}
```

## 🚀 Bonus Challenges

1. **Button sizes**: Create `.button--sm` (small) and `.button--lg` (large) modifiers
2. **Card with image**: Add a `.card__image` element at the top of the card
3. **Input states**: Create `.field__input--error` with a red border and error message
4. **Animated underline**: Use `::after` pseudo-element to create a sliding underline on nav links
5. **Press effect**: Add `transform: scale(0.97)` on `.button:active` for a click feel
6. **Skeleton loading**: Create a `.card--loading` variant with a pulsing gray background using `@keyframes`
7. **Component page**: Create a full "style guide" page showing all components and variants
8. **Design match**: Compare your components pixel-by-pixel with the reference design

## 📚 Resources

- [BEM — Block Element Modifier](https://getbem.com/)
- [MDN — Organizing your CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Organizing)
- [MDN — CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
- [MDN — CSS Transforms](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
- [MDN — Pseudo-elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)
- [CSS-Tricks — BEM 101](https://css-tricks.com/bem-101/)
- [Refactoring UI](https://www.refactoringui.com/) — Design tips for developers

## 🤔 Reflection Questions

1. Why do we separate base styles from modifier styles?
2. What is the advantage of BEM naming over generic class names like `.blue-btn`?
3. How would you organize components in a real project with 20+ components?
4. What makes a component "reusable" vs "specific to one page"?
5. Why should you always pair `transform` with `transition`?
6. When would you use `::before`/`::after` instead of adding a real HTML element?

## 💡 Common Mistakes

- **Forgetting the base class**: `<button class="button--primary">` won't work — you need `class="button button--primary"`
- **Too specific selectors**: Don't write `.page .section .card .button` — just `.button`
- **Inconsistent naming**: Pick BEM and stick with it throughout the project
- **Hardcoded colors in components**: Use CSS variables so components adapt to theme changes
- **No focus styles on inputs**: Always style `:focus` for accessibility
- **Transitioning `all`**: Avoid `transition: all 0.3s` — be explicit about which properties to animate
- **Forgetting `content` on pseudo-elements**: `::before` and `::after` won't show without `content`
- **No transition on default state**: Put `transition` on the base state, not the `:hover` state

## 🎯 Success Criteria

You've successfully completed this exercise when:
- ✅ All 3 components are styled (Button, Card, Input)
- ✅ BEM naming is used consistently
- ✅ At least 2 button variants exist
- ✅ Components look similar to the design spec
- ✅ Hover and focus states use smooth transitions
- ✅ At least 1 component uses `box-shadow` for elevation
- ✅ You created at least 1 new variant yourself

---

**Previous**: [Lab 05: Responsive Design](../lab-05-responsive/) ←
**Next**: [Lab 07: JavaScript Interactions](../lab-07-javascript-interactions/) →
**[Back to Course Home](../README.md)**
