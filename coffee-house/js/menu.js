document.addEventListener("DOMContentLoaded", function () {
  // ********************************** БУРГЕР МЕНЮ **********************************
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

  // ********************************** КАРТОЧКИ ИЗ JSON **********************************
  // ***********************************       +         **********************************
  // *********************************** МОДАЛЬНОЕ ОКНО ***********************************
  const cardButtons = document.querySelectorAll(".main-menu-btn"); // кнопки выбора раздела
  const cardWrapper = document.querySelector(".main-offer"); // обёртка карточки товара
  const modal = document.querySelector(".modal"); // модальное окно
  const modalCloseBtn = document.querySelector(".modal-description-close__btn"); // кнопка Закрыть модальное окно
  const modalImg = document.querySelector(".modal-img__container-item"); // картинка из модального окна
  const modalTitle = document.querySelector(".modal-description-title"); // название продукта
  const modalSubtitle = document.querySelector(".modal-description-subtitle"); // описание продукта
  const modalSizeOptionButtons = document.querySelectorAll(
    ".modal-description-size-btn"
  ); // все кнопки по выбору размера
  const modalAdditivesOptionButtons = document.querySelectorAll(
    ".modal-description-additives-btn"
  ); // все кнопки по выбору добавок
  const modalSizeSmall = document.querySelector(
    ".modal-description-size-btn-text.small"
  ); // размер продукта маленький
  const modalSizeMedium = document.querySelector(
    ".modal-description-size-btn-text.medium"
  ); // размер продукта средний
  const modalSizeLarge = document.querySelector(
    ".modal-description-size-btn-text.large"
  ); // размер продукта большой
  const modalAdditives1 = document.querySelector(
    ".modal-description-additives-btn-text._1"
  ); // добавки первая
  const modalAdditives2 = document.querySelector(
    ".modal-description-additives-btn-text._2"
  ); // добавки вторая
  const modalAdditives3 = document.querySelector(
    ".modal-description-additives-btn-text._3"
  ); // добавки третья
  const modalTotalPrice = document.querySelector(
    ".modal-description-total-price"
  ); // итоговая цена в модальном окне

  // загрузка данных из json файла
  async function getProductsData() {
    // ожидаем загрузку данных в формате json
    const data = await fetch("./json/products.json");
    // ожидаем парсирование из json в объект js
    const products = await data.json();
    console.log(products);

    // если кликнули по первой кнопке
    cardButtons[0].addEventListener("click", function (event) {
      // то закидываем в переменную новый отфильтрованный объект
      // здесь products.filter() — метод фильтрации объектов
      const coffeeDrinks = products.filter(
        // (drink) – в качестве параметра callback функции
        // функция обратного вызова (callback) проверяет элемент, возвращает данные true или false
        // далее filter сортирует по требованию новый массив и запускает callback функцию вновь
        // до тех пор, пока callback функция не проверит каждый элемент всех объектов
        // (параметр) => параметр callback. поиск category в объекте === сверка "coffee"
        (drink) => drink.category === "coffee"
      );

      console.log(coffeeDrinks); // сверка массивов
      cardWrapper.innerHTML = ""; // чистим контейнер для карточек

      let i = 0; // индекс цикла
      // пока i меньше вышедшего массива, повторять следующее:
      while (i < coffeeDrinks.length) {
        const mainOfferWrapper = document.createElement("div"); // создать блок обёртку
        mainOfferWrapper.classList.add("main-offer-wrapper"); // добавить ему класс

        cardWrapper.appendChild(mainOfferWrapper); // вставить обёртку в конец контейнера

        const mainOfferContent = document.createElement("div"); // создать блок для картинки
        mainOfferContent.classList.add("main-offer-content"); // добавить класс

        const image = document.createElement("img"); // создать тег для картинок
        image.classList.add("main-offer-content-item"); // добавить класс
        image.src = `./image/coffee-${i + 1}.png`; // установить путь к картинке в соответствии с итерацией + 1
        image.alt = `${coffeeDrinks[i].name}`; // установить альтернативное значение по итерации

        mainOfferContent.appendChild(image); // вложить тег img в блок для картинки

        const mainOfferDescription = document.createElement("div"); // создать блок для описания
        mainOfferDescription.classList.add("main-offer-description"); // добавить класс

        const mainOfferDescriptionWrapper = document.createElement("div"); // создать обёртку
        mainOfferDescriptionWrapper.classList.add(
          // добавить класс
          "main-offer-description-wrapper"
        );

        const mainOfferDescriptionTitle = document.createElement("h2"); // создать заголовок
        mainOfferDescriptionTitle.classList.add("main-offer-description-title"); // добавить класс
        mainOfferDescriptionTitle.textContent = `${coffeeDrinks[i].name}`; // установить заголовок в соответствии с итерацией

        const mainOfferDescriptionText = document.createElement("p"); // создать тег p
        mainOfferDescriptionText.classList.add("main-offer-description-text"); // добавить класс
        mainOfferDescriptionText.textContent = `${coffeeDrinks[i].description}`; // установить описание в соответствии с итерацией

        mainOfferDescriptionWrapper.appendChild(mainOfferDescriptionTitle); // вложить заголовок в блок-обёртку описания
        mainOfferDescriptionWrapper.appendChild(mainOfferDescriptionText); // вложить текст в блок-обёртку описания

        const mainOfferPrice = document.createElement("p"); // создать тег p
        mainOfferPrice.classList.add("main-offer-description-price"); // добавить класс
        mainOfferPrice.textContent = `$${coffeeDrinks[i].price}`; // установить цену в соответствии с итерацией

        mainOfferDescription.appendChild(mainOfferDescriptionWrapper); // вложить блок-обёртку-описание в блок для описания
        mainOfferDescription.appendChild(mainOfferPrice); // вложить текст цены в блок для описания

        mainOfferWrapper.appendChild(mainOfferContent); // вложить блок с картинкой в главный блок
        mainOfferWrapper.appendChild(mainOfferDescription); // вложить блок с описаниями в главный блок

        i += 1; // увеличить индекс итерации
      }

      // находим новосозданный блок с карточкой
      const mainOfferWrapper = document.querySelectorAll(".main-offer-wrapper");
      // говорим что, если по какой-либо из них кликнули
      mainOfferWrapper.forEach(function (card, index) {
        card.addEventListener("click", function () {
          modal.classList.add("active"); // открыть модальное окно
          modalImg.src = `./image/coffee-${index + 1}.png`; // вставить картинку в соответствии с выбранной карточкой
          modalTitle.textContent = `${coffeeDrinks[index].name}`; // вставить наименование продукта
          modalSubtitle.textContent = `${coffeeDrinks[index].description}`; // вставить описание продукта
          modalSizeSmall.textContent = `${coffeeDrinks[index].sizes.s.size}`; // вставить размер маленького продукта
          modalSizeMedium.textContent = `${coffeeDrinks[index].sizes.m.size}`; // вставить размер среднего продукта
          modalSizeLarge.textContent = `${coffeeDrinks[index].sizes.l.size}`; // вставить размер большого продукта
          modalAdditives1.textContent = `${coffeeDrinks[index].additives[0].name}`; // вставить название первой добавки
          modalAdditives2.textContent = `${coffeeDrinks[index].additives[1].name}`; // вставить название второй добавки
          modalAdditives3.textContent = `${coffeeDrinks[index].additives[2].name}`; // вставить название третьей добавки
          modalTotalPrice.textContent = `$${coffeeDrinks[index].price}`; // вставить цену за основной продукт

          // решил в итоге создать массив с объектами, так как не знал как быть в сложении суммы
          // проблема была в том, что активных кнопок по добавкам может быть несколько
          // здесь решил перебирать массив через forEach по элементам кнопок

          const allButtonsTotalPrice = [
            {
              button: modalSizeOptionButtons[0],
              value: parseFloat(coffeeDrinks[index].sizes.s.addPrice),
            },

            {
              button: modalSizeOptionButtons[1],
              value: parseFloat(coffeeDrinks[index].sizes.m.addPrice),
            },

            {
              button: modalSizeOptionButtons[2],
              value: parseFloat(coffeeDrinks[index].sizes.l.addPrice),
            },

            {
              button: modalAdditivesOptionButtons[0],
              value: parseFloat(coffeeDrinks[index].additives[0].addPrice),
            },

            {
              button: modalAdditivesOptionButtons[1],
              value: parseFloat(coffeeDrinks[index].additives[1].addPrice),
            },

            {
              button: modalAdditivesOptionButtons[2],
              value: parseFloat(coffeeDrinks[index].additives[2].addPrice),
            },
          ];

          // далее функция по обновлению итоговой цены
          function totalPriceUpdate() {
            let sum = 0; // некий счётчик
            // перебираю массив по объектам
            allButtonsTotalPrice.forEach((objElem) => {
              // и говорю: если в этом объекте есть кнопка у которого есть класс active
              if (objElem.button.classList.contains("active")) {
                // то увеличить счётчик на цену этого объекта
                sum += objElem.value;
              }
            });
            // после полного перебора устанавливаю итог на страницу
            // в которой помимо всех добавок по кнопкам увеличиваю цену
            // прибавляя к нему стоимость самого продукта
            modalTotalPrice.textContent = `$${
              parseFloat(coffeeDrinks[index].price) + sum
            }`;
          }

          // здесь я запускаю функцию каждый раз, когда кликается любая кнопка выбора
          // будь это добавки или выбор размера
          modalSizeOptionButtons[0].addEventListener("click", totalPriceUpdate);
          modalSizeOptionButtons[1].addEventListener("click", totalPriceUpdate);
          modalSizeOptionButtons[2].addEventListener("click", totalPriceUpdate);

          modalAdditivesOptionButtons[0].addEventListener(
            "click",
            totalPriceUpdate
          );
          modalAdditivesOptionButtons[1].addEventListener(
            "click",
            totalPriceUpdate
          );
          modalAdditivesOptionButtons[2].addEventListener(
            "click",
            totalPriceUpdate
          );
        });
      });

      // по кнопке Close в модальном окне
      modalCloseBtn.addEventListener("click", function () {
        modal.classList.remove("active"); // закрыть модальное окно
      });
    });

    // то же самое, только для второй кнопки tea
    // здесь идёт фильтр под категорию tea
    cardButtons[1].addEventListener("click", function (event) {
      const teaDrinks = products.filter((drink) => drink.category === "tea");

      console.log(teaDrinks);
      cardWrapper.innerHTML = "";

      let i = 0;
      while (i < teaDrinks.length) {
        const mainOfferWrapper = document.createElement("div");
        mainOfferWrapper.classList.add("main-offer-wrapper");

        cardWrapper.appendChild(mainOfferWrapper);

        const mainOfferContent = document.createElement("div");
        mainOfferContent.classList.add("main-offer-content");

        const image = document.createElement("img");
        image.classList.add("main-offer-content-item");
        image.src = `./image/tea-${i + 1}.png`;
        image.alt = `${teaDrinks[i].name}`;

        mainOfferContent.appendChild(image);

        const mainOfferDescription = document.createElement("div");
        mainOfferDescription.classList.add("main-offer-description");

        const mainOfferDescriptionWrapper = document.createElement("div");
        mainOfferDescriptionWrapper.classList.add(
          "main-offer-description-wrapper"
        );

        const mainOfferDescriptionTitle = document.createElement("h2");
        mainOfferDescriptionTitle.classList.add("main-offer-description-title");
        mainOfferDescriptionTitle.textContent = `${teaDrinks[i].name}`;

        const mainOfferDescriptionText = document.createElement("p");
        mainOfferDescriptionText.classList.add("main-offer-description-text");
        mainOfferDescriptionText.textContent = `${teaDrinks[i].description}`;

        mainOfferDescriptionWrapper.appendChild(mainOfferDescriptionTitle);
        mainOfferDescriptionWrapper.appendChild(mainOfferDescriptionText);

        const mainOfferPrice = document.createElement("p");
        mainOfferPrice.classList.add("main-offer-description-price");
        mainOfferPrice.textContent = `$${teaDrinks[i].price}`;

        mainOfferDescription.appendChild(mainOfferDescriptionWrapper);
        mainOfferDescription.appendChild(mainOfferPrice);

        mainOfferWrapper.appendChild(mainOfferContent);
        mainOfferWrapper.appendChild(mainOfferDescription);

        i += 1;
      }

      // находим новосозданный блок с карточкой
      const mainOfferWrapper = document.querySelectorAll(".main-offer-wrapper");
      // говорим что, если по какой-либо из них кликнули
      mainOfferWrapper.forEach(function (card, index) {
        card.addEventListener("click", function () {
          modal.classList.add("active"); // открыть модальное окно
          modalImg.src = `./image/tea-${index + 1}.png`; // вставить картинку в соответствии с выбранной карточкой
          modalTitle.textContent = `${teaDrinks[index].name}`; // вставить наименование продукта
          modalSubtitle.textContent = `${teaDrinks[index].description}`; // вставить описание продукта
          modalSizeSmall.textContent = `${teaDrinks[index].sizes.s.size}`; // вставить размер маленького продукта
          modalSizeMedium.textContent = `${teaDrinks[index].sizes.m.size}`; // вставить размер среднего продукта
          modalSizeLarge.textContent = `${teaDrinks[index].sizes.l.size}`; // вставить размер большого продукта
          modalAdditives1.textContent = `${teaDrinks[index].additives[0].name}`; // вставить название первой добавки
          modalAdditives2.textContent = `${teaDrinks[index].additives[1].name}`; // вставить название второй добавки
          modalAdditives3.textContent = `${teaDrinks[index].additives[2].name}`; // вставить название третьей добавки
          modalTotalPrice.textContent = `$${teaDrinks[index].price}`; // вставить цену за основной продукт

          const allButtonsTotalPrice = [
            {
              button: modalSizeOptionButtons[0],
              value: parseFloat(teaDrinks[index].sizes.s.addPrice),
            },

            {
              button: modalSizeOptionButtons[1],
              value: parseFloat(teaDrinks[index].sizes.m.addPrice),
            },

            {
              button: modalSizeOptionButtons[2],
              value: parseFloat(teaDrinks[index].sizes.l.addPrice),
            },

            {
              button: modalAdditivesOptionButtons[0],
              value: parseFloat(teaDrinks[index].additives[0].addPrice),
            },

            {
              button: modalAdditivesOptionButtons[1],
              value: parseFloat(teaDrinks[index].additives[1].addPrice),
            },

            {
              button: modalAdditivesOptionButtons[2],
              value: parseFloat(teaDrinks[index].additives[2].addPrice),
            },
          ];

          function totalPriceUpdate() {
            let sum = 0;
            allButtonsTotalPrice.forEach((objElem) => {
              if (objElem.button.classList.contains("active")) {
                sum += objElem.value;
              }
            });
            modalTotalPrice.textContent = `$${
              parseFloat(teaDrinks[index].price) + sum
            }`;
          }

          modalSizeOptionButtons[0].addEventListener("click", totalPriceUpdate);
          modalSizeOptionButtons[1].addEventListener("click", totalPriceUpdate);
          modalSizeOptionButtons[2].addEventListener("click", totalPriceUpdate);

          modalAdditivesOptionButtons[0].addEventListener(
            "click",
            totalPriceUpdate
          );
          modalAdditivesOptionButtons[1].addEventListener(
            "click",
            totalPriceUpdate
          );
          modalAdditivesOptionButtons[2].addEventListener(
            "click",
            totalPriceUpdate
          );
        });
      });
      // по кнопке Close в модальном окне
      modalCloseBtn.addEventListener("click", function () {
        modal.classList.remove("active"); // закрыть модальное окно
      });
    });

    // то же самое, только для второй кнопки dessert
    // здесь идёт фильтр под категорию dessert
    cardButtons[2].addEventListener("click", function (event) {
      const dessert = products.filter((eat) => eat.category === "dessert");

      console.log(dessert);
      cardWrapper.innerHTML = "";

      let i = 0;
      while (i < dessert.length) {
        const mainOfferWrapper = document.createElement("div");
        mainOfferWrapper.classList.add("main-offer-wrapper");

        cardWrapper.appendChild(mainOfferWrapper);

        const mainOfferContent = document.createElement("div");
        mainOfferContent.classList.add("main-offer-content");

        const image = document.createElement("img");
        image.classList.add("main-offer-content-item");
        image.src = `./image/dessert-${i + 1}.png`;
        image.alt = `${dessert[i].name}`;

        mainOfferContent.appendChild(image);

        const mainOfferDescription = document.createElement("div");
        mainOfferDescription.classList.add("main-offer-description");

        const mainOfferDescriptionWrapper = document.createElement("div");
        mainOfferDescriptionWrapper.classList.add(
          "main-offer-description-wrapper"
        );

        const mainOfferDescriptionTitle = document.createElement("h2");
        mainOfferDescriptionTitle.classList.add("main-offer-description-title");
        mainOfferDescriptionTitle.textContent = `${dessert[i].name}`;

        const mainOfferDescriptionText = document.createElement("p");
        mainOfferDescriptionText.classList.add("main-offer-description-text");
        mainOfferDescriptionText.textContent = `${dessert[i].description}`;

        mainOfferDescriptionWrapper.appendChild(mainOfferDescriptionTitle);
        mainOfferDescriptionWrapper.appendChild(mainOfferDescriptionText);

        const mainOfferPrice = document.createElement("p");
        mainOfferPrice.classList.add("main-offer-description-price");
        mainOfferPrice.textContent = `$${dessert[i].price}`;

        mainOfferDescription.appendChild(mainOfferDescriptionWrapper);
        mainOfferDescription.appendChild(mainOfferPrice);

        mainOfferWrapper.appendChild(mainOfferContent);
        mainOfferWrapper.appendChild(mainOfferDescription);

        i += 1;
      }

      // находим новосозданный блок с карточкой
      const mainOfferWrapper = document.querySelectorAll(".main-offer-wrapper");
      // говорим что, если по какой-либо из них кликнули
      mainOfferWrapper.forEach(function (card, index) {
        card.addEventListener("click", function () {
          modal.classList.add("active"); // открыть модальное окно
          modalImg.src = `./image/dessert-${index + 1}.png`; // вставить картинку в соответствии с выбранной карточкой
          modalTitle.textContent = `${dessert[index].name}`; // вставить наименование продукта
          modalSubtitle.textContent = `${dessert[index].description}`; // вставить описание продукта
          modalSizeSmall.textContent = `${dessert[index].sizes.s.size}`; // вставить размер маленького продукта
          modalSizeMedium.textContent = `${dessert[index].sizes.m.size}`; // вставить размер среднего продукта
          modalSizeLarge.textContent = `${dessert[index].sizes.l.size}`; // вставить размер большого продукта
          modalAdditives1.textContent = `${dessert[index].additives[0].name}`; // вставить название первой добавки
          modalAdditives2.textContent = `${dessert[index].additives[1].name}`; // вставить название второй добавки
          modalAdditives3.textContent = `${dessert[index].additives[2].name}`; // вставить название третьей добавки

          modalTotalPrice.textContent = `$${dessert[index].price}`; // вставить цену за основной продукт

          const allButtonsTotalPrice = [
            {
              button: modalSizeOptionButtons[0],
              value: parseFloat(dessert[index].sizes.s.addPrice),
            },

            {
              button: modalSizeOptionButtons[1],
              value: parseFloat(dessert[index].sizes.m.addPrice),
            },

            {
              button: modalSizeOptionButtons[2],
              value: parseFloat(dessert[index].sizes.l.addPrice),
            },

            {
              button: modalAdditivesOptionButtons[0],
              value: parseFloat(dessert[index].additives[0].addPrice),
            },

            {
              button: modalAdditivesOptionButtons[1],
              value: parseFloat(dessert[index].additives[1].addPrice),
            },

            {
              button: modalAdditivesOptionButtons[2],
              value: parseFloat(dessert[index].additives[2].addPrice),
            },
          ];

          function totalPriceUpdate() {
            let sum = 0;
            allButtonsTotalPrice.forEach((objElem) => {
              if (objElem.button.classList.contains("active")) {
                sum += objElem.value;
              }
            });
            modalTotalPrice.textContent = `$${
              parseFloat(dessert[index].price) + sum
            }`;
          }

          modalSizeOptionButtons[0].addEventListener("click", totalPriceUpdate);
          modalSizeOptionButtons[1].addEventListener("click", totalPriceUpdate);
          modalSizeOptionButtons[2].addEventListener("click", totalPriceUpdate);

          modalAdditivesOptionButtons[0].addEventListener(
            "click",
            totalPriceUpdate
          );
          modalAdditivesOptionButtons[1].addEventListener(
            "click",
            totalPriceUpdate
          );
          modalAdditivesOptionButtons[2].addEventListener(
            "click",
            totalPriceUpdate
          );
        });
      });

      // по кнопке Close в модальном окне
      modalCloseBtn.addEventListener("click", function () {
        modal.classList.remove("active"); // закрыть модальное окно
      });
    });

    // при загрузке страницы кликнуть на кнопку раздела "кофе"
    window.addEventListener("load", function () {
      cardButtons[0].click();
    });
  }
  getProductsData(); // запускаем асинхронную функцию

  // код выше работает следующим образом:
  // открыв массив с объектами в консоли можно увидеть вложенность
  // мы фильтруем массив по нужной нам категории
  // а затем добавляем карточки друг за другом циклично с помощью while
  // итерация продолжается до тех пор, пока не закончатся данные из отфильтрованного массива
  // остается только придумать как добавить кнопку загрузки и дело в шляпе

  // код ниже способствует добавлению класса active кнопкам по разделам продуктов
  // и удалению класса active у остальных кнопок
  // здесь мы циклично перебираем все кнопки
  for (let button of cardButtons) {
    // накладываем событие клик для каждой кнопки
    button.addEventListener("click", function () {
      // находим все элементы с классом active в текущей кнопке
      const activeElements = button.querySelectorAll(".active");

      // если в кнопке уже есть активный элемент, то просто выходим из функции
      if (activeElements.length) {
        return;
      }

      // удаляем класс active со всех кнопок
      cardButtons.forEach(function (btn) {
        btn.classList.remove("active");
      });

      // добавляем класс active к текущей кнопке, svg и span
      button.classList.add("active");
      button.querySelector(".main-menu-btn-item").classList.add("active");
      button.querySelector(".main-menu-btn-item-text").classList.add("active");

      // удаляем класс active у span и svg всех кнопок, кроме текущей
      cardButtons.forEach(function (btn) {
        if (btn !== button) {
          btn.querySelector(".main-menu-btn-item").classList.remove("active");
          btn
            .querySelector(".main-menu-btn-item-text")
            .classList.remove("active");
        }
      });
    });
  }

  // перебираем все кнопки
  modalSizeOptionButtons.forEach(function (button) {
    // на каждую кнопку возводим событие клик
    button.addEventListener("click", function () {
      // когда мы кликнули на кнопку, запустим повторный  перебор массива
      modalSizeOptionButtons.forEach(function (otherButton) {
        // в котором удалим у всех класс active
        otherButton.classList.remove("active");
      });
      // затем добавим класс active к кликнутой кнопке
      button.classList.add("active");
    });
  });

  // функция по добавлению класса active кнопка в модальном окне (additives)
  modalAdditivesOptionButtons.forEach(function (button) {
    // если на одну из кнопок кликнули
    button.addEventListener("click", function () {
      // то именно этой тоглить класс active
      this.classList.toggle("active");
    });
  });
});

