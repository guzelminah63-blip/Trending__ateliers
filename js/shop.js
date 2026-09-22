document.addEventListener("DOMContentLoaded", () => {
  const addButtons = document.querySelectorAll(".add-to-cart-btn");

  addButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const productName = button.getAttribute("data-name");
      const productPrice = button.getAttribute("data-price");
      const productImg = button.getAttribute("data-img");

      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push({ name: productName, price: productPrice, img: productImg });
      localStorage.setItem("cart", JSON.stringify(cart));

      alert(productName + " added to cart!");
    });
  });
});