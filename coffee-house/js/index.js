// запуск дерева
document.addEventListener("DOMContentLoaded", function () {
  // **************************** БУРГЕР МЕНЮ ****************************************************

  const burgerMenu = document.querySelector(".header-menu-nav"); // плашка бургера
  const burgerBtn = document.querySelector(".header-menu-burger-btn"); // кнопка бургер меню
  const burgerItem = document.querySelectorAll(".header-menu-nav-list-item a"); // якорные ссылки

  // при клике на кнопку бургер меню активировать плашку и сменить кнопку бургера
  burgerBtn.addEventListener("click", function () {
    burgerMenu.classList.toggle("active");
    burgerBtn.classList.toggle("active");
  });

  // если клик был Не по...
  document.addEventListener("click", function (event) {
    if (
      !burgerMenu.contains(event.target) && //... плашке меню и...
      !burgerBtn.contains(event.target) //...кнопке
    ) {
      burgerMenu.classList.remove("active"); // то убрать класс active (скрыть плашку)
    }
  });

  // перебор коллекции кнопок в навигации
  burgerItem.forEach(function (item) {
    // если кликнули по любой кнопке
    item.addEventListener("click", function () {
      burgerMenu.classList.remove("active"); // скрыть плашку бургера
      burgerBtn.classList.remove("active"); // сменить кнопку бургера
    });
  });
  // ******************************* КАРУСЕЛЬ ****************************************************
  const mediaQuery715px = window.matchMedia("(max-width: 715px)"); // "медиа запрос" — улавливает соответствие ширины экрана указанным требованиям
  const carouselLeftBtn = document.querySelector(".carousel-btn__left"); // левая кнопка карусели
  const carouselRightBtn = document.querySelector(".carousel-btn__right"); // правая кнопка карусели
  const carouselSlideContent = document.querySelectorAll(
    ".main-favorite__coffee-carousel-slide"
  ); // контентная часть слайдера
  const carouselContainer = document.querySelector(
    ".main-favorite__coffee-carousel-wrapper"
  ); // контейнер слайдера
  const carouselControls = document.querySelectorAll(".control"); // контроллеры слайдера
  const progressBarControls = document.querySelectorAll(
    ".control-progress__bar"
  ); // статус бар контроллера

  let currentSlidePosition = 0; // начальное положение слайда
  let isDragging = false; // флаг "перетаскивания мышкой"
  let draggingStartPosition = 0; // позиция при начале перетаскивания мышкой
  let deltaX = 0; // разница между  началом перетаскивания мыши и концом
  const delay = 500; // время задержки в миллисекундах
  let throttleTimeout; // индикатор: происходит ли выполнение функции в данный момент?
  let intervalId; // объявление интервала между автоматическим перелистыванием

  // функция для запуска авто перелистывания
  const startCarousel = () => {
    // присваивается интервал = циклично повторять функцию каждые 5000ms
    intervalId = setInterval(function () {
      // текущая позиция слайда = текущая позиция слайда + (либо 348, либо 480... зависит от ширины экрана)
      // mediaQuery715px.matches ? 348 : 480; — экран 715px и меньше? тогда 348px к смещению слайда, иначе 480px
      currentSlidePosition += mediaQuery715px.matches ? 348 : 480;
      updateSlidePosition(); // функция по смещению слайдера
    }, 5000); // временной интервал повторения функции в миллисекундах
  };

  // функция остановки слайдера
  function repeatStartCarousel() {
    clearInterval(intervalId); // очистить время интервала
    // присваивается интервал = циклично повторять функцию каждые 5000ms
    intervalId = setInterval(function () {
      // текущая позиция слайда = текущая позиция слайда + (либо 348, либо 480... зависит от ширины экрана)
      // mediaQuery715px.matches ? 348 : 480; — экран 715px и меньше? тогда 348px к смещению слайда, иначе 480px
      currentSlidePosition += mediaQuery715px.matches ? 348 : 480;
      updateSlidePosition(); // функция по смещению слайдера
    }, 5000); // временной интервал повторения функции в миллисекундах
  }

  startCarousel(); // запуск цикла по интервалу

  carouselContainer.addEventListener("touchstart", function (event) {
    isDragging = true; // флаг перетаскивания true
    draggingStartPosition = event.touches[0].clientX; // начальная позиция равна точке клика по ширине экрана браузера
  });

  // прослушка на движение мыши
  carouselContainer.addEventListener("touchmove", function (event) {
    // если флаг true
    if (isDragging) {
      // то: если функция не воспроизводится прямо сейчас
      if (!throttleTimeout) {
        // то установить индикатору функцию с временем выполнения:
        throttleTimeout = setTimeout(() => {
          // рассчитать позицию между кликом по координате Х и текущей позицией
          // например клик был на точке в Х = 200px по ширине, мышка двинулась вправо до Х = 300
          // то получится 200 - 300 = -100
          deltaX = event.touches[0].clientX - draggingStartPosition;
          // теперь если итог у нас больше нуля
          if (deltaX > 0) {
            // то передвигаем слайд на 480px вправо
            currentSlidePosition -= mediaQuery715px.matches ? 348 : 480;
          } else {
            // в противном случае на 480px влево
            currentSlidePosition += mediaQuery715px.matches ? 348 : 480;
          }
          // console.log(deltaX); просто проверка текущего значения
          updateSlidePosition(); // обновляем слайд
          throttleTimeout = null; // сбрасываем индикатор обратно в null
        }, delay); // установка времени выполнения функции
      }
    }
  });

  // если кнопка мыши отпущена
  carouselContainer.addEventListener("touchend", function (event) {
    isDragging = false; // флаг перетаскивания false
    repeatStartCarousel();
  });

  // прослушка на кликнутую кнопку мыши
  carouselContainer.addEventListener("mousedown", function (event) {
    isDragging = true; // флаг перетаскивания true
    draggingStartPosition = event.clientX; // начальная позиция равна точке клика по ширине экрана браузера
  });

  // прослушка на движение мыши
  carouselContainer.addEventListener("mousemove", function (event) {
    // если флаг true
    if (isDragging) {
      // то: если функция не воспроизводится прямо сейчас
      if (!throttleTimeout) {
        // то установить индикатору функцию с временем выполнения:
        throttleTimeout = setTimeout(() => {
          // рассчитать позицию между кликом по координате Х и текущей позицией
          // например клик был на точке в Х = 200px по ширине, мышка двинулась вправо до Х = 300
          // то получится 200 - 300 = -100
          deltaX = event.clientX - draggingStartPosition;
          // теперь если итог у нас больше нуля
          if (deltaX > 0) {
            // то передвигаем слайд на 480px вправо
            currentSlidePosition -= mediaQuery715px.matches ? 348 : 480;
          } else {
            // в противном случае на 480px влево
            currentSlidePosition += mediaQuery715px.matches ? 348 : 480;
          }
          // console.log(deltaX); просто проверка текущего значения
          updateSlidePosition(); // обновляем слайд
          throttleTimeout = null; // сбрасываем индикатор обратно в null
        }, delay); // установка времени выполнения функции
      }
    }
  });

  // если кнопка мыши отпущена
  carouselContainer.addEventListener("mouseup", function (event) {
    isDragging = false; // флаг перетаскивания false
    repeatStartCarousel();
  });

  // если мышка задела элемент — флаг также false
  carouselContainer.addEventListener("mouseenter", function (event) {
    isDragging = false;
  });

  // если мышка вышла из контейнера карусели
  carouselContainer.addEventListener("mouseleave", function (event) {
    isDragging = false; // значит режим перетаскивания отключен
  });

  // при клике на кнопку положение слайда смещается
  carouselLeftBtn.addEventListener("click", function () {
    currentSlidePosition -= mediaQuery715px.matches ? 348 : 480;
    updateSlidePosition(); // запуск функции смещения
    repeatStartCarousel(); // перезапустить функцию авто-слайдера
  });

  // при клике на кнопку положение слайда смещается
  carouselRightBtn.addEventListener("click", function () {
    currentSlidePosition += mediaQuery715px.matches ? 348 : 480;
    updateSlidePosition(); // запуск функции смещения
    repeatStartCarousel(); // перезапустить функцию авто-слайдера
  });

  // функция по передвижению слайдера
  const updateSlidePosition = () => {
    // если текущая позиция слайда выходит больше 960px (или 696 в зависимости от размера экрана)
    if (currentSlidePosition > (mediaQuery715px.matches ? 696 : 960)) {
      // то сбросить до начального состояния
      currentSlidePosition = 0;
      // но если текущая позиция слайда меньше нуля
    } else if (currentSlidePosition < 0) {
      // то назначить ему последний слайд (в зависимости от размера экрана 3 слайд будет расположен по-разному)
      currentSlidePosition = mediaQuery715px.matches ? 696 : 960;
    }

    // перебор каждого слайдера
    carouselSlideContent.forEach(function (item) {
      // к каждому слайдеру добавляется css свойство translateX
      item.style.transform = `translateX(-${currentSlidePosition}px)`;
    });

    // перебор каждого контроллера
    progressBarControls.forEach(function (control, index) {
      // если индекс текущего контроллера * 480(px) равен текущей позиции слайда
      if (
        index * (mediaQuery715px.matches ? 348 : 480) ===
        currentSlidePosition
      ) {
        // то добавить к нему класс active
        control.classList.add("active");
      } else {
        // а у остальных убрать
        control.classList.remove("active");
      }
    });
  };

  // начать выполнение функции после загрузки всей страницы
  // нужно для того, чтобы в самом начале первый слайд также имел
  // интерактивный контроллер
  window.addEventListener("load", updateSlidePosition);
});
