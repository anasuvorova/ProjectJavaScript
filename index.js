/*
document.querySelector(".card-content__button--photo").addEventListener("click", () => {
  console.log(`кнопка нажата`);
  */

//  fetch("http://localhost:3000/api/nasa-obg" /*`/api/nasa-obg`*/)
//     .then((response) => response.json())

//     .then((obj) => {
//       console.log(obj);

//       /* window.open("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY`", "_blank");*/
//     })

//     .catch((error) => {
//       console.error("ошибка:", error);
//     });/*
// });

/*
const question = [
  {
    question: `Как звали человека, который первый полетел в космос?`,
    answers: ["Нил Армстронг", "Юрий Гагарин", "Сергей Королёв"],
    trueAnswer: "Юрий Гагарин",
  },

  {
    question: `Сколько планет в Солнечной  системе?`,
    answers: ["8", "9", "11"],
    trueAnswer: "8",
  },

  {
    question: `Как звали человека, который первый ступил  на Луну?`,
    answers: ["Герман Титов", "Юрий Гагарин", "Нил Армстронг"],
    trueAnswer: "Нил Армстронг",
  },

  {
    question: `В какой галактике находится планета Земля?`,
    answers: ["Галактика Млечный путь", "Большая Медведица I", "Андромеда II"],
    trueAnswer: "Галактика Млечный путь",
  },

  {
    question: "В каком созвездии находится пояс из трёх ярких звёзд?",
    answers: ["Орион", "Лебедь", "Геркулес"],
    trueAnswer: "Орион",
  },
];

class Test {
  constructor({ question, answers, trueAnswer, button, state, checkbox, stateCheckbox }) {
    this._question = question;
    this._answers = answers;
    this._trueAnswer = trueAnswer;
    this._button = "Перейти к следующему вопросу";
    this._checkbox = false;
    this._stateCheckbox = {
      checkbox: false,
    };

    this._state = {
      info: false,
    };
    this._init();
  }
  // init() метод который вызывается при создании теста.
  // я при помощи него  вывожу start!!!!!!!!!!!! в консоль
  //чтобы убедиться что все начало работать
  _init() {
    console.log("start!!!!!!!!!!!!");
  }
  _setStateButton(newState) {
    this._state.info = newState;
  }
  _setStateCheckbox(newStateCheckbox) {
    this._stateCheckbox.checkbox = newStateCheckbox;
  }
  //отрисовка нтмл-разметки
  getTemplate() {
    let root = `
    <div class="test">
    <span class="test__question">${this._question}</span>
    <form class="test__form">
  <label class="test__label">
    <input type="checkbox" class="test__one" >${this._checkbox}
    
  </label>

   <label class="test__label2">
    <input type="checkbox" class="test__two">${this._checkbox}
    
  </label>

   <label class="test__label3">
    <input type="checkbox" class="test__three"/>${this._checkbox}
    
  </label>
</form>
    </div>
    <button class="test__button">${this._button}</button>
    `;
    return root;
  }
  buttonState() {
    //изменяю состояние кнопки ( вызываю )
  }

  //ОБНОВЛЯЮ СОСТОЯНИЕ КНОПКИ (функия 3)
  buttonChange() {
    //изменяю состояние (вызываю setStateButton)
    this._setStateButton(!this._state.info);
    //чтобы значение изменить я присваиваю новое значение
    //изменюя текст кнопки в зависимости от ее состояния
    const button = document.querySelector(".test__button");

    if (this._state.info === true) {
      button.textContent = "Перейти к следующему вопросу";
    } else {
      button.textContent = "Перейти к предыдущему вопросу";
    }
  }
}
//БУДЕТ 3 ФУНКЦИИ
//1 - отображает текущий вопрос
//2 - проверяет правильность ответа
//3 -  обновляет текст кнопки
const root = document.querySelector(".root");

//ПРОВЕРКА ПРАВИЛЬНОСТИ ОТВЕТА (2 функция)
//создаю ПЕРЕМЕННУЮ чтобы отслеживать какой вопрос сейчас показывается
let answersIndex = 0;
//получаю кнопку и вешаю слушатель
const button = document.querySelector(".test__button");
button.addEventListener("click", () => {
  //получаю текущий вопрос из массива
  //this._question - это массив всех вопросов в моем тесте (хранится он в конструкторе)
  //answersIndex - индексация текущего вопроса. Ее я увеличиваю при каждом клике
  const arrQuestion = this._question[answersIndex];

  //отображаю вопрос в нужном месте на странице
  document.querySelector(".test__question").textContent = arrQuestion.question;

  //обновляю answersIndex для слудующего вопроса
  answersIndex++;
});
 */

