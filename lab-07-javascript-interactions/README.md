# Lab 07: JavaScript Interactions — Add Interactivity with Vanilla JS

**Difficulty**: ⭐⭐ Medium
**Time**: 45–60 minutes
**Concepts**: DOM selection, querySelectorAll, addEventListener, classList, toggle, event handling, modal pattern, form validation, data attributes, dynamic DOM creation, keyboard events

## 🎯 Learning Objectives

- Understand how JavaScript connects to HTML elements
- Select single & multiple elements with `querySelector` / `querySelectorAll`
- React to user actions with `addEventListener`
- Show and hide elements using CSS classes
- Build a modal (popup) interaction from scratch
- Validate a form with JavaScript before submission
- Use `data-*` attributes to pass info from HTML to JS
- Create and insert DOM elements dynamically

## � Course Elements Covered

| Course Module | Topics Applied in This Lab |
|---|---|
| [03 — Design-to-Code Workflow](../course-03-design-to-code-workflow/) | Step 5 — Build: interactivity phase (last step after structure, style, layout, responsive) |
| [04 — Design Systems](../course-04-design-systems/) | Patterns: modal pattern, accordion pattern, form validation — reusable interaction patterns |

## �📋 Exercise Description

You will add a simple modal interaction to the page: clicking a button opens a modal window, clicking the close button hides it. This is a very common pattern in real websites.

> 💡 JavaScript doesn't change HTML directly — it adds or removes CSS classes. The CSS does the visual work.

## 🛠️ Setup

### Step 1: Open the Starter Files

1. Open `lab-07-javascript-interactions/index.html`, `style.css`, and `script.js`
2. The HTML and CSS are provided — you will write the JavaScript

### Step 2: Review the HTML Structure

Look at the HTML and find:
- The **open button**: `<button id="open-modal">`
- The **modal container**: `<div class="modal" id="modal">`
- The **close button**: `<button id="close-modal">`

### Step 3: Preview

