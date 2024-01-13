// находим наш body
const body = document.querySelector("body");
console.log(body);

// создаем контейнер
const container = document.createElement("div");
container.classList.add("container");

// вкладываем контейнер в body
body.appendChild(container);

// создаем header
const header = document.createElement("header");
header.classList.add("header");

// вкладываем header в контейнер
container.appendChild(header);

// заголовок для header
const headerTitle = document.createElement("h1");
headerTitle.classList.add("header__title");
headerTitle.textContent = "Игра Палач";

// подзаголовок для header
const headerSubtitle = document.createElement("p");
headerSubtitle.classList.add("header__subtitle");
headerSubtitle.textContent = "Добро пожаловать!";

// вкладываем их в header
header.appendChild(headerTitle);
header.appendChild(headerSubtitle);

// создаем main
const main = document.createElement("main");
main.classList.add("main");

// помещаем main в контейнер
container.appendChild(main);

// создаем обёртку игровой зоны
const gameZoneWrapper = document.createElement("div");
gameZoneWrapper.classList.add("game-zone-wrapper");

// вкладываем её в main
main.appendChild(gameZoneWrapper);

// создаём левую секцию с виселицей
const gameZoneGallows = document.createElement("section");
gameZoneGallows.classList.add("game-zone__gallows");

// вкладываем её в обёртку игровой зоны
gameZoneWrapper.appendChild(gameZoneGallows);

// обёртка для svg элементов
const gameZoneGallowsWrapper = document.createElement("div");
gameZoneGallowsWrapper.classList.add("game-zone__gallows_wrapper");

// svg виселица
const gallowsSvg = document.createElement("img");
gallowsSvg.classList.add("gallows");
gallowsSvg.src = "./icon/gallows.svg";
gallowsSvg.alt = "gallows";

// вложение в обёртку svg элементов
gameZoneGallowsWrapper.appendChild(gallowsSvg);

// svg голова человека
const humanHeadSvg = document.createElement("img");
humanHeadSvg.classList.add("human");
humanHeadSvg.classList.add("human__head");
humanHeadSvg.src = "./icon/head.svg";
humanHeadSvg.alt = "head";

// вложение в обёртку svg элементов
gameZoneGallowsWrapper.appendChild(humanHeadSvg);

// svg туловища человека
const humanBodySvg = document.createElement("img");
humanBodySvg.classList.add("human");
humanBodySvg.classList.add("human__body");
humanBodySvg.src = "./icon/body.svg";
humanBodySvg.alt = "body";

// вложение в обёртку svg элементов
gameZoneGallowsWrapper.appendChild(humanBodySvg);

// svg левой руки человека
const humanHandOneSvg = document.createElement("img");
humanHandOneSvg.classList.add("human");
humanHandOneSvg.classList.add("human__hand_one");
humanHandOneSvg.src = "./icon/hand-one.svg";
humanHandOneSvg.alt = "left hand";

// вложение в обёртку svg элементов
gameZoneGallowsWrapper.appendChild(humanHandOneSvg);

// svg правой руки человека
const humanHandTwoSvg = document.createElement("img");
humanHandTwoSvg.classList.add("human");
humanHandTwoSvg.classList.add("human__hand_two");
humanHandTwoSvg.src = "./icon/hand-two.svg";
humanHandTwoSvg.alt = "right hand";

// вложение в обёртку svg элементов
gameZoneGallowsWrapper.appendChild(humanHandTwoSvg);

// svg левой ноги человека
const humanLegOneSvg = document.createElement("img");
humanLegOneSvg.classList.add("human");
humanLegOneSvg.classList.add("human__leg_one");
humanLegOneSvg.src = "./icon/leg-one.svg";
humanLegOneSvg.alt = "left leg";

// вложение в обёртку svg элементов
gameZoneGallowsWrapper.appendChild(humanLegOneSvg);

// svg правой ноги человека
const humanLegTwoSvg = document.createElement("img");
humanLegTwoSvg.classList.add("human");
humanLegTwoSvg.classList.add("human__leg_two");
humanLegTwoSvg.src = "./icon/leg-two.svg";
humanLegTwoSvg.alt = "right leg";

// вложение в обёртку svg элементов
gameZoneGallowsWrapper.appendChild(humanLegTwoSvg);

