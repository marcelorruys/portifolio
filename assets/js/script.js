const button = document.getElementById("btn-mobile");

const toggleMenu = () => {
  const menu = document.getElementById("menu");
  menu.classList.toggle("activate");
};

button.addEventListener("click", toggleMenu);
