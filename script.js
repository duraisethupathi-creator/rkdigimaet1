const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const form = document.getElementById("contactForm");
const message = document.getElementById("message");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("show");
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  message.textContent = `Thank you, ${name}. RKdigiMart will contact you soon.`;
  form.reset();
});