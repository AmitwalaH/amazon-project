import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
// import "../data/cart-class.js";
// import "../data/backend-practice.js"
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";

async function laodPage() {
  await loadProductsFetch();
  await new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  });

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
