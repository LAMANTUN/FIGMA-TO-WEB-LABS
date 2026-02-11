# Lab 01: HTML Structure — Semantic HTML for a Landing Page

**Difficulty**: ⭐⭐ Medium
**Time**: 30–45 minutes
**Concepts**: Semantic HTML, page structure, HTML comments, accessibility, heading hierarchy

## 🎯 Learning Objectives

- Analyze a page layout and identify appropriate HTML sections
- Use semantic HTML5 tags (`header`, `main`, `section`, `footer`, `nav`, `article`)
- Write clean, well-commented HTML structure with proper heading hierarchy
- Understand the connection between visual design and HTML hierarchy
- Apply accessibility best practices (ARIA landmarks, alt attributes, logical tab order)

## � Course Elements Covered

| Course Module | Topics Applied in This Lab |
|---|---|
| [01 — Design Fundamentals](../course-01-design-fundamentals/) | Alignment, proximity (grouping related content), visual hierarchy (heading levels) |
| [03 — Design-to-Code Workflow](../course-03-design-to-code-workflow/) | Step 4 — Plan: mapping visual sections → HTML structure, semantic element choices |

## �📋 Exercise Description

You will build a complete landing page structure using **semantic HTML only** — no CSS yet. The goal is to produce a solid, accessible HTML skeleton from a written design brief.

> 💡 Think of HTML as the **bones** of a page. CSS is the skin. JavaScript is the muscles. You always start with the bones.

## 🛠️ Setup

### Step 1: Read the Design Brief

Build a landing page for a fictional product with these sections:
- **Header**: Logo text + 3 navigation links (Home, Features, Contact)
- **Hero section**: Main heading, subtitle paragraph, call-to-action link
- **Features section**: Section heading + 3 feature items (icon placeholder, title, description)
- **Testimonials section**: 2 customer quotes with names
- **Contact form**: A form with name, email, message, and a submit button
- **Pricing table**: A simple table with 3 plans
- **Footer**: Contact info + copyright

### Step 2: Open the Starter File

1. Open `lab-01-html-structure/index.html` in VS Code
2. You'll see a basic HTML structure — your job is to complete it

### Step 3: Preview Your Work

- Right-click `index.html` → **Open with Live Server**
- Or simply double-click the file to open it in your browser
- Refresh the browser after each change

## 📝 Step-by-Step Instructions

### Step 1: Analyze the Figma Layout

Before writing any code, plan your page structure on paper or in a comment:

1. What is at the **top** of the page? → This is the `<header>`
2. What is the **main content**? → This goes inside `<main>`
3. How many **sections** do you see? → Each becomes a `<section>`
4. Are there self-contained items? → Consider `<article>` for cards/quotes
5. What is at the **bottom**? → This is the `<footer>`

**Write this down:**
```
Page structure:
├── header (logo + navigation)
├── main
│   ├── section: hero (title, subtitle, button)
│   ├── section: features (3 feature articles)
│   └── section: testimonials (2 blockquotes)
└── footer (contact info + copyright)
```

### Step 2: Create the HTML Skeleton

In your `index.html`, create the basic structure:

```html
<body>
  <header>
    <!-- Header content goes here -->
  </header>

  <main>
    <!-- Main content goes here -->
  </main>

  <footer>
    <!-- Footer content goes here -->
  </footer>
</body>
```

### Step 3: Build the Header

The header typically contains a logo and navigation links:

1. Add a `<div>` or `<strong>` for the logo/brand name
2. Add a `<nav>` element for navigation
3. Inside `<nav>`, use a `<ul>` with `<li>` items and `<a>` links

```html
<header>
  <!-- Logo -->
  <div>
    <strong>BrandName</strong>
  </div>

  <!-- Navigation -->
  <nav>
    <ul>
      <li><a href="#hero">Home</a></li>
      <li><a href="#features">Features</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>
```

### Step 4: Build the Hero Section

1. Add a `<section>` with an `id="hero"`
2. Add an `<h1>` for the main heading (only ONE `<h1>` per page!)
3. Add a `<p>` for the subtitle
4. Add an `<a>` for the call-to-action button

### Step 5: Build the Features Section

1. Add a `<section>` with an `id="features"`
2. Add an `<h2>` for the section title
3. Use `<article>` for each feature item (not just `<li>`) — each feature has a heading, icon placeholder, and description
4. Use an `<h3>` inside each article for the feature title

### Step 6: Build the Testimonials Section

1. Add a `<section>` with an `id="testimonials"`
2. Add an `<h2>` for the section title
3. Use `<blockquote>` for each quote, with a `<cite>` for the author name

### Step 7: Build the Footer

