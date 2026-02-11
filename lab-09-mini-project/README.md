# Lab 09: Mini Project — From Figma to Code: Complete Landing Page Integration

**Difficulty**: ⭐⭐⭐ Intermediate
**Time**: 60–90 minutes
**Concepts**: Figma Dev Mode, design-to-code workflow, extracting design tokens, all previous HTML/CSS/JS concepts combined

## 🎯 Project Goals

- **Integrate a real Figma design** into a fully working web page from scratch
- Learn to use **Figma Dev Mode** to inspect spacing, colors, fonts, and component properties
- Extract **design tokens** (colors, typography, spacing) directly from a Figma file
- Apply **everything** you learned in Lab 01 through Lab 08
- Work autonomously with minimal instructions, just like a real developer-designer workflow
## 📚 Course Elements Covered

| Course Module | Topics Applied in This Lab |
|---|---|
| [01 — Design Fundamentals](../course-01-design-fundamentals/) | All CRAP principles applied to a real design: contrast, repetition, alignment, proximity |
| [02 — Figma for Developers](../course-02-figma-for-developers/) | Full Dev Mode workflow: inspect, extract colors/fonts/spacing, export assets, read components |
| [03 — Design-to-Code Workflow](../course-03-design-to-code-workflow/) | Complete 7-step pipeline: Receive → Audit → Extract → Plan → Build → Review → Refine |
| [04 — Design Systems](../course-04-design-systems/) | Atomic Design in practice, design tokens as CSS variables, component-based architecture |
## � Figma-to-Code Workflow

This is the **only lab** where you work directly from a Figma file. Follow this workflow:

### The 7-Step Pipeline
1. **Receive** — Open the Figma file and get an overview
2. **Audit** — Identify all sections, components, colors, fonts, and spacing
3. **Extract** — Copy exact values from Figma Dev Mode (hex colors, px sizes, font names)
4. **Plan** — Map Figma layers to HTML structure; list CSS variables needed
5. **Build** — Code the HTML, CSS, and JS section by section
6. **Review** — Compare your page side-by-side with the Figma design
7. **Refine** — Fix pixel differences, responsive issues, and clean up code

## �📋 Project Overview

You are building a **landing page** for a fictional product called **FocusFlow** — a productivity app for students. The page includes:

- **Header**: Logo, navigation links, CTA button
- **Hero section**: Main headline, subtitle, 2 buttons, image
- **Features section**: 3 feature cards
- **Pricing section**: Simple pricing box
- **Footer**: Contact information

## 🛠️ Setup

### Step 1: Open and Inspect the Figma Design