// подпись под виселицей
const gallowsName = document.createElement("h2");
gallowsName.classList.add("gallows-name");
gallowsName.textContent = "Не забываем дышать!";

// вложили в левую секцию нашу обёртку с svg элементами
gameZoneGallows.appendChild(gameZoneGallowsWrapper);
// вложили в левую секцию подпись под виселицей
gameZoneGallows.appendChild(gallowsName);

// создаём правую секцию с отгадыванием загадки
const gameZoneConundrum = document.createElement("section");
gameZoneConundrum.classList.add("game-zone__conundrum");

// вложили в общую обёртку игровой зоны
gameZoneWrapper.appendChild(gameZoneConundrum);

// блок для букв загаданного слова
const conundrumWord = document.createElement("div");
conundrumWord.classList.add("conundrum-word");

// вложили его в правую секцию
gameZoneConundrum.appendChild(conundrumWord);

// пустой массив для span
// в него добавляются элементы в зависимости от количества букв в ответе слова
let conundrumLetters = [];

// массив с объектами — загадки и ответы
const conundrumArray = [
  {
    id: 1,
    conundrumAnswer: "Ветер",
    conundrumQuestion: "Без рук и без ног, а двери открываются",
  },

  {
    id: 2,
    conundrumAnswer: "Тень",
    conundrumQuestion:
      "Смести не получится, вынести не выйдет, а стемнеет — само уйдет",
  },

  {
    id: 3,
    conundrumAnswer: "Груша",
    conundrumQuestion: "Жёлтая лампочка висит, скушать нам её велит",
  },

  {
    id: 4,
    conundrumAnswer: "Ананас",
    conundrumQuestion: "Жёлтый фрукт похожий на шишку ели",
  },

  {
    id: 5,
    conundrumAnswer: "Солнце",
    conundrumQuestion: "Всходит и заходит, но с места не сходит",
  },

  {
    id: 6,
    conundrumAnswer: "Комета",
    conundrumQuestion:
      "Когда она падает с неба, её, почему-то, называют падающей звездой, но на самом деле она...",
  },

  {
    id: 7,
    conundrumAnswer: "Я",
    conundrumQuestion: "Кто самый лучший ревьювер?",
  },

  {
    id: 8,
    conundrumAnswer: "Цветы",
    conundrumQuestion: "Дарят девушкам в нечётном количестве",
  },

  {
    id: 9,
    conundrumAnswer: "Носки",
    conundrumQuestion: "Дарят парням в чётном количестве",
  },

  {
    id: 10,
    conundrumAnswer: "Да",
    conundrumQuestion: "Приготовишь мне вкусняшки, если вдруг встретимся?",
  },
];

// переменная для случайного выбора загадки
// используется пустой массив для запоминания последней выпавшей цифры
let alreadyDrawnDigits = [];
let randomIdOfConundrum;

// функция по созданию случайного выбора загадки
// созданная цифра закидывается в пустой массив
// при новой итерации в while прописано, что если данная цифра уже есть в массиве
// то создать новую случайную цифру снова, иначе продолжить функцию
// но если массив заполнится до 10 элементов — очистить его чтобы начать круг заново
const getRandomIdOfConundrum = () => {
  do {
    randomIdOfConundrum = Math.floor(Math.random() * 10);
  } while (alreadyDrawnDigits.includes(randomIdOfConundrum));

  alreadyDrawnDigits.push(randomIdOfConundrum);
  if (alreadyDrawnDigits.length === 10) {
    alreadyDrawnDigits = [];
  }

  return randomIdOfConundrum;
};

getRandomIdOfConundrum();
console.log(alreadyDrawnDigits.length);

// цикл: добавляет span в пустой массив столько раз, сколько букв в ответе на загадку
// вкладывает каждую букву в нужный блок DOM элемента
// добавляет к каждому span нужный класс
// добавляет к каждому span текст "__"
for (
  let i = 0;
  i < conundrumArray[randomIdOfConundrum].conundrumAnswer.length;
  i++
) {
  conundrumLetters.push(document.createElement("span"));
  conundrumWord.appendChild(conundrumLetters[i]);
  conundrumLetters[i].classList.add("conundrum-word__letter");
  conundrumLetters[i].textContent = "__";
}

// блок для вопроса
const conundrumHint = document.createElement("h2");
conundrumHint.classList.add("conundrum-hint");
conundrumHint.textContent = "Вопрос: ";