// ******************************************************    ПОПЫТКИ КОДА ***********************

// const totalPriceUpdate = () => {
//   let sum = 0;

//   for (const button of modalSizeOptionButtons) {
//     if (button.classList.contains("active")) {
//       sum += parseFloat(button.textContent);
//     }
//   }

//   for (const button of modalAdditivesOptionButtons) {
//     if (button.classList.contains("active")) {
//       sum += parseFloat(button.textContent);
//     } else {
//       sum -= parseFloat(button.textContent);
//     }
//   }

//   modalTotalPrice.innerText = `$${sum}`;
// };
// modalSizeOptionButtons[0].addEventListener("click", totalPriceUpdate);
// modalSizeOptionButtons[1].addEventListener("click", totalPriceUpdate);
// modalSizeOptionButtons[2].addEventListener("click", totalPriceUpdate);

// modalAdditivesOptionButtons[0].addEventListener(
//   "click",
//   totalPriceUpdate
// );
// modalAdditivesOptionButtons[1].addEventListener(
//   "click",
//   totalPriceUpdate
// );
// modalAdditivesOptionButtons[2].addEventListener(
//   "click",
//   totalPriceUpdate
// );

// const allButtonsTotalPrice = [
//   {
//     button: modalSizeOptionButtons[0],
//     value: parseFloat(coffeeDrinks[index].sizes.s.addPrice),
//   },

