document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector(".header-menu-nav"); // плашка бургера
  const burgerBtn = document.querySelector(".header-menu-burger-btn"); // кнопка бургер меню
  const burgerItem = document.querySelectorAll(".header-menu-nav-list-item a"); // якорные ссылки
  const burgerHeaderContainer = document.querySelector(".header"); // контейнер header

  // при клике на кнопку бургер меню активировать плашку и сменить кнопку бургера
  burgerBtn.addEventListener("click", function () {
    burgerMenu.classList.toggle("active");
    burgerBtn.classList.toggle("active");
    burgerHeaderContainer.classList.toggle("active"); // добавляю пространства чтоб отрабатывал overflow hidden
  });

  // если клик был Не по...
  document.addEventListener("click", function (event) {
    if (
      !burgerMenu.contains(event.target) && //... плашке меню и...
      !burgerBtn.contains(event.target) //...кнопке
    ) {
      burgerMenu.classList.remove("active"); // то убрать класс active (скрыть плашку)
      burgerHeaderContainer.classList.remove("active");
    }
  });

  // перебор коллекции кнопок в навигации
  burgerItem.forEach(function (item) {
    // если кликнули по любой кнопке
    item.addEventListener("click", function () {
      burgerMenu.classList.remove("active"); // скрыть плашку бургера
      burgerBtn.classList.remove("active"); // сменить кнопку бургера
      burgerHeaderContainer.classList.remove("active"); // уменьшить контейнер header
    });
  });
});