// вложили в правую секцию
gameZoneConundrum.appendChild(conundrumHint);

// значение вопроса
const conundrumHintContent = document.createElement("span");
conundrumHintContent.classList.add("conundrum-hint__content");
conundrumHintContent.textContent =
  conundrumArray[randomIdOfConundrum].conundrumQuestion;

// вложил значение вопроса в блок для вопроса
conundrumHint.appendChild(conundrumHintContent);

// блок для отображения попыток
const conundrumGuess = document.createElement("p");
conundrumGuess.classList.add("conundrum-guess");
conundrumGuess.textContent = "Попытки: ";

// вложили в правую секцию
gameZoneConundrum.appendChild(conundrumGuess);

// значение: сколько попыток осталось
let countOfGuess = 0;
const conundrumGuessCount = document.createElement("span");
conundrumGuessCount.classList.add("conundrum-guess__count");
conundrumGuessCount.textContent = `${countOfGuess} / 6`;

// функция для обновления счётчика попыток
const countOfGuessUpdate = () => {
  countOfGuess += 1;
  conundrumGuessCount.textContent = `${countOfGuess} / 6`;
};

// коллекция всех элементов с классом human
const humanAllSvgElements = document.querySelectorAll(".human");

// отображение человечка по мере счётчика попыток
// 0 — человечек не отображен, 6 — человечек показан полностью
// закидываем всё в функцию
const humanSvgUpdate = () => {
  if (countOfGuess === 0) {
    for (const element of humanAllSvgElements) {
      element.style.opacity = "0";
    }
  } else if (countOfGuess === 1) {
    humanHeadSvg.style.opacity = "1";
  } else if (countOfGuess === 2) {
    humanHeadSvg.style.opacity = "1";
    humanBodySvg.style.opacity = "1";
  } else if (countOfGuess === 3) {
    humanHeadSvg.style.opacity = "1";
    humanBodySvg.style.opacity = "1";
    humanHandOneSvg.style.opacity = "1";
  } else if (countOfGuess === 4) {
    humanHeadSvg.style.opacity = "1";
    humanBodySvg.style.opacity = "1";
    humanHandOneSvg.style.opacity = "1";
    humanHandTwoSvg.style.opacity = "1";
  } else if (countOfGuess === 5) {
    humanHeadSvg.style.opacity = "1";
    humanBodySvg.style.opacity = "1";
    humanHandOneSvg.style.opacity = "1";
    humanHandTwoSvg.style.opacity = "1";
    humanLegOneSvg.style.opacity = "1";
  } else if (countOfGuess === 6) {
    for (const element of humanAllSvgElements) {
      element.style.opacity = "1";
    }
  }
};

// вложил значение попыток в блок для попыток
conundrumGuess.appendChild(conundrumGuessCount);

// русский алфавит для виртуальной клавиатуры
const alphabetRussian = [
  "А",
  "Б",
  "В",
  "Г",
  "Д",
  "Е",
  "Ё",
  "Ж",
  "З",
  "И",
  "Й",
  "К",
  "Л",
  "М",
  "Н",
  "О",
  "П",
  "Р",
  "С",
  "Т",
  "У",
  "Ф",
  "Х",
  "Ц",
  "Ч",
  "Ш",
  "Щ",
  "Ъ",
  "Ы",
  "Ь",
  "Э",
  "Ю",
  "Я",
];

// создаём область для виртуальной клавиатуры
const conundrumKeyboard = document.createElement("div");
conundrumKeyboard.classList.add("conundrum-keyboard");

// вкладываем в правую секцию
gameZoneConundrum.appendChild(conundrumKeyboard);

// цикл: пока есть буквы в алфавите, создаем блок для буквы, задаем нужный класс
// устанавливаем значения из массива для каждого блока
// вкладываем каждый блок в область для виртуальной клавиатуры
for (let i = 0; i < alphabetRussian.length; i++) {
  const conundrumKeyboardContainer = document.createElement("div");
  conundrumKeyboardContainer.classList.add("conundrum-keyboard__container");
  conundrumKeyboardContainer.textContent = alphabetRussian[i];
  conundrumKeyboard.appendChild(conundrumKeyboardContainer);
}

// создаем футер
const footer = document.createElement("footer");
footer.classList.add("footer");

// помещаем футер в общий контейнер
container.appendChild(footer);

