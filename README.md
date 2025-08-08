# Hustlr Frontend Developer Assessment

**Welcome to my submission for the Hustlr Frontend Developer Test.**

⏱️ **Time taken:** 1 hour  
🎨 **Tech used:** React, Bootstrap, Custom CSS

---

## 📄 Overview

For this assessment, I chose to display the result of my work **directly inside the project** by creating a dedicated page (`Assessment.jsx`).  
I noticed that **Bootstrap** was already used in the project, so I relied on it for layout and structure (e.g. grid system), and added some custom **CSS** for visual polish and animations.

---

## 🔧 Features Implemented

- ✅ **Product card** fetching data from the provided API (`https://fakestoreapi.com/products/1`).
- ✅ UI includes **size** and **color** dropdowns (even though not provided by the API, I simulated them for demonstration purposes).
- ✅ **Toast notifications** when adding a product to the cart.
- ✅ Correct **title display** in the cart.
- ✅ Quantity properly **increments** when the same product is added multiple times.

You can see these features live on the `/assessment` route of the app.

---

## 💡 Improvements (not implemented due to time constraints)

You’ll find a section in the page itself where I briefly mentioned improvements, such as:

- Responsive fine-tuning (though Bootstrap’s grid system helped a lot).
- Better handling of edge cases (e.g., size/color validations).
- More reusable components and cleaner file structure.
- Accessibility enhancements (semantic tags, ARIA roles, etc.).

---

## 🚀 How to Run

If you'd like to test the project locally:

```bash
git clone ...
cd ecommerce
npm install
npm start