- Open with Live Server
- Click the "Open Modal" button — nothing happens yet (you'll fix that!)

## 📝 Step-by-Step Instructions

### Step 1: Understand the DOM

The **DOM** (Document Object Model) is how JavaScript sees your HTML:

```
document
└── body
    ├── header
    ├── main
    │   ├── button#open-modal
    │   └── div#modal
    │       └── div.modal__content
    │           └── button#close-modal
    └── script
```

JavaScript can:
1. **Select** elements from the DOM
2. **Listen** for events (clicks, typing, etc.)
3. **Modify** elements (add/remove classes, change text, etc.)

### Step 2: Select Elements

In `script.js`, select the 3 elements you need:

```javascript
// Step 1: Select elements from the HTML
const openButton = document.querySelector("#open-modal");
const closeButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
```

> 💡 `querySelector` uses the same selectors as CSS: `#id`, `.class`, `tag`

### Step 3: Add Click Event to Open the Modal

```javascript
// Step 2: When the open button is clicked, show the modal
openButton.addEventListener("click", function () {
  modal.classList.add("modal--open");
});
```

**What this does:**
1. `addEventListener("click", ...)` — waits for a click on the button
2. `modal.classList.add("modal--open")` — adds the class `modal--open` to the modal
3. CSS takes over: `.modal--open { display: flex; }` makes the modal visible

### Step 4: Add Click Event to Close the Modal

```javascript
// Step 3: When the close button is clicked, hide the modal
closeButton.addEventListener("click", function () {
  modal.classList.remove("modal--open");
});
```

### Step 5: Close Modal by Clicking Outside (Bonus)

```javascript
// Step 4 (bonus): Close modal when clicking the dark background
modal.addEventListener("click", function (event) {
  // Only close if the click was on the background, not the content
  if (event.target === modal) {
    modal.classList.remove("modal--open");
  }
});
```

### Step 6: Test the Modal

1. Click "Open Modal" → The modal should appear with a dark overlay
2. Click "Close" → The modal should disappear
3. Click the dark area outside the modal → It should also close
4. Open the browser Console (F12) → Check for any errors

---

### Step 7: Select Multiple Elements — `querySelectorAll`

`querySelectorAll` returns **all** matching elements (not just the first one):

```javascript
// Select ALL buttons on the page
const allButtons = document.querySelectorAll(".button");

// Loop through each button
allButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    console.log("Button clicked:", btn.textContent);
  });
});
```

> 💡 `querySelector` returns **one** element. `querySelectorAll` returns a **NodeList** (array-like) of all matches.

**Practical example — Accordion FAQ:**

Add this HTML to your page:

```html
<section class="faq">
  <h2>FAQ</h2>
  <div class="faq__item">
    <button class="faq__question">What tools do I need?</button>
    <div class="faq__answer">VS Code and a browser — that's it!</div>
  </div>
  <div class="faq__item">
    <button class="faq__question">Is this course free?</button>
    <div class="faq__answer">Yes, all labs are open-source.</div>
  </div>
  <div class="faq__item">
    <button class="faq__question">Do I need JavaScript experience?</button>
    <div class="faq__answer">No, we start from the basics.</div>
  </div>
</section>
```

CSS (add to `style.css`):

```css
.faq__answer {
  display: none;
  padding: 8px 0;
  color: #475569;
}
.faq__item--open .faq__answer {
  display: block;
}
.faq__question {
  width: 100%;
  text-align: left;
  cursor: pointer;
  padding: 12px 0;
  border: none;
  border-bottom: 1px solid #e2e8f0;
  background: none;
  font-size: 16px;
  font-weight: 600;
}
```

JavaScript:

```javascript
// =============================================
// ACCORDION FAQ
// =============================================
const faqQuestions = document.querySelectorAll(".faq__question");

faqQuestions.forEach(function (question) {
  question.addEventListener("click", function () {
    // Get the parent .faq__item
    const item = question.parentElement;
    // Toggle the --open modifier
    item.classList.toggle("faq__item--open");
  });
});
```

### Step 8: Form Validation with JavaScript

HTML forms have built-in validation, but JavaScript lets you add **custom rules** and **user-friendly error messages**.

Add this form to your page:

```html
<section class="contact">
  <h2>Contact Us</h2>
  <form id="contact-form" novalidate>
    <div class="field">
      <label class="field__label" for="name">Name</label>
      <input class="field__input" type="text" id="name" required minlength="2">
      <span class="field__error" id="name-error"></span>
    </div>
    <div class="field">
      <label class="field__label" for="email">Email</label>
      <input class="field__input" type="email" id="email" required>
      <span class="field__error" id="email-error"></span>
    </div>
    <button class="button button--primary" type="submit">Send</button>
  </form>
</section>
```

CSS:

```css
.field__error {
  display: block;
  color: #ef4444;
  font-size: 13px;
  min-height: 20px;
}
.field__input--invalid {
  border-color: #ef4444;
}
```

JavaScript:

```javascript
// =============================================
// FORM VALIDATION
// =============================================
const form = document.querySelector("#contact-form");

form.addEventListener("submit", function (event) {
  // Prevent the form from actually submitting (page reload)
  event.preventDefault();

  // Clear previous errors
  clearErrors();

  // Validate each field
  let isValid = true;

  const name = document.querySelector("#name");
  if (name.value.trim().length < 2) {
    showError(name, "name-error", "Name must be at least 2 characters.");
    isValid = false;
  }

  const email = document.querySelector("#email");
  if (!email.value.includes("@") || !email.value.includes(".")) {
    showError(email, "email-error", "Please enter a valid email address.");
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully!");
    form.reset();
  }
});

function showError(input, errorId, message) {
  input.classList.add("field__input--invalid");
  document.querySelector("#" + errorId).textContent = message;
}

function clearErrors() {
  // Remove all error styles
  document.querySelectorAll(".field__input").forEach(function (input) {
    input.classList.remove("field__input--invalid");
  });
  // Clear all error messages
  document.querySelectorAll(".field__error").forEach(function (span) {
    span.textContent = "";
  });
}
```

**Key patterns used:**
- `event.preventDefault()` — stops form from refreshing the page
- `value.trim()` — removes leading/trailing spaces
- Helper functions `showError` / `clearErrors` — keep code organized

### Step 9: Data Attributes — Passing Data from HTML to JS

`data-*` attributes store custom data directly in HTML elements:

```html
<button class="button" data-action="delete" data-id="42">Delete Item</button>
```

Access them in JavaScript with `dataset`:

```javascript
const btn = document.querySelector('[data-action="delete"]');
console.log(btn.dataset.action); // "delete"
console.log(btn.dataset.id);     // "42"
```

**Practical example — Tabs:**

```html
<div class="tabs">
  <button class="tabs__btn tabs__btn--active" data-tab="features">Features</button>
  <button class="tabs__btn" data-tab="pricing">Pricing</button>
  <button class="tabs__btn" data-tab="faq">FAQ</button>
</div>
<div class="tabs__panel tabs__panel--active" id="tab-features">Features content…</div>
<div class="tabs__panel" id="tab-pricing">Pricing content…</div>
<div class="tabs__panel" id="tab-faq">FAQ content…</div>
```

```javascript
// =============================================
// TABS
// =============================================
const tabButtons = document.querySelectorAll(".tabs__btn");

tabButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    // Remove active from all buttons and panels
    document.querySelectorAll(".tabs__btn").forEach(b => b.classList.remove("tabs__btn--active"));
    document.querySelectorAll(".tabs__panel").forEach(p => p.classList.remove("tabs__panel--active"));

    // Activate the clicked tab
    btn.classList.add("tabs__btn--active");
    const panelId = "tab-" + btn.dataset.tab;
    document.querySelector("#" + panelId).classList.add("tabs__panel--active");
  });
});
```

### Step 10: Create Elements Dynamically

JavaScript can create new HTML elements and insert them into the page:

```javascript
// Create a new element
const tag = document.createElement("span");
tag.classList.add("badge");
tag.textContent = "New!";

// Insert it inside an existing element
const card = document.querySelector(".card");
card.appendChild(tag);
```

**Practical example — Render a list from data:**

```javascript
// =============================================
// DYNAMIC LIST RENDERING
// =============================================
const features = [
  { title: "Responsive Design", icon: "📱" },
  { title: "Fast Performance", icon: "⚡" },
  { title: "Accessible UI", icon: "♿" },
];

const list = document.querySelector("#features-list");

features.forEach(function (feature) {
  // Create an <li> for each feature
  const li = document.createElement("li");
  li.classList.add("feature-item");
  li.textContent = feature.icon + " " + feature.title;

  // Add it to the <ul>
  list.appendChild(li);
});
```

> 💡 This pattern is the foundation of how frameworks like React and Vue work — rendering UI from data.

### Step 11: Test Everything

1. **Modal**: Opens and closes correctly
2. **Accordion**: Each FAQ item toggles independently
3. **Form**: Shows error messages for empty/invalid fields, clears on valid submit
4. **Open console (F12)** → No errors

## 💻 Code Structure

### script.js (complete)

```javascript
// =============================================
// MODAL INTERACTION
// =============================================

// 1. Select the elements we need
const openButton = document.querySelector("#open-modal");
const closeButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");

// 2. Open the modal when button is clicked
openButton.addEventListener("click", function () {
  modal.classList.add("modal--open");
});

// 3. Close the modal when close button is clicked
closeButton.addEventListener("click", function () {
  modal.classList.remove("modal--open");
});

// 4. Close the modal when clicking outside the content
modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.classList.remove("modal--open");
  }
});
```

### style.css (modal-specific)

```css
/* Modal: hidden by default */
.modal {
  position: fixed;
  inset: 0;
  display: none;
  align-items: center;
  justify-content: center;
  background: rgba(15, 23, 42, 0.6);
}

/* Modal: visible when class is added by JS */
.modal--open {
  display: flex;
}

/* Modal content box */
.modal__content {
  background: #ffffff;
  padding: 24px;
  max-width: 400px;
  width: 90%;
  border-radius: 8px;
}
```

## ✅ Expected Outcome

Your page should:
1. Display a "Open Modal" button
2. Clicking the button opens a centered modal with a dark overlay
3. The modal has a title, text, and a "Close" button
4. Clicking "Close" hides the modal
5. Clicking the dark background also closes the modal
6. No errors in the console

## 🧪 Testing Checklist

- [ ] Elements are selected with `querySelector` / `querySelectorAll`
- [ ] `addEventListener` is used (no inline `onclick`)
- [ ] Modal opens when clicking the open button
- [ ] Modal closes when clicking the close button
- [ ] Modal closes when clicking the dark overlay
- [ ] FAQ accordion toggles answers on click
- [ ] Form validates name and email before submitting
- [ ] Error messages appear and clear correctly
- [ ] No JavaScript errors in the console
- [ ] `event.preventDefault()` is used on form submit
- [ ] Comments explain each step in the JS file
- [ ] No external libraries are used

## 🎓 Key Concepts

### Selecting Elements
```javascript
// Single element (first match)
document.querySelector("#id");         // Select by ID
document.querySelector(".class");      // Select by class
document.querySelector("tag");         // Select by tag name

// Multiple elements (all matches)
document.querySelectorAll(".card");     // Returns NodeList
document.querySelectorAll("li");        // All <li> elements
```

### Adding Event Listeners
```javascript
element.addEventListener("event", function () {
  // Code runs when the event happens
});
```

Common events:
| Event | When it fires |
|-------|--------------|
| `"click"` | User clicks the element |
| `"input"` | User types in an input field |
| `"submit"` | Form is submitted |
| `"keydown"` | A key is pressed |
| `"mouseover"` | Mouse hovers the element |

### classList Methods
```javascript
element.classList.add("class-name");      // Add a class
element.classList.remove("class-name");   // Remove a class
element.classList.toggle("class-name");   // Add if missing, remove if present
element.classList.contains("class-name"); // Check if class exists
```

### The Show/Hide Pattern
```
Default CSS:  display: none     → Element is hidden
JS adds class: .modal--open     → CSS changes to display: flex
JS removes class:               → Back to display: none
```

### Data Attributes
```javascript
// HTML: <div data-color="blue" data-size="large">
element.dataset.color;    // "blue"
element.dataset.size;     // "large"

// Select by data attribute
document.querySelector('[data-color="blue"]');
```

### Creating DOM Elements
```javascript
const el = document.createElement("div");  // Create element
el.classList.add("card");                   // Add class
el.textContent = "Hello";                   // Set text content
el.setAttribute("id", "my-card");           // Set attribute
parent.appendChild(el);                     // Insert into DOM
```

### Preventing Default Behavior
```javascript
// Stop links from navigating, forms from submitting
element.addEventListener("click", function (event) {
  event.preventDefault();  // Prevents default browser action
});
```

## 🚀 Bonus Challenges

1. **Keyboard support**: Close the modal when the user presses `Escape`
   ```javascript
   document.addEventListener("keydown", function (event) {
     if (event.key === "Escape") {
       modal.classList.remove("modal--open");
     }
   });
   ```
2. **Toggle button**: Create a button that toggles a dark/light theme on the page using `classList.toggle`
3. **Character counter**: Add an input field that shows how many characters have been typed (use `"input"` event and `value.length`)
4. **Disable scroll**: When the modal is open, add `overflow: hidden` to `<body>` to prevent scrolling behind it
5. **Accordion single-open**: Modify the FAQ so only one answer can be open at a time (close others when one opens)
6. **Real-time validation**: Show/hide error messages as the user types (use `"input"` event instead of waiting for submit)
7. **LocalStorage**: Save the user's theme preference (dark/light) so it persists after page reload
   ```javascript
   localStorage.setItem("theme", "dark");
   const saved = localStorage.getItem("theme"); // "dark"
   ```
8. **Toast notification**: After form submit, show a temporary success message that disappears after 3 seconds (use `setTimeout`)

## 📚 Resources

- [MDN — querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- [MDN — querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)
- [MDN — addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [MDN — classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
- [MDN — createElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
- [MDN — Using data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)
- [MDN — Client-side form validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
- [JavaScript.info — Introduction to Events](https://javascript.info/introduction-browser-events)

## 🤔 Reflection Questions

1. Why do we use `addEventListener` instead of `onclick` in the HTML?
2. What is the difference between `classList.add` and `classList.toggle`?
3. Why do we check `event.target === modal` before closing?
4. Why do we call `event.preventDefault()` on form submit?
5. What is the advantage of rendering a list from a JS array vs. hard-coding it in HTML?
6. When would you use `data-*` attributes instead of classes or IDs?

## 💡 Common Mistakes

- **Script loaded before HTML**: Make sure `<script src="script.js"></script>` is at the **bottom** of `<body>`, not in `<head>`
- **Wrong selector**: `querySelector("#modal")` needs the `#` — without it, it looks for a `<modal>` tag
- **Typo in class name**: `classList.add("modal--opn")` won't match `.modal--open` in CSS
- **Using `innerHTML` to show/hide**: Don't remove/recreate HTML — just toggle classes
- **Forgetting `event` parameter**: In the overlay click handler, you need `function (event)` to access `event.target`
- **Forgetting `event.preventDefault()`**: Without it, form submission reloads the page and you lose your JS state
- **Using `forEach` on querySelector result**: `querySelector` returns ONE element — use `querySelectorAll` for loops
- **Modifying live NodeList during loop**: If you remove elements during a `forEach`, use `Array.from()` first

## 🎯 Success Criteria

You've successfully completed this exercise when:
- ✅ The modal opens and closes correctly
- ✅ The accordion FAQ toggles open/closed
- ✅ Form validation shows/clears error messages
- ✅ All JavaScript uses `querySelector` / `querySelectorAll` and `addEventListener`
- ✅ Every line of JS has a comment explaining its purpose
- ✅ No inline event handlers in HTML (`onclick`, etc.)
- ✅ No console errors
- ✅ The page works without any libraries

---

**Previous**: [Lab 06: UI Components](../lab-06-ui-components/) ←
**Next**: [Lab 08: CSS to Sass/SCSS](../lab-08-sass-scss/) →
**[Back to Course Home](../README.md)**
