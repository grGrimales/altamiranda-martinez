/**
 * Referencias al Html
 */
const responsive = document.getElementById("responsive");
const listNav = document.querySelector(".nav");
const dropdown = document.getElementById("dropdown");

console.log(listNav);

/**
 * Si el ancho de la página es menor a 760px, ocultará el menú al recargar la página
 */

if (window.innerWidth > 768) {
  listNav.classList.remove("active");
}

/**
 * Haciendo el menú responsive(adaptable)
 */
window.addEventListener("resize", function () {
  if (window.innerWidth >= 768) {
    listNav.classList.remove("active");
    listNav.classList.add("nav");
  }

  if (window.innerWidth < 768) {
    listNav.classList.add("active");
    listNav.classList.remove("nav");
  }
});

/**
 * Muestra el menú al hacer click en vista mobile
 */
const hideMenu = (e) => {
  console.log("Funciona");
  listNav.classList.toggle("nav");
  listNav.classList.toggle("active");
  changeIcon();
};

const changeIcon = () => {
  if (listNav.classList.contains("active")) {
    responsive.innerHTML =
      ' <span class="iconify" data-icon="ep:close-bold"></span>';
  } else {
    responsive.innerHTML =
      ' <span class="iconify" data-icon="dashicons:menu"></span>';
  }
};

/**
 * Muestra el listado de categoría del navBar
 */

const hideList = () => {
  console.log("Muestra");

  dropdown.classList.add("hide");
};
/**
 * Eventos
 */

responsive.addEventListener("click", hideMenu);
dropdown.addEventListener("click", hideList);