//   {
//     button: modalSizeOptionButtons[1],
//     value: parseFloat(coffeeDrinks[index].sizes.m.addPrice),
//   },

//   {
//     button: modalSizeOptionButtons[2],
//     value: parseFloat(coffeeDrinks[index].sizes.l.addPrice),
//   },

//   {
//     button: modalAdditivesOptionButtons[0],
//     value: parseFloat(coffeeDrinks[index].additives[0].addPrice),
//   },

//   {
//     button: modalAdditivesOptionButtons[1],
//     value: parseFloat(coffeeDrinks[index].additives[1].addPrice),
//   },

//   {
//     button: modalAdditivesOptionButtons[2],
//     value: parseFloat(coffeeDrinks[index].additives[2].addPrice),
//   },
// ];

// console.log(allButtonsTotalPrice[2].classList.contains("active"));
// console.log(allButtonsTotalPrice[5].classList.contains("active"));

// const productPrice = parseFloat(coffeeDrinks[index].price);
// const sum = 0;

// for (const button of allButtonsTotalPrice) {
//   if (button.button.classList.contains("active")) {
//     sum += button.value;
//   }
// }

// modalTotalPrice.textContent = sum;
//************************************************************************************************************** */
// const totalPriceUpdate = () => {
//   if (modalSizeOptionButtons[0].classList.contains("active")) {
//     modalTotalPrice.innerText = `$${
//       parseFloat(coffeeDrinks[index].price) +
//       parseFloat(coffeeDrinks[index].sizes.s.addPrice)
//     }`;
//   } else if (modalSizeOptionButtons[1].classList.contains("active")) {
//     modalTotalPrice.innerText = `$${
//       parseFloat(coffeeDrinks[index].price) +
//       parseFloat(coffeeDrinks[index].sizes.m.addPrice)
//     }`;
//   } else if (modalSizeOptionButtons[2].classList.contains("active")) {
//     modalTotalPrice.innerText = `$${
//       parseFloat(coffeeDrinks[index].price) +
//       parseFloat(coffeeDrinks[index].sizes.l.addPrice)
//     }`;
//   }
// };

// modalSizeOptionButtons[0].addEventListener("click", totalPriceUpdate);
// modalSizeOptionButtons[1].addEventListener("click", totalPriceUpdate);
// modalSizeOptionButtons[2].addEventListener("click", totalPriceUpdate);
//***************************************************************************************************************** */
// const smallSizePrice = parseFloat(
//   coffeeDrinks[index].sizes.s.addPrice
// );

// const mediumSizePrice = parseFloat(
//   coffeeDrinks[index].sizes.m.addPrice
// );

// const largeSizePrice = parseFloat(
//   coffeeDrinks[index].sizes.l.addPrice
// );

// const additivesPrice1 = parseFloat(
//   coffeeDrinks[index].additives[0].addPrice
// );

// const additivesPrice2 = parseFloat(
//   coffeeDrinks[index].additives[1].addPrice
// );

// const additivesPrice3 = parseFloat(
//   coffeeDrinks[index].additives[2].addPrice
// );