1. Open the **official Figma file** provided by your instructor:
   👉 **[Open Figma Design File](https://www.figma.com/site/ZM8Dxe6DvfkniEvcUHrZM7/Modern--Clean-SaaS-Company--Community-?node-id=0-1&p=f&t=UfKo5dNuXvMspRGZ-0)**
2. Click **"Duplicate to your drafts"** to get your own editable copy
3. Switch to **Dev Mode** (toggle in top-right) to inspect elements
4. **Spend 10 minutes analyzing the design before writing any code:**
   - Click on elements to see their exact colors, fonts, and spacing in the right panel
   - Note the padding, margin, and gap values
   - Identify which fonts and weights are used
   - Look at how components are structured (buttons, cards, etc.)
5. Write down your extracted design tokens:

```
MY EXTRACTED TOKENS:
- Background:  #______
- Text color:  #______
- Primary:     #______
- Secondary:   #______
- Heading font: ____________ (weight: ___)
- Body font:    ____________ (weight: ___)
- Base spacing:  ___px
- Border radius: ___px
```

> 💡 You can also use the HTML reference in `../course-02-figma-for-developers/design/reference-landing-page.html` as a visual guide.

### Step 2: Plan Your Approach (Using Figma Insights)

Before coding, answer these questions by inspecting the Figma file:
- [ ] What HTML sections do I see in the Figma layers panel?
- [ ] What colors and fonts does the design use? (extract exact values)
- [ ] What components are reused (buttons, cards)? What are their variants?
- [ ] What spacing values are consistent across the design?
- [ ] Which sections need to be responsive? (check mobile frame if available)
- [ ] What JavaScript interaction would enhance the page?

### Step 3: Open the Starter Files

Files provided:
- `index.html` — Basic structure (you can modify it)
- `style.css` — Empty or minimal (you build from scratch)
- `script.js` — Empty (add interactions)

## 📝 Step-by-Step Instructions

### Step 1: Extract Design Tokens from Figma (10 minutes)

Use Figma Dev Mode to extract:
1. All color values (backgrounds, text, accents, borders)
2. Font families and weights
3. Font sizes for each heading level and body text
4. Spacing values (padding, margins, gaps)
5. Border radius values
6. Box shadows (if any)

### Step 2: Build the HTML Structure (15 minutes)

1. Create the full semantic HTML structure
2. Use `<header>`, `<main>`, `<section>`, `<footer>`
3. Add HTML comments before each section
4. Include all content: headings, text, buttons, image placeholders

### Step 3: Set Up CSS Variables from Figma Tokens (5 minutes)

Use the **exact values** you extracted from Figma:

```css
:root {
  --color-bg: #f8fafc;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-primary: #2563eb;
  --color-secondary: #0ea5e9;
  --font-body: "Source Sans 3", Arial, sans-serif;
  --font-heading: "Playfair Display", "Times New Roman", serif;
}
```

### Step 4: Style Typography and Colors from Figma (10 minutes)

- Import Google Fonts
- Apply body font, background, text color
- Style headings, paragraphs, links

### Step 5: Build the Layout with Flexbox (15 minutes)

- Header: logo left, links center, button right
- Hero: text left, image right
- Features: 3 cards in a row
- Pricing: centered box

### Step 6: Make It Responsive (10 minutes)

- Mobile: everything stacked (column)
- Desktop (768px+): side-by-side layouts

### Step 7: Style Components to Match Figma (10 minutes)

- Buttons (primary, secondary)
- Cards (border, padding, shadow)
- Use BEM naming

### Step 8: Add JavaScript Interaction (10 minutes)

Choose at least ONE:
- CTA button shows an alert or modal
- Mobile menu toggle
- FAQ accordion

### Step 9: Compare with Figma and Clean Up (10 minutes)

- Open Figma and your browser side by side
- Compare each section pixel-by-pixel
- Fix any color, spacing, or font mismatches
- Remove unused code
- Add missing comments
- Check responsive behavior
- Validate HTML at [validator.w3.org](https://validator.w3.org/)

## 🚀 Required Features

| Feature | Status |
|---------|--------|
| Design tokens extracted from Figma | Required |
| Semantic HTML structure | Required |
| CSS variables for colors and fonts (from Figma) | Required |
| Google Fonts imported (matching Figma) | Required |
| Flexbox layout | Required |
| Responsive (mobile + desktop) | Required |
| At least 2 button variants | Required |
| Cards for features section | Required |
| At least 1 JS interaction | Required |
| HTML comments on every section | Required |
| Visual match with Figma design | Required |
| Clean, readable code | Required |

## ✅ Evaluation Criteria

Your project will be evaluated on:

1. **Figma Integration** (20%)
   - Design tokens correctly extracted
   - Colors, fonts, and spacing match the Figma file
   - Evidence of using Dev Mode (correct values, not approximations)

2. **Structure** (20%)
   - Correct semantic HTML
   - Well-organized sections
   - HTML comments

3. **Styling** (25%)
   - CSS variables used
   - Colors and fonts match design
   - Consistent spacing
   - Components use BEM naming

4. **Layout** (20%)
   - Flexbox used correctly
   - Responsive with media query
   - No layout bugs

4. **Interactivity** (5%)
   - At least 1 JS interaction works
   - addEventListener used
   - No console errors

5. **Code Quality** (10%)
   - Clean, readable code
   - Good comments
   - No unused code

## 🧪 Testing Checklist

- [ ] Page loads without errors (check console)
- [ ] All sections are visible and structured
- [ ] Colors match the Figma design exactly (no approximations)
- [ ] Fonts are loaded from Google Fonts (matching Figma)
- [ ] Buttons have hover effects
- [ ] Layout works on mobile (< 768px)
- [ ] Layout works on desktop (≥ 768px)
- [ ] JS interaction works
- [ ] No horizontal scrollbar on any screen size
- [ ] HTML validates without errors

## 🚀 Bonus Ideas

1. **Testimonials section**: Add 2-3 testimonial cards with quotes
2. **FAQ toggle**: Create collapsible FAQ items with JavaScript
3. **Smooth scroll**: Add `scroll-behavior: smooth` to `html`
4. **Animations**: Add subtle CSS transitions on cards (hover scale effect)
5. **Dark mode toggle**: Use JavaScript to switch between light and dark themes
6. **Custom cursor**: Change cursor behavior on interactive elements

## 📚 Resources

Use any resources from previous labs:
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks — Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Google Fonts](https://fonts.google.com/)
- Your previous Lab solutions!

## 🤔 Questions to Ask Yourself

- Does my HTML structure match the Figma layout layers?
- Am I using the exact CSS values from Figma Dev Mode?
- Am I using CSS variables for all colors and fonts?
- Is every flex container commented to explain its purpose?
- Does the page look good on both mobile and desktop?
- Is my JavaScript clean and commented?
- Would another developer understand my code?

## 💡 Tips for Success

1. **Start with HTML first**: Get the full structure before touching CSS
2. **Work section by section**: Don't try to style everything at once
3. **Test often**: Check the browser after every few changes
4. **Use DevTools**: Inspect elements to debug layout issues
5. **Compare with the design**: Put the reference and your page side by side
6. **Ask for help**: It's okay to research and ask questions!

## 🎯 Success Criteria

You've successfully completed this exercise when:
- ✅ The page closely matches the Figma design
- ✅ All required features are implemented
- ✅ Code is clean, organized, and well-commented
- ✅ The page is responsive
- ✅ At least 1 JavaScript interaction works
- ✅ You can explain your code to someone else

---

## 🎉 Congratulations!

This is your final exercise. You've learned how to go from a Figma design to a fully working web page using only HTML, CSS, and JavaScript. These are foundational skills that every web developer needs.

**What you've accomplished:**
- Lab 00: Reading Figma designs
- Lab 01: Semantic HTML structure
- Lab 02: CSS colors and typography
- Lab 03: CSS positioning and display
- Lab 04: Flexbox layouts
- Lab 05: Responsive design
- Lab 06: Reusable UI components
- Lab 07: JavaScript interactivity
- Lab 08: CSS to Sass/SCSS
- Lab 09: Full page integration ← **You are here!**

**Next steps:**
- Push your code to GitHub
- Try integrating a different Figma design
- Learn CSS Grid for more complex layouts
- Learn a framework like Vue.js or React

Good luck! 🚀

---

**Previous**: [Lab 08: CSS to Sass/SCSS](../lab-08-sass-scss/) ←
**[Back to Course Home](../README.md)**
