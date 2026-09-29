// Read the cart from localStorage (or empt// Read the cart from localStorage (or empty array if nothing saved)
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
  cart.splice(index, 1);
  saveCart(cart);
  renderCart();
}

// Build the WhatsApp message from the cart and open WhatsApp with it
function checkoutViaWhatsApp() {
  const cart = getCart();

  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }

  let message = "Hello Gleamguzel! I'd like to order:\n\n";
  let total = 0;

  cart.forEach((item, index) => {
    const price = Number(item.price);
    total += price;
    message += `${index + 1}. ${item.name} - ${price.toLocaleString()} Tshs\n`;
  });

  message += `\nTotal: ${total.toLocaleString()} Tshs`;
  message += "\n\nPlease confirm availability and how to pay. Thank you!";

  // Your WhatsApp business number, no + or spaces
  const phoneNumber = "255682742239";

  // Encode the message so spaces/line breaks work correctly in a URL
  const encodedMessage = encodeURIComponent(message);

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(whatsappURL, "_blank");
}

// Build and display the cart items on the page
function renderCart() {
  const container = document.getElementById("cart-container");
  if (!container) return;

  const cart = getCart();
  container.innerHTML = "";

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

  container.innerHTML += `
    <button id="checkout-btn" class="checkout-btn">Checkout via WhatsApp</button>
  `;

  // Attach click events to every "Remove" button
  document.querySelectorAll(".remove-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.getAttribute("data-index"));
      removeFromCart(index);
    });
  });

  // Attach click event to the checkout button
  document.getElementById("checkout-btn").addEventListener("click", checkoutViaWhatsApp);
}

document.addEventListener("DOMContentLoaded", renderCart);