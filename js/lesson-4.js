//Завдання 1:

//const { createElement } = require("react");

// 1 -+ отримай body елемент і виведи його в консоль;
// 2 -+ отримай елемент id="title" і виведи його в консоль;
// 3 -+ отримай елемент class="list" і виведи його в консоль;
// 4 -+ отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// 5 -+ отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 6 -+ отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 7 -+ який елемент є сусідом для h1? Знайти і виведи його в консоль;
// 8 -+ по тегу h3 знайти всі заголовки та виведи їх у консоль;
// 9 -+ для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
// 10 -+ знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// 11 -+ додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// 12 -+ у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// 13 -+ створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic
// має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
// 14 -+ додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// 15 -+ знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// 16 -+ видали елемент li в якому знаходиться заголовок, який має class="completed"
// 17 -+ після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст:
// "Об'єктна модель документа (Document Object Model)"
// 18 -+ додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) -
// "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і
// дозволити браузеру зробити всю важку роботу".
// тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// 19 -+ зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// 20 - очисти список
const lisst = document.querySelector("ul");
/* lisst.insertAdjacentHTML(
  "beforeend",
  `
  <li>
  <h3>Властивість innerHTML</h3><p>Ще один спосіб створити DOM-елементи і 
  помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру 
  зробити всю важку роботу. </p></li>`
); */
console.log(lisst);

const itemLisst = document.createElement("li");
console.log(itemLisst);

const headH3 = document.createElement("h3");
headH3.textContent = "Властивість innerHTML";
const parag = document.createElement("p");
parag.textContent =
  "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";
itemLisst.appendChild(headH3);
itemLisst.appendChild(parag);
lisst.appendChild(itemLisst);
const heading = document.querySelector("h1");
const paragruf = document.createElement("p");
paragruf.textContent = "Об'єктна модель документа (Document Object Model)";
heading.insertAdjacentElement("afterend", paragruf);
const liComplited = document.querySelector(
  "li h1.completed, li h2.completed, li h3.completed"
);
if (liComplited) {
  liComplited.closest("li").remove();
}
console.log(liComplited);

const completed = document.querySelector(".completed");
//console.log(completed.textContent);

const currentTopic = "manipulation";
const topicMunipu = document.querySelector('[data-topic = "currrentTopic"]');
console.log(topicMunipu);

const liElement = document.querySelector('li[data-topic = "navigation" ]');
console.log(liElement);
liElement.style.backgroundColor = "yellow";
const paragaf = liElement.querySelector("p");
console.log(paragaf);
paragaf.textContent = "Я змінив тут текст!";
console.log(paragaf);

const liElementSibling = liElement.nextElementSibling;
console.log(liElementSibling);

const body = document.querySelector("body");
console.log(body);
const title = document.querySelector("#title");
console.log(title);
const list = document.querySelector(".list");
console.log(list);
const dataTopic = document.querySelectorAll("[data-topic]");
console.log(dataTopic[dataTopic.length - 1]);

console.log(dataTopic);
const munipuTopic = [...dataTopic].find((el) => {
  return el.dataset.topic === currentTopic;
});
munipuTopic.style.backgroundColor = "blue";
const dataTopicFirst = document.querySelector("[data-topic]");
console.log(dataTopicFirst);
const titleH1 = document.querySelector("h1");
console.log(titleH1.nextElementSibling.textContent);
const titleH3 = document.querySelectorAll("h3");
console.log(titleH3);
console.log([...titleH3]);
//titleH3.forEach((h3) => (h3.style.color = "red"));

console.log([...titleH3].map((el) => el.textContent));
titleH3.forEach((h3) => h3.classList.add("activ"));
titleH3.forEach((h3) => console.log(h3.textContent));
//lisst.replaceChildren();
//dataTopicFirst.replaceChildren();
//Завдання 2:

// Створіть контейнер div (з класом number-container) в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

const randomNumber = () => Math.floor(Math.random() * 100) + 1;
const numberContainer = document.querySelector(".number-container");
for (let index = 0; index < 100; index++) {
  const numberBlok = document.createElement("div");
  console.log(numberContainer);

  numberBlok.className = "number";
  const numberr = (numberBlok.textContent = randomNumber());
  if (numberr % 2 === 0) {
    numberBlok.classList.add("even");
  } else {
    numberBlok.classList.add("odd");
  }
  numberContainer.appendChild(numberBlok);
}
localStorage.setItem("ui-them", "light");
//Додавання складних даних,наприклад, масив або об'єкт,
// необхідно перетворити їх у рядок методом JSON.stringify().
console.log(localStorage);
const settings = {
  theme: "dark",
  isAuthenticated: true,
  options: [1, 2, 3],
};

localStorage.setItem("settings", JSON.stringify(settings));
//Отримання даних

//Метод getItem(key) дозволяє зчитати зі сховища запис із ключем key і
// повертає його значення у JSON форматі.

const savedTheme = localStorage.getItem("ui-theme");
console.log(savedTheme); // "light"
//Якщо у сховищі відсутній запис з таким ключем, метод повертає null.
//якщо це масив або об'єкт, необхідно розпарсити значення методом JSON.parse(),
//щоб отримати валідні дані.

const savedSettings = localStorage.getItem("settings");
console.log(typeof savedSettings); // A string

const parsedSettings = JSON.parse(savedSettings);
console.log(parsedSettings); // Settings object
//Видалення даних

