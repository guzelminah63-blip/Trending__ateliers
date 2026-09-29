document.addEventListener("DOMContentLoaded", () => {
  const addButtons = document.querySelectorAll(".add-to-cart-btn");

  addButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Find the product card this button belongs to
      const card = button.closest(".product-card");

      // Read the image directly from the <img> tag inside that card
      const imgElement = card.querySelector("img");

      const product = {
        name: button.getAttribute("data-name"),
        price: button.getAttribute("data-price"),
        img: imgElement.getAttribute("src") // grabbed straight from the real image
      };

      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));

      alert(product.name + " added to cart!");
    });
  });
});