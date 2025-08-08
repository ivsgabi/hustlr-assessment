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

- ✅ An interective **Product card** with image, title and price, fetching data from the provided API (`https://fakestoreapi.com/products/1`).
- ✅ Add to Cart and Out Of Stock logic implemented.
- ✅ UI includes **size** and **color** dropdowns (even though not provided by the API, I simulated them for demonstration purposes).

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
git clone git@github.com:ivsgabi/hustlr-assessment.git
cd ecommerce_completed
npm install
npm start