//Метод removeItem(key) видаляє зі сховища існуючий запис з ключем key.
// В результаті своєї роботи він не повертає значення.
localStorage.setItem("ui-theme", "dark");
console.log(localStorage.getItem("ui-theme")); // "dark"

//localStorage.removeItem("ui-theme");
console.log(localStorage.getItem("ui-theme")); // null
//Якщо ти хочеш повністю очистити сховище, потрібно викликати метод clear().

localStorage.setItem("ui-theme", "light");
localStorage.setItem("notif-level", "mute");

console.log(localStorage);
// Storage {notif-level: 'mute', ui-theme: 'light', length: 2}

//localStorage.clear();
console.log(localStorage); // Storage {length: 0}
//Сховище сесії
// Набір методів та їхній функціонал ідентичні методам роботи з локальним сховищем.

//Єдиний виняток — звертаємося до них через об'єкт sessionStorage, а не localStorage.
//Кейс: Форма з повідомленням

//Завдання 3:
//Завдання з конспекту.
//Під час сабміту форми будемо виводити в консоль
// значення текстового поля та очищати форму.
//const form = document.querySelector(".feedback-form");
//console.log(form);

/* form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  console.log(evt.target.elements.message.value);
  form.reset();
}); */
//Проблема

//Якщо користувач ввів повідомлення в текстове поле і перезавантажив
// сторінку, не надіславши форму, під час перезавантаження сторінки введене
// повідомлення пропадає.

//Рішення

//Зробимо так, щоб при перезавантаженні сторінки зберігалося введене повідомлення.

//Для цього використовуємо локальне сховище,
// щоб зберегти поточне значення текстового поля під час введення.

//Щоразу, коли змінюється значення поля, тобто відбувається подія "input", ми:

//використовуємо делегування подій;
//ловимо подію на формі;
//використовуємо властивість target для запису поточного значення поля
// в локальне сховище.
//Під час сабміту форми будемо очищати збережене значення методом removeItem.
//Останнім кроком необхідно додати код читання збереженого повідомлення з локального
// сховища і встановлення його початковим значенням для текстового поля під час завантаження сторінки.
const form = document.querySelector(".feedback-form");
const textarea = form.elements.message;
const localStorageKey = "goit-example-message";
// Відновлюємо текст із localStorage при завантаженні
textarea.value = localStorage.getItem(localStorageKey) ?? "";
// Слухаємо зміни і зберігаємо в localStorage
form.addEventListener("input", (evt) => {
  localStorage.setItem(localStorageKey, evt.target.value);
});
// При submit показуємо повідомлення і чистимо сховище
form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  console.log(evt.target.elements.message.value);
  //localStorage.removeItem(localStorageKey);
  form.reset();
});

// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

/* // 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`
//const formInput = document.querySelector(".contact-form");
//formInput.addEventListener("input");
const formInput = document.querySelector(".contact-form input"); //Отримаємо посилання на поле введення.
//Повісимо слухача на подію input.
formInput.addEventListener("input", (event) => {
  const value = event.target.value.trim();
  //Усередині будемо перевіряти довжину значення.
  if (value.length >= 6) {
    formInput.classList.add("success");
    formInput.classList.remove("error");
  } else {
    formInput.classList.add("error");
    formInput.classList.remove("success");
  }
});

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`
//const formInput = document.querySelector(".contact-form input");

formInput.addEventListener("focus", () => {
  if (formInput.value.trim() === "") {
    formInput.style.outline = "3px solid red";
  } else {
    formInput.style.outline = "3px solid green";
  }
});
// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`
formInput.addEventListener("blur", () => {
  if (formInput.value.trim() === "") {
    formInput.style.outline = "3px solid red"; // якщо пусте
  } else {
    formInput.style.outline = "3px solid lime"; // якщо є текст
  }
});
// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.

const form = document.querySelector(".js-contact-form");
const input = document.querySelector(".js-username-input");
const checkbox = document.querySelector(".js-policy-checkbox");
const userNameSpan = document.querySelector(".js-username-output");

// 🔹 при вводі тексту міняємо Anonymous на ім'я
input.addEventListener("input", () => {
  if (input.value.trim() === "") {
    userNameSpan.textContent = "Anonymous";
  } else {
    userNameSpan.textContent = input.value.trim();
  }
});

// 🔹 при сабміті
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const userName = input.value.trim();
  const isChecked = checkbox.checked;

  if (userName === "" || !isChecked) {
    alert("❌ Введіть ім'я та підтвердіть політику конфіденційності!");
    return;
  }

  // Якщо все ок
  const formData = {
    userName,
    accept: isChecked,
  };
  console.log("✅ Form Data:", formData);

  // Скидаємо значення
  form.reset();
  userNameSpan.textContent = "Anonymous";
});

//Завдання 4:

// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
// При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів,
// При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.
const box = document.querySelector(".box");
const decreaseBtn = document.querySelector(".js-decrease");
const increaseBtn = document.querySelector(".js-increase");

decreaseBtn.addEventListener("click", () => {
  const currentWidth = box.offsetWidth;
  const currentHeight = box.offsetHeight;

  // міняємо розмір на -20px, але не менше 20px
  box.style.width = Math.max(20, currentWidth - 20) + "px";
  box.style.height = Math.max(20, currentHeight - 20) + "px";
});

increaseBtn.addEventListener("click", () => {
  const currentWidth = box.offsetWidth;
  const currentHeight = box.offsetHeight;

  // міняємо розмір на +20px
  box.style.width = currentWidth + 20 + "px";
  box.style.height = currentHeight + 20 + "px";
});
 */