// добавляем текст
const footerText = document.createElement("p");
footerText.classList.add("footer-text");
footerText.textContent = "Приятного времяпровождения, друг!";

// вкладываем текст в футер
footer.appendChild(footerText);

// модальное окно — обёртка
const modalWrapper = document.createElement("div");
modalWrapper.classList.add("modal");
body.appendChild(modalWrapper);

// контентная часть модального окна
const modalContentBlock = document.createElement("div");
modalContentBlock.classList.add("modal__content");
modalWrapper.appendChild(modalContentBlock);

// текст победа/поражение
const modalContentTitle = document.createElement("p");
modalContentTitle.classList.add("modal__content__text");
modalContentTitle.textContent = "Победа!";
modalContentBlock.appendChild(modalContentTitle);

// текст блок для секретного слова
const modalContentSubtitle = document.createElement("p");
modalContentSubtitle.classList.add("modal__content__text");
modalContentSubtitle.textContent = "Секретное слово: ";
modalContentBlock.appendChild(modalContentSubtitle);

// секретное слово
let secretWord =
  conundrumArray[randomIdOfConundrum].conundrumAnswer.toUpperCase();

const secretWordUpdate = () => {
  secretWord =
    conundrumArray[randomIdOfConundrum].conundrumAnswer.toUpperCase();
  modalContentSecretWord.textContent = `${secretWord}`;
};

// span секретного слова внутри блока
const modalContentSecretWord = document.createElement("span");
modalContentSecretWord.classList.add("modal__content__text");
modalContentSecretWord.textContent = `${secretWord}`;
modalContentBlock.appendChild(modalContentSecretWord);

// кнопка старта новой игры
const modalContentNewGame = document.createElement("div");
modalContentNewGame.classList.add("modal__content__new-game");
modalContentNewGame.textContent = "Играть снова";
modalContentBlock.appendChild(modalContentNewGame);

// находим все кнопки на виртуальной клавиатуре
const conundrumKeyboardButtons = document.querySelectorAll(
  ".conundrum-keyboard__container"
);

// делаем все буквы ответа на загадку заглавными
// так как регистр важен (вроде бы)
let conundrumAnswerUpperCase =
  conundrumArray[randomIdOfConundrum].conundrumAnswer.toUpperCase();

// разбиваем на буквы ответ на загадку на массив по элементам
let lettersOfAnswer = conundrumAnswerUpperCase.split("");

// ответ на загадку (также служил для отладки)
console.log(lettersOfAnswer);

// функция по проверке игры: победил/проиграл
// считает количество совпадений отгаданных букв с количеством букв в ответе
// если кол-во совпадений равно кол-ву букв в ответе — победа
// если кол-во попыток станет равно 6 — поражение
// при любом исходе запускаем модальное окно
const checkGameOver = () => {
  let correctLetterMatches = 0;
  for (let i = 0; i < conundrumLetters.length; i++) {
    if (conundrumLetters[i].textContent === lettersOfAnswer[i]) {
      correctLetterMatches += 1;
    }

    if (correctLetterMatches === conundrumLetters.length) {
      modalWrapper.classList.add("_active");
      modalContentTitle.textContent = "Победа!";
      secretWordUpdate();
      break;
    }
  }

  if (countOfGuess === 6) {
    modalWrapper.classList.add("_active");
    modalContentTitle.textContent = "Поражение!";
    secretWordUpdate();
  }
};

// перебираем каждую кнопку и по клику на любую из них
// вытаскиваем содержимое кликнутой кнопки
for (const button of conundrumKeyboardButtons) {
  button.addEventListener("click", function (event) {
    const blockOfKeyboard = event.target;
    const letterOfKeyboard = blockOfKeyboard.textContent;

    // после того как вытащили содержимое кнопки — букву
    // проверяем: есть ли эта буква в ответе на загадку?
    // если да — запускаем цикл проверки каждого элемента
    if (lettersOfAnswer.includes(letterOfKeyboard)) {
      for (
        let i = 0;
        i < conundrumArray[randomIdOfConundrum].conundrumAnswer.length;
        i++
      ) {
        // если первый элемент равен букве с виртуальной клавиатуры
        if (lettersOfAnswer[i] === letterOfKeyboard) {
          // то именно этим элементом заменяем текст у первого span
          conundrumLetters[i].textContent = lettersOfAnswer[i];
          // добавляем класс disabled (pointer-events: none;)
          blockOfKeyboard.classList.add("_disabled");
          checkGameOver();
        }
      }
      // если выбранной буквы нет в ответе на загадку
    } else {
      blockOfKeyboard.classList.add("_disabled"); // также добавляем класс
      countOfGuessUpdate(); // обновляем количество попыток
      checkGameOver(); // проверка победил/проиграл
      humanSvgUpdate(); // обновляем отображение человечка
    }
  });
}