//const planets = ["Меркурий ", " Венера", " Земля", " Марс", " Юпитер", " Сатурн", "Уран ", " Нептун"];
/*
class Planets {
  //в объект я передаю только те элементы с которыми я хочу менять текст, хочу скрывать/показывать, хочу вешать события
  constructor({ name, description, img, planets, text, buttonGeneration, buttonYes, buttonNo }) {
    this._planets = planets;
    this._text = text;
    this._buttonGeneration = buttonGeneration;
    this._buttonYes = buttonYes;
    this._buttonNo = buttonNo;
    this._state = "start"; //начальное состояние. его я буду менять при кликах
  }
  _getGeneratePlanet() {
    //поскольку кнопка уже есть в конструкторе то кнопку не обязательно искать через document
    //обращаюсь к кнопке прямиком через конструктор
    const planets = [""];
    this._buttonGeneration.addEventListener("click", () => {
      const randomIndex = Math.floor(Math.random() * this._planets.length);
      const randomElement = this._planets[randomIndex];

      console.log(randomElement.name);
    });
  }
  getTemplate() {
    let gameGeneration = `
    //отрисовываю то что должно появляться при клике генерировать
    //Вы загадали планету ... . Я угадал? 
<span class="generation__answer">Вы загадали планету ... . Я угадал? </span>
<button class="generation__button generation__button--yes">
<button class="generation__button generation__button--no">




 
    `;
    return gameGeneration;
  }

  //вызываю метод при помощи this. когда есть инкапсуляция то  вызываем ВСЕГДА через this.
}

//то что касается рабоыт с внешними элементами и интеракциями с DOM я пишу вне класса

const mercury = new Planets({
  name: "Меркурий ",
  img: "images/merkuriy.jpg",
  description:
    "Мерку́рий — наименьшая планета Солнечной системы и самая близкая к Солнцу. Названа в честь древнеримского бога торговли — быстрого Меркурия, поскольку она движется по небу быстрее других планет. Её период обращения вокруг Солнца составляет всего 87,97 земных суток — самый короткий среди всех планет Солнечной системы.",
});

const venus = new Planets({
  name: " Венера",
  img: "images/merkuriy.jpg",
  description: `Вене́ра — вторая по удалённости от Солнца и шестая по размеру планета Солнечной системы, наряду с Меркурием, Землёй и Марсом принадлежащая к семейству планет земной группы. Названа в честь древнеримской богини любви Венеры. По ряду характеристик — например, по массе и размерам — Венера считается «сестрой» Земли. `,
});

const earth = new Planets({
  name: " Земля",
  img: "images/zemlya.jpg",
  description: `Земля́ — третья по удалённости от Солнца планета Солнечной системы. Самая плотная, пятая по диаметру и массе среди всех планет Солнечной системы и крупнейшая среди планет земной группы, в которую входят также Меркурий, Венера и Марс. Единственное известное человеку в настоящее время тело во Вселенной, населённое живыми организмами.`,
});
const generation = document.querySelector(".generation");
this._getGeneratePlanet();

const mars = new Planets({
  name: " Марс",
  img: "images/mars.jpg",
  description: `Марс — четвёртая по удалённости от Солнца и седьмая по размеру планета Солнечной системы. Наряду с Меркурием, Венерой и Землёй принадлежит к семейству планет земной группы. Названа в честь Марса — древнеримского бога войны, соответствующего древнегреческому Аресу.`,
});

const jupiter = new Planets({
  name: " Юпитер",
  img: "images/ypiter.jpg",
  description: `Юпи́тер — самая большая планета в Солнечной системе, пятая по удалённости от Солнца. Наряду с Сатурном Юпитер классифицируется как газовый гигант. `,
});

const saturn = new Planets({
  name: " Сатурн",
  img: "images/saturn.jpg",
  description: `Сату́рн — шестая планета по удалённости от Солнца и вторая по размерам планета в Солнечной системе после Юпитера. Сатурн классифицируется как газовый гигант. Планета названа в честь римского бога земледелия.`,
});

const uranus = new Planets({
  name: "Уран ",
  img: "images/uran.avif",
  description: `Ура́н — планета Солнечной системы, седьмая по удалённости от Солнца, третья по диаметру и четвёртая по массе. Была открыта в 1781 году английским астрономом Уильямом Гершелем и названа в честь греческого бога неба Урана. Уран стал первой планетой, обнаруженной в Новое время и при помощи телескопа. `,
});
//
const saturnPlanet = new Planets({
  name: " Нептун",
  img: "images/neptun.jpg",
  description: `Непту́н — восьмая и самая дальняя от Солнца планета Солнечной системы. Его масса превышает массу Земли в 17,2 раза и является третьей среди планет Солнечной системы, а по экваториальному диаметру Нептун занимает четвёртое место, превосходя Землю в 3,9 раза. Планета названа в честь Нептуна — римского бога морей. `,
});
*/