1. Add a `<footer>` with an `id="contact"`
2. Add a `<p>` with contact information and a copyright notice
3. Add a `<small>` element for the copyright line

### Step 8: Build a Contact Form

Forms are one of the most important HTML concepts. Build a form section:

1. Add a `<section>` with an `id="contact-form"`
2. Add a `<form>` with `action="#"` and `method="POST"`
3. Wrap related fields inside a `<fieldset>` with a `<legend>`
4. Use `<label>` elements linked to inputs with `for`/`id`
5. Use appropriate input types: `text`, `email`, `textarea`
6. Add a `<button type="submit">`

```html
<section id="contact-form">
  <h2>Get in Touch</h2>
  <form action="#" method="POST">
    <fieldset>
      <legend>Contact Information</legend>

      <label for="name">Full Name</label>
      <input type="text" id="name" name="name" required placeholder="Your name" />

      <label for="email">Email Address</label>
      <input type="email" id="email" name="email" required placeholder="you@example.com" />

      <label for="subject">Subject</label>
      <select id="subject" name="subject">
        <option value="">Choose a topic...</option>
        <option value="general">General Inquiry</option>
        <option value="support">Support</option>
        <option value="feedback">Feedback</option>
      </select>

      <label for="message">Message</label>
      <textarea id="message" name="message" rows="4" required placeholder="Your message..."></textarea>

      <label>
        <input type="checkbox" name="newsletter" /> Subscribe to newsletter
      </label>

      <button type="submit">Send Message</button>
      <button type="reset">Clear Form</button>
    </fieldset>
  </form>
</section>
```

#### HTML Form Elements Cheat Sheet

| Element | Purpose |
|---------|--------|
| `<form>` | Wraps the entire form, defines `action` and `method` |
| `<fieldset>` | Groups related fields together |
| `<legend>` | Title for a `<fieldset>` group |
| `<label>` | Text label linked to a field (`for` + `id`) |
| `<input>` | Single-line input (type: text, email, password, number, date, checkbox, radio) |
| `<textarea>` | Multi-line text input |
| `<select>` + `<option>` | Dropdown/select menu |
| `<button>` | Clickable button (`type="submit"`, `type="reset"`, `type="button"`) |

#### Common Input Types

| Type | Example | Purpose |
|------|---------|---------|
| `text` | `<input type="text">` | General text |
| `email` | `<input type="email">` | Email with built-in validation |
| `password` | `<input type="password">` | Hidden characters |
| `number` | `<input type="number" min="1" max="10">` | Numeric input with range |
| `date` | `<input type="date">` | Date picker |
| `checkbox` | `<input type="checkbox">` | True/false toggle |
| `radio` | `<input type="radio" name="plan">` | Pick one from a group |
| `tel` | `<input type="tel">` | Phone number |

#### HTML Validation Attributes

| Attribute | Effect |
|-----------|--------|
| `required` | Field must be filled |
| `minlength` / `maxlength` | Text length limits |
| `min` / `max` | Number/date range |
| `pattern` | Regex pattern match |
| `placeholder` | Hint text inside the field |

### Step 9: Build a Simple Pricing Table

Tables are for **tabular data** (not layout). Add a pricing section:

```html
<section id="pricing">
  <h2>Pricing Plans</h2>
  <table>
    <thead>
      <tr>
        <th>Feature</th>
        <th>Free</th>
        <th>Pro</th>
        <th>Team</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Projects</td>
        <td>3</td>
        <td>Unlimited</td>
        <td>Unlimited</td>
      </tr>
      <tr>
        <td>Storage</td>
        <td>1 GB</td>
        <td>50 GB</td>
        <td>200 GB</td>
      </tr>
      <tr>
        <td>Support</td>
        <td>Community</td>
        <td>Email</td>
        <td>Priority</td>
      </tr>
    </tbody>
  </table>
</section>
```

> 💡 Use `<table>` only for data, never for page layout. Use `<thead>` / `<tbody>` for proper structure. Use `<th>` for header cells.

### Step 10: Add HTML Comments and ARIA

Go through your entire file and add comments before each major section:

```html
<!-- Site header: logo and navigation -->
<!-- Hero section: main message and call to action -->
<!-- Features section: three key points -->
<!-- Testimonials section: customer quotes -->
<!-- Contact form: user input form -->
<!-- Pricing table: plan comparison -->
<!-- Footer: contact information and copyright -->
```

Also add `aria-label` attributes to your `<nav>` and landmark sections where helpful.

