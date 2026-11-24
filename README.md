# SmartCalc — Beginner JavaScript Learning Project

Welcome to **SmartCalc**, a modern, responsive web calculator built with semantic HTML and modern CSS.

This project is tailored specifically for learning **Vanilla JavaScript** and **DOM manipulation** from the ground up.

---

## 🎯 Learning Objectives

- Practice selecting HTML elements using `document.getElementById()`, `document.querySelector()`, and `document.querySelectorAll()`.
- Learn how to attach event listeners (`addEventListener`) for clicks and keyboard shortcuts.
- Work with `dataset` properties (`e.target.dataset.number`, `e.target.dataset.operator`, `e.target.dataset.action`).
- Understand state management in JavaScript (tracking the current input, previous operand, and selected operation).
- Dynamically update text content in the DOM (`textContent` or `innerText`).
- Dynamically create, append, and clear elements (such as calculation history items).

---

## 📁 Project Structure

```text
smartcalc/
│
├── index.html       # Complete semantic HTML structure for display, keypad, and history
├── style.css        # Minimal modern dark theme with responsive styling
├── script.js        # Empty JavaScript file (ready for your code!)
└── README.md        # Project guide, DOM references, and documentation
```

---

## 🔌 File Connections

- **CSS:** Linked in the `<head>` of `index.html` via `<link rel="stylesheet" href="style.css">`.
- **JavaScript:** Included in `index.html` using a deferred script tag:
  ```html
  <script src="script.js" defer></script>
  ```
  The `defer` attribute ensures the browser completely parses the HTML before executing `script.js`, so all elements are ready to be selected immediately without needing `DOMContentLoaded` wrappers.

---

## 🧭 DOM Selector Guide for JavaScript

All interactive elements have been tagged with meaningful IDs and data attributes to make writing JavaScript intuitive.

### 1. Display Screen Elements

| Element | ID | Description |
| :--- | :--- | :--- |
| **Previous Expression** | `previous-operand` | Displays the running expression or previous calculation (e.g. `12 +`) |
| **Current Input / Result** | `current-operand` | Displays the active number being typed or the final computed result |

### 2. Calculator Keypad Buttons

#### Number Buttons (`0`–`9`) & Decimal (`.`)
- Every number button has the class `.btn-number` and a `data-number="<digit>"` attribute.
- The decimal button has `id="btn-decimal"` and `data-action="decimal"`.

| Button | ID | Class | Data Attribute |
| :--- | :--- | :--- | :--- |
| **0** | `btn-0` | `btn btn-number btn-zero` | `data-number="0"` |
| **1** to **9** | `btn-1` ... `btn-9` | `btn btn-number` | `data-number="1"` ... `data-number="9"` |
| **.** | `btn-decimal` | `btn btn-number` | `data-action="decimal"` |

#### Operator Buttons (`+`, `−`, `×`, `÷`)
- Every operator button has the class `.btn-operator` and a `data-operator="<symbol>"` attribute.

| Operator | ID | Symbol | Data Attribute |
| :--- | :--- | :--- | :--- |
| **Addition** | `btn-add` | `+` | `data-operator="+"` |
| **Subtraction** | `btn-subtract` | `−` | `data-operator="-"` |
| **Multiplication** | `btn-multiply` | `×` | `data-operator="×"` |
| **Division** | `btn-divide` | `÷` | `data-operator="÷"` |

#### Action Buttons & Equals
| Action | ID | Class | Data Attribute | Description |
| :--- | :--- | :--- | :--- | :--- |
| **All Clear (AC)** | `btn-clear` | `btn btn-action` | `data-action="clear"` | Resets the calculator |
| **Delete (DEL)** | `btn-delete` | `btn btn-action` | `data-action="delete"` | Removes the last character |
| **Percentage (%)** | `btn-percent` | `btn btn-action` | `data-action="percent"` | Calculates percentage |
| **Equals (=)** | `btn-equals` | `btn btn-equals` | `data-action="equals"` | Computes final result |

### 3. Calculation History Elements

| Element | ID | Description |
| :--- | :--- | :--- |
| **History Container** | `history-list` | The `<ul>` container where history items can be appended |
| **Empty State Message** | `history-empty` | `<p>` element showing `"No calculations yet"` (hide when history has items) |
| **Clear History Button** | `btn-clear-history` | `<button>` to wipe all history records |

#### Ready-Made Classes for Dynamic History Items
When appending history records in JavaScript, you can construct an `<li>` element using these predefined CSS classes:

```html
<li class="history-item">
  <span class="history-expression">12 × 5</span>
  <span class="history-result">= 60</span>
</li>
```

---

## 🚀 How to Open and Preview

1. **Directly in Browser:**
   - Navigate to the project folder (`d:\GITHUB\SmartCalc\`).
   - Double-click `index.html` (or right-click -> **Open with** -> your favorite browser: Chrome, Edge, Firefox).

2. **Using a Local Server (Recommended for Live Reloading):**
   - If you use VS Code / Antigravity, right-click `index.html` and choose **Open with Live Server**.
   - Alternatively, with Node.js installed, run:
     ```bash
     npx serve .
     ```
   - Or with Python:
     ```bash
     python -m http.server 8000
     ```
     Then open `http://localhost:8000` in your browser.
