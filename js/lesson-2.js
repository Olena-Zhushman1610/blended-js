//Напиши стрілочну функцію getUserNames(users), яка прийматиме один параметр users —
// масив обєктів користувачів. Функція має повертати масив імен усіх користувачів (властивість name) із масиву users.

//Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи.
// У консоль будуть виведені результати її викликів.
const getUserNames = (users) => {
  const names = users.map((user) => user.name);
  return names;
};

console.log(
  getUserNames([
    {
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      balance: 2811,
    },
    {
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      balance: 3821,
    },
    {
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      balance: 3793,
    },
    {
      name: "Elma Head",
      email: "elmahead@omatom.com",
      balance: 2278,
    },
    {
      name: "Carey Barr",
      email: "careybarr@nurali.com",
      balance: 3951,
    },
    {
      name: "Blackburn Dotson",
      email: "blackburndotson@furnigeer.com",
      balance: 1498,
    },
    {
      name: "Sheree Anthony",
      email: "shereeanthony@kog.com",
      balance: 2764,
    },
  ])
); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]

//Завдання 1:

// Створіть масив styles з елементами 'jazz' і 'blues'

const styles = ["jazz", "blues"];
styles.push("rock - n - roll");
const index = styles.indexOf("blues");
if (index !== -1) {
  styles[index] = "classic";
}
function logItems(array) {
  for (let i = 0; i < array.length; i++) {
    //const element = array[i];
    console.log(`${i + 1} - ${array[i]}`);
  }
}
logItems(styles);
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).
//Завдання 2:

// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві - виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє - виводить повідомлення: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha"];

const logins = ["Peter", "John", "Igor", "Sasha"];
function checkLogin(array) {
  const user = prompt("Введіть ім'я");
  let found = false;
  for (let i = 0; i < array.length; i++) {
    if (user === array[i]) {
      alert(`Welcome, ${user}!`);
      found = true;
      break;
    }
  }
  if (!found) {
    alert("User not found");
  }
}

checkLogin(logins);
//Завдання 3:

// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.
function caclculateAverage(...params) {
  let total = 0;
  let count = 0;

  for (const element of params) {
    if (typeof element === "number") {
      total += element;
      count++;
    }
  }
  return count === 0 ? 0 : total / count;
}
console.log(caclculateAverage(2, 5, 1, 3, 5, "gfgfg", 2));
//Завдання 4:

// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].
const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

function sumAdjacentNumbers(arr) {
  const result = [];
  for (let i = 0; i < arr.length - 1; i++) {
    result.push(arr[i] + arr[i + 1]);
  }

  return result;
}
console.log(sumAdjacentNumbers(someArr));

//Завдання 5:

// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

function findSmallestNumber(numbers) {
  if (!Array.isArray(numbers)) {
    return "Sory, it is notan array";
  }
  if (numbers.length === 0) {
    return "Array is empty";
  }
  let min = numbers[0];
  for (const number of numbers) {
    if (min > number) {
      min = number;
    }
  }
  return min;
}
console.log(findSmallestNumber([22, 11, 34, 5, 12, 13, 14, 15]));
console.log(findSmallestNumber(numbers));

//Завдання 6:

// Напишіть функцію findLongestWord(string), яка
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:
function findLongestWord(string) {
  const arrWord = string.split(" ");
  let longest = arrWord[0];
  for (const element of arrWord) {
    if (element.length > longest.length) {
      longest = element;
    }
  }
  return longest;
}
console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'

//Завдання 7:

// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуючи Object.keys() та for...of

const user = {
  name: "John",
  age: 20,
  hobby: "tenis",
  premium: true,
};
user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;
const keys = Object.keys(user);
for (const key of keys) {
  console.log(`${key}:${user[key]}`);
}

//console.log(user);

//Завдання 8:

// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

const salaries = {
  Mango: 100,
  Poly: 160,
  Ajax: 1470,
};
let sum = Object.values(salaries).reduce((total, salary) => total + salary, 0);
console.log(sum);
//авдання 9:

// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'
const calculator = {
  a: undefined,
  b: undefined,
  read(a, b) {
    this.a = a;
    this.b = b;
  },
  sum() {
    if (!this.exist()) {
      return "No such propeties";
    }
    return this.a + this.b;
  },
  mult() {
    if (!this.exist()) {
      return " No such propertis";
    }
    return this.a * this.b;
  },
  exist() {
    return this.a !== undefined && this.b !== undefined;
  },
};
calculator.read(2, 3);

console.log(calculator.sum());
console.log(calculator.mult());
calculator.read();
console.log(calculator.sum());
//Завдання 10:

// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою
// назвою фрукта, це також треба урахувати.

function calcTotalPrice(fruits, fruitName) {
  let total = 0;

  for (const fruit of fruits) {
    if (fruit.name === fruitName) {
      total += fruit.price * fruit.quantity;
    }
  }

  return total;
}
//сучасна стрілочна версія з використанням .filter() і .reduce():
const calcTotalPrice = (fruits, fruitName) =>
  fruits
    .filter((fruit) => fruit.name === fruitName)
    .reduce((total, fruit) => total + fruit.price * fruit.quantity, 0);
//Ось однорядковий варіант без .filter() — одразу рахуємо суму:
const calcTotalPrice = (fruits, fruitName) =>
  fruits.reduce(
    (total, fruit) =>
      fruit.name === fruitName ? total + fruit.price * fruit.quantity : total,
    0
  );
const fruits = [
  { name: "Яблуко", price: 45, quantity: 7 },
  { name: "Апельсин", price: 60, quantity: 4 },
  { name: "Банан", price: 125, quantity: 8 },
  { name: "Груша", price: 350, quantity: 2 },
  { name: "Виноград", price: 440, quantity: 3 },
  { name: "Банан", price: 125, quantity: 3 },
];
console.log(calcTotalPrice(fruits, "Яблуко"));
console.log(calcTotalPrice(fruits, "Банан"));
