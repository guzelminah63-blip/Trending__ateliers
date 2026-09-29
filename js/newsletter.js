document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("newsletter-form");
  const messageBox = document.getElementById("newsletter-message");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // stop the page from refreshing

    const email = document.getElementById("newsletter-email").value.trim();

    let subscribers = JSON.parse(localStorage.getItem("subscribers")) || [];

    const alreadySubscribed = subscribers.includes(email);

    if (alreadySubscribed) {
      messageBox.textContent = "You're already subscribed!";
      messageBox.style.color = "#a3852e"; // gold
    } else {
      subscribers.push(email);
      localStorage.setItem("subscribers", JSON.stringify(subscribers));

      messageBox.textContent = "Thank you for subscribing! 🌸";
      messageBox.style.color = "#4a1f42"; // plum
      form.reset(); // clears the input field
    }
  });
});