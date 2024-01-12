// **************************** вёрстка макета ****************************
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
      "Когда я падаю с неба меня, почему-то, называют падающей звездой, но на самом деле я...",
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

// цикл: добавляет span в пустой массив столько раз, сколько букв в ответе на загадку
// вкладывает каждую букву в нужный блок DOM элемента
// добавляет к каждому span нужный класс
// добавляет к каждому span текст "__"
for (let i = 0; i < conundrumArray[0].conundrumAnswer.length; i++) {
  conundrumLetters.push(document.createElement("span"));
  conundrumWord.appendChild(conundrumLetters[i]);
  conundrumLetters[i].classList.add("conundrum-word__letter");
  conundrumLetters[i].textContent = "__";
}

console.log(conundrumLetters);

// блок для вопроса
const conundrumHint = document.createElement("h2");
conundrumHint.classList.add("conundrum-hint");
conundrumHint.textContent = "Вопрос: ";

// вложили в правую секцию
gameZoneConundrum.appendChild(conundrumHint);

// значение вопроса
const conundrumHintContent = document.createElement("span");
conundrumHintContent.classList.add("conundrum-hint__content");
conundrumHintContent.textContent = conundrumArray[5].conundrumQuestion;

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

// коллекция всех элементов с классом human
const humanAllSvgElements = document.querySelectorAll(".human");

// отображение человечка по мере счётчика попыток
// 0 — человечек не отображен, 6 — человечек показан полностью
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