## 💻 Expected Code Structure

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Lab 01 HTML Structure</title>
  </head>
  <body>
    <!-- Header -->
    <header>
      ...logo and nav...
    </header>

    <!-- Main content -->
    <main>
      <!-- Hero section -->
      <section id="hero">
        ...heading, text, button...
      </section>

      <!-- Features section -->
      <section id="features">
        ...title and 3 feature articles...
      </section>

      <!-- Testimonials section -->
      <section id="testimonials">
        ...title and 2 blockquotes...
      </section>

      <!-- Contact form -->
      <section id="contact-form">
        ...form with fieldset, inputs, textarea, button...
      </section>

      <!-- Pricing table -->
      <section id="pricing">
        ...table with thead and tbody...
      </section>
    </main>

    <!-- Footer -->
    <footer id="contact">
      ...contact info and copyright...
    </footer>
  </body>
</html>
```

## ✅ Expected Outcome

When you open your page in the browser, you should see:

1. A logo and navigation links at the top
2. A big heading with some text and a link
3. A section with 3 feature items (each with its own heading)
4. A section with 2 testimonial quotes
5. A contact form with labeled fields and a submit button
6. A pricing table with rows and columns
7. Contact information and copyright at the bottom
6. **No styling** — just raw HTML content, readable and structured

## 🧪 Testing Checklist

- [ ] The page has exactly ONE `<h1>` tag
- [ ] I used `<header>`, `<main>`, and `<footer>` correctly
- [ ] I used `<section>` for each content block
- [ ] I used `<article>` for self-contained items (features)
- [ ] I used `<blockquote>` and `<cite>` for testimonials
- [ ] I used `<nav>` for the navigation with `aria-label`
- [ ] All links have `href` attributes
- [ ] Heading hierarchy is correct (h1 → h2 → h3, no skipping)
- [ ] Contact form uses `<form>`, `<fieldset>`, `<legend>`, `<label>`
- [ ] All form inputs have associated `<label>` elements
- [ ] The form uses appropriate input types (text, email, textarea)
- [ ] `required` attribute is used on mandatory fields
- [ ] Pricing table uses `<table>`, `<thead>`, `<tbody>`, `<th>`, `<td>`
- [ ] HTML comments explain each section
- [ ] The page is readable without CSS
- [ ] HTML validates at [validator.w3.org](https://validator.w3.org/)
- [ ] No errors in the browser console (F12 → Console)

## 🎓 Key Concepts

### Semantic HTML Tags
| Tag | Purpose |
|-----|---------|
| `<header>` | Top of the page (logo, navigation) |
| `<nav>` | Navigation links |
| `<main>` | Main content of the page |
| `<section>` | A thematic grouping of content |
| `<article>` | Self-contained content (blog post, card) |
| `<footer>` | Bottom of the page (links, copyright) |

### Why Semantic HTML?
- **Accessibility**: Screen readers understand your page structure
- **SEO**: Search engines rank semantic pages better
- **Maintainability**: Easier to read and update than `<div>` soup

### Heading Hierarchy
- `<h1>`: Page title (only one per page)
- `<h2>`: Section titles
- `<h3>`: Sub-section titles
- Never skip levels (don't jump from `<h1>` to `<h3>`)

## 🚀 Bonus Challenges

1. **Add an image**: Use `<img src="https://placehold.co/300x200" alt="description" />` in the hero section
2. **Add a second section**: Create a "Testimonials" section with 2 quotes using `<blockquote>`
3. **Validate your HTML**: Go to [validator.w3.org](https://validator.w3.org/) → Direct Input → paste your code

## 📚 Resources

- [MDN — HTML Elements Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [MDN — Document and website structure](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure)
- [W3C HTML Validator](https://validator.w3.org/)

## 🤔 Reflection Questions

1. What happens if you use `<div>` everywhere instead of semantic tags?
2. Why should there be only one `<h1>` per page?
3. When should you use `<article>` vs `<section>`?
4. Why is heading hierarchy (h1 → h2 → h3) important for accessibility?

## 💡 Common Mistakes

- **Using `<div>` for everything**: Use semantic tags first, `<div>` only when no semantic tag fits
- **Multiple `<h1>` tags**: A page should have exactly one `<h1>`
- **Forgetting `alt` on images**: Always add a description for accessibility
- **No comments**: Comments make your code readable for yourself and others
- **Wrong nesting**: `<li>` must be inside `<ul>` or `<ol>`, not directly inside `<nav>`

## 🎯 Success Criteria

You've successfully completed this exercise when:
- ✅ Your HTML uses proper semantic tags
- ✅ The page structure matches the Figma layout
- ✅ Comments explain each section clearly
- ✅ The page is readable in the browser without CSS
- ✅ HTML validation shows no errors

---

**Previous**: [Lab 00: Figma Basics](../lab-00-figma-basics/) ←
**Next**: [Lab 02: CSS Basics](../lab-02-css-basics/) →
**[Back to Course Home](../README.md)**