class Planet {
  constructor({ name, description, img, button }) {
    this._name = name;
    this._description = description;
    this._img = img;
    this._button = button;
  }

  getTemplete() {
    return `
    <div class="generation-planet">
    <span class="generation-planet__text">Я угадал? Ты загадал(а) планету <strong>${this._name}</strong></span>
    
    <button class="generation-plane__button-yes">Угадал (жми сюда!)</button>
    <button class="generation-plane__button-no">Не угадал</button>
    </div>
    `;
  }

  getDivPlanetInfo() {
    return `
    <div class = "planet-info">
    <span class = "planet-info__planet-name">${this._name}</span>
    <p class = "planet-info__planet-text">${this._description}</p>
    <img class = "planet-info__planet-img" src= ${this._img} alt="planet" >
    </div>
    
    `;
  }
}

const getRandomPlanet = () => {
  const randomPlanet = arr[Math.floor(Math.random() * arr.length)];
  return randomPlanet;
};

//создаю переменную для хранения текущей планеты
let planet;

const sawPlanetInfo = () => {
  const againRandomPlanet = this.randomPlanet;
  return againRandomPlanet;
};

const mercury = new Planet({
  name: "Меркурий ",
  img: "images/merkuriy.jpg",
  description:
    "Мерку́рий — наименьшая планета Солнечной системы и самая близкая к Солнцу. Названа в честь древнеримского бога торговли — быстрого Меркурия, поскольку она движется по небу быстрее других планет. Её период обращения вокруг Солнца составляет всего 87,97 земных суток — самый короткий среди всех планет Солнечной системы.",
});

const venus = new Planet({
  name: " Венера",
  img: "images/merkuriy.jpg",
  description: `Вене́ра — вторая по удалённости от Солнца и шестая по размеру планета Солнечной системы, наряду с Меркурием, Землёй и Марсом принадлежащая к семейству планет земной группы. Названа в честь древнеримской богини любви Венеры. По ряду характеристик — например, по массе и размерам — Венера считается «сестрой» Земли. `,
});

const earth = new Planet({
  name: " Земля",
  img: "images/zemlya.jpg",
  description: `Земля́ — третья по удалённости от Солнца планета Солнечной системы. Самая плотная, пятая по диаметру и массе среди всех планет Солнечной системы и крупнейшая среди планет земной группы, в которую входят также Меркурий, Венера и Марс. Единственное известное человеку в настоящее время тело во Вселенной, населённое живыми организмами.`,
});

const arr = [mercury, venus, earth];

const buttonGeneration = document.querySelector(".generation__button");

const generationDiv = document.querySelector(".generation");

buttonGeneration.addEventListener("click", () => {
  //убираю старое содержимое если оно есть
  const deletePlanetText = generationDiv.querySelector(".generation-planet");
  if (deletePlanetText) {
    //удаляю старую планету
    deletePlanetText.remove();
  }
  //сохраняю результат вызова метода в переменную
  const randomPlanetListener = getRandomPlanet();
  //использую эту переменную для полчуения шаблона и отрисовки
  const planetTemplate = randomPlanetListener.getTemplete();

  generationDiv.insertAdjacentHTML("beforeend", planetTemplate);
});
//кнопка угадал
const buttonYes = document.querySelector(".generation-plane__button-yes");
const planetInfoImg = document.querySelector(".planet-info");

buttonYes.addEventListener("click", () => {
  //если снегерированная планета 'пришла" в () то ...

  if (planet) {
    buttonYes.ariaDisabled = true;
    //сохраняю результат вызова метода в переменную
    const planetInfoImgListener = sawPlanetInfo();
    //использую эту переменную для полчуения шаблона и отрисовки
    const planetInfoImg = planetInfoImgListener.sawPlanetInfo();
    generationDiv.appendChild(planetInfoImg);
    generationDiv.insertAdjacentHTML("beforeend", planetInfoImg);
  }
});