// поддержка физической клавиатуры
// сначала сравнивается кнопка с массивом допустимых букв
// если всё круто — код схож с поддержкой виртуальной клавиатуры
// в противном случае выводится в консоль просьба о смене раскладки

document.addEventListener("keyup", function (event) {
  const bigLetter = event.key.toUpperCase(); // перевод полученной буквы в заглавную
  if (alphabetRussian.includes(bigLetter)) {
    if (lettersOfAnswer.includes(bigLetter)) {
      for (
        let i = 0;
        i < conundrumArray[randomIdOfConundrum].conundrumAnswer.length;
        i++
      ) {
        // если первый элемент равен букве с физической клавиатуры
        if (lettersOfAnswer[i] === bigLetter) {
          // то именно этим элементом заменяем текст у первого span
          conundrumLetters[i].textContent = lettersOfAnswer[i];
          // теперь перебираем виртуальную клавиатуру
          for (const blockOfKeyboard of conundrumKeyboardButtons) {
            // если буква физической совпадает с виртуальной клавиатурой
            // добавляем класс disabled (pointer-events: none;)
            if (blockOfKeyboard.textContent === bigLetter) {
              blockOfKeyboard.classList.add("_disabled");
            }
          }
        }
        checkGameOver(); // проверка игры: когда там победа?
      }
      // если буква с физической клавиатуры не сходится с буквой в ответе на загадку
    } else {
      for (const blockOfKeyboard of conundrumKeyboardButtons) {
        // если буква физической совпадает с виртуальной клавиатурой
        // добавляем класс disabled (pointer-events: none;)
        if (blockOfKeyboard.textContent === bigLetter) {
          blockOfKeyboard.classList.add("_disabled");
        }
      }
      // после if проверок
      countOfGuessUpdate(); // обновляем счётчик
      humanSvgUpdate(); // обновляем svg элементы
      checkGameOver(); // снова проверяем когда там конец игры
    }
    // если нажатая клавиша не совпадает с массивом алфавита
  } else {
    console.log(
      "huh?\nИспользуйте русскую раскладку, пожалуйста, только буквы"
    );
  }
});

// функция по старту новой игры
const startNewGame = () => {
  modalWrapper.classList.remove("_active");
  getRandomIdOfConundrum();
  countOfGuess = -1; // так как countOfGuessUpdate(); имеет +1 сразу, я вывожу -1 для нуля
  countOfGuessUpdate();
  humanSvgUpdate();

  conundrumKeyboardButtons.forEach((button) => {
    button.classList.remove("_disabled");
  });

  conundrumHintContent.textContent =
    conundrumArray[randomIdOfConundrum].conundrumQuestion;

  // цикл повторяется, пока у блока conundrumWord есть хотя бы один дочерний элемент
  // далее — цикл удаляет первый дочерний элемент
  // делается для того, чтобы перезаписать слово по новой
  while (conundrumWord.firstChild) {
    conundrumWord.removeChild(conundrumWord.firstChild);
  }

  conundrumLetters = [];
  // в снова пустой массив без всех элементов span
  // перезаписываем слово скрывая нижним прочерком
  for (
    let i = 0;
    i < conundrumArray[randomIdOfConundrum].conundrumAnswer.length;
    i++
  ) {
    conundrumLetters.push(document.createElement("span"));
    conundrumWord.appendChild(conundrumLetters[i]);
    conundrumLetters[i].classList.add("conundrum-word__letter");
    conundrumLetters[i].textContent = "__";
  }
  conundrumAnswerUpperCase =
    conundrumArray[randomIdOfConundrum].conundrumAnswer.toUpperCase();

  lettersOfAnswer = [];
  lettersOfAnswer = conundrumAnswerUpperCase.split("");

  console.log(lettersOfAnswer);
};

// на кнопку в модальном окне рестарт игры
modalContentNewGame.addEventListener("click", startNewGame);
