import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
// import "../data/cart-class.js";
// import "../data/backend-practice.js"
import { loadProductsFetch } from "../data/products.js";
import { loadCartFetch } from "../data/cart.js";

async function laodPage() {

  await Promise.all([
    loadProductsFetch(),
    loadCartFetch(),
  ])
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
}

laodPage();

// Promise.all([
//   loadProductsFetch(),
//   new Promise((resolve) => {
//     loadCart(() => {
//       resolve();
//     });
//   }),
// ]).then(() => {
//   renderCheckoutHeader();
//   renderOrderSummary();
//   renderPaymentSummary();
// });

/*
//Created the new Promise
new Promise((resolve) => {
  loadProducts(() => {
    //wait to load the data
    resolve();
  });
}).then(() => {
    //And then run the function when resolve() is called
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});
*/

async function greetings() {
  const response = await fetch("https://supersimplebackend.dev/greeting", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      name: "Amit Wala",
    }),
  });
  const text = await response.text();
  console.log(text);
}

greetings();

// try {
//   const response = await fetch('https://amazon.com');
//   const text = await response.text();
//   console.log(text);

// } catch (error) {
//   console.log('CORS error. You request was blocked by the backend.');
// }
