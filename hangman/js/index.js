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

// массив со спаном — в них должны быть буквы слова, потом поменяю
const conundrumLetters = [
  document.createElement("span"),
  document.createElement("span"),
  document.createElement("span"),
  document.createElement("span"),
  document.createElement("span"),
  document.createElement("span"),
  document.createElement("span"),
];

// цикл для добавления к каждому span нужный класс
// и вкладываем каждый спан в наш блок со значением "__"
for (let i = 0; i < conundrumLetters.length; i++) {
  conundrumLetters[i].classList.add("conundrum-word__letter");
  conundrumWord.appendChild(conundrumLetters[i]);
  conundrumLetters[i].textContent = "__";
}

// блок для вопроса
const conundrumHint = document.createElement("h2");
conundrumHint.classList.add("conundrum-hint");
conundrumHint.textContent = "Вопрос: ";

// вложили в правую секцию
gameZoneConundrum.appendChild(conundrumHint);

// значение вопроса — потом поменяю его на конкретные вопросы
const conundrumHintContent = document.createElement("span");
conundrumHintContent.classList.add("conundrum-hint__content");
conundrumHintContent.textContent = "блаблабла, угу";

// вложил значение вопроса в блок для вопроса
conundrumHint.appendChild(conundrumHintContent);

// блок для отображения попыток
const conundrumGuess = document.createElement("p");
conundrumGuess.classList.add("conundrum-guess");
conundrumGuess.textContent = "Попытки: ";

// вложили в правую секцию
gameZoneConundrum.appendChild(conundrumGuess);

// значение: сколько попыток осталось
const conundrumGuessCount = document.createElement("span");
conundrumGuessCount.classList.add("conundrum-guess__count");
conundrumGuessCount.textContent = "0 / 6";

// вложил значение попыток в блок для попыток
conundrumGuess.appendChild(conundrumGuessCount);

// русский алфавит
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
