// Read the cart from localStorage (or empty array if nothing saved)
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

// Save an updated cart back to localStorage
function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Remove one item from the cart by its position in the list
function removeFromCart(index) {
  let cart = getCart();
  cart.splice(index, 1); // removes 1 item at that position
  saveCart(cart);
  renderCart(); // refresh what's shown on screen
}

// Build and display the cart items on the page
function renderCart() {
  const container = document.getElementById("cart-container");
  if (!container) return; // only run this on cart.html

  const cart = getCart();
  container.innerHTML = ""; // clear whatever was shown before

  if (cart.length === 0) {
    container.innerHTML = "<p style='text-align:center; padding:30px;'>Your cart is empty.</p>";
    return;
  }

  let total = 0;

  cart.forEach((item, index) => {
    const price = Number(item.price);
    total += price;

    container.innerHTML += `
      <div class="cart-item">
        <img src="${item.img}" alt="${item.name}">
        <span>${item.name}</span>
        <span>${price.toLocaleString()} Tshs</span>
        <button class="remove-btn" data-index="${index}">Remove</button>
      </div>
    `;
  });

  container.innerHTML += `<div class="cart-total">Total: ${total.toLocaleString()} Tshs</div>`;

  // Attach click events to every "Remove" button just created
  document.querySelectorAll(".remove-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.getAttribute("data-index"));
      removeFromCart(index);
    });
  });
}

// Run this automatically when cart.html loads
document.addEventListener("DOMContentLoaded", renderCart);