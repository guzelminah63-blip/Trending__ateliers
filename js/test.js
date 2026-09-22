function sayHello() {
  const button = document.getElementById("test-button");
  const productName = button.getAttribute("data-name");
  const productPrice = button.getAttribute("data-price");

  localStorage.setItem("testProduct", productName);

  alert("Saved to localStorage: " + productName);
}

const button = document.getElementById("test-button");
button.addEventListener("click", sayHello);