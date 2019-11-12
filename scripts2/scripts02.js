var cart = [];

const cartJSON = localStorage.getItem("cart");
var totalPrice = 0;
const shipping = 10;

if (cartJSON !== null) {
  cart = JSON.parse(cartJSON);
}

const removeProduct = function(id) {
  const productIndex = cart.findIndex(function(product) {
    return product.id === id;
  });

  if (productIndex > -1) {
    cart.splice(productIndex, 1);
  }
};

const cartSummary = document.createElement("h2");
cartSummary.textContent = `You have ${cart.length} products in your cart.`;
document.querySelector("#cart-summary").appendChild(cartSummary);

cart.forEach(function(product) {
  const cartEl = document.createElement("div");
  const textEl01 = document.createElement("span");
  const textEl02 = document.createElement("span");
  const textEl03 = document.createElement("span");
  const removeButton = document.createElement("button");
  const quantityMinus = document.createElement("button");
  const quantityPlus = document.createElement("button");

  removeButton.textContent = "x";
  quantityMinus.textContent = "-";
  quantityPlus.textContent = "+";

  removeButton.setAttribute("class", "cart-button");
  quantityMinus.setAttribute("class", "cart-button");
  quantityPlus.setAttribute("class", "cart-button");

  document.querySelector("#cart-summary").appendChild(cartEl);
  cartEl.appendChild(removeButton);
  removeButton.addEventListener("click", function() {
    removeProduct(product.id);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
  });

  if (product.quantity > 0) {
    quantityMinus.addEventListener("click", function() {
      product.quantity--;
      product.total = product.total - product.price;
      localStorage.setItem("cart", JSON.stringify(cart));
      location.reload();
    });
  }

  quantityPlus.addEventListener("click", function() {
    product.quantity++;
    product.total = product.total + product.price;
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
  });

  cartEl.appendChild(textEl01);
  cartEl.appendChild(quantityMinus);
  cartEl.appendChild(textEl02);
  cartEl.appendChild(quantityPlus);
  cartEl.appendChild(textEl03);

  textEl01.textContent = `${product.product} - ${product.size} - Quantity: `;
  textEl02.textContent = `${product.quantity}`;
  textEl03.textContent = ` - Total price: $${product.total}`;
});

cart.forEach(function(product) {
  totalPrice = totalPrice + product.total;
});

const VAT = (totalPrice + shipping) * 0.2;
const cartSummaryPrice = document.createElement("h2");
cartSummaryPrice.textContent = `Shipping: $${shipping} - Total price: $${totalPrice +
  shipping} - (VAT: $${VAT.toFixed(2)})`;
document.querySelector("#cart-summary").appendChild(cartSummaryPrice);
