// const userInputString = prompt("Enter number:", 12);

// const userInputNumber = Number(userInputString);

// const checkUserInput =
//   userInputString === null || userInputString === "" || isNaN(userInputNumber);

// if (checkUserInput) {
//   console.log("error");
// } else {
//   console.log("thanks for", userInputString);
// }

// декларативный способ

// myFirstFunction();
// function myFirstFunction() {
//   console.log("myFirstFunction");
// }
// myFirstFunction();

// expression

// const mySecondFunction = function () {
//   console.log("my 2 func");
// };
// mySecondFunction();

// const getSumTwoNumber = function () {
//   const userInputNum1 = prompt("Enter first number");
//   const userInputNum2 = prompt("Enter second number");
//   const checkUserInput1 =
//     userInputNum1 === null ||
//     userInputNum1 === "" ||
//     isNaN(Number(userInputNum1));
//   const checkUserInput2 =
//     userInputNum2 === null ||
//     userInputNum2 === "" ||
//     isNaN(Number(userInputNum2));
//   if (checkUserInput1 || checkUserInput2) {
//     console.log("error");
//   } else {
//     console.log(Number(userInputNum1) + Number(userInputNum2));
//   }
// };
// getSumTwoNumber();

// const getSumTwoNumber = function(){
//   const summa = Number(userInputNum1) + Number(userInputNum2);
// }
/**
 *
 * @param {any} value1
 * @param {any} value2
 * @returns bigger value
 */
// const returnMaxOfTwo = function (value1, value2) {
//   if (typeof value1 === typeof value2) {
//     if (value1 > value2) {
//       return value1;
//     } else {
//       return value2;
//     }
//   }
//   return null;
// };

// console.log(returnMaxOfTwo(13, 19));

// const isNumberEven = function (value1, value2) {
//   if (typeof value1 === typeof value2) {
//     if (value1 === value2) {
//       return console.log("equal");
//     }
//     if (value1 > value2) {
//       return console.log("more first");
//     }
//     return console.log("more second");
//   }
//   return console.log(null);
// };
// isNumberEven("7", "6");

// const getPerimetrSquare = function (value=0) {
//   return value*4
// };
// console.log(getPerimetrSquare(4))
/**
 *
//  * @param {number} age
//  * @returns {boolean}
//  */
// const isAdult = function (age, AGE_ADULT = 18) {
//   return age >= AGE_ADULT;
// };
// console.log(isAdult(18));
///**
//*
//  * @param {number} value1
//  * @param {number} value2
//  * @returns boolean
//  */
// const isMultiple = function (value1, value2) {
//   return value1 % value2 === 0;
// };
// console.log(isMultiple(18, 3));
// const isBiggerMultiple = function (value, number = 20) {
//   return value > number && value % 7 === 0;
// };
// console.log(isBiggerMultiple(22));

// const isTriangeExist = function (side1, side2, side3) {
//   return (
//     side1 < side2 + side3 && side2 < side3 + side1 && side3 < side2 + side1
//   );
// };
// console.log(isTriangeExist(1, 1, 8));

// const getResultNumber = function (number1, number2) {
//   if (number1 % 2 === 0 && number2 % 2 === 0) {
//     return number1 + number2;
//   }
//   if (number1 % 2 === 1 && number2 % 2 === 1) {
//     return number1 * number2;
//   }
//   if (number1 % 2 === 1) {
//     return number1;
//   }
//   return number2;
// };
// console.log(getResultNumber(4, 5));
// const isTriangle = function (a, b, c) {
//   return a + b + c === 180 && (a === 90 || b === 90 || c === 90);
// };
// console.log(isTriangle(90, 70, 20));

// const userInputNumber = 12;//prompt("enter number", "85");
// const userNumber = Number(userInputNumber);
// if (userInputNumber === null || userInputNumber === "" || isNaN(userNumber)) {
//   console.log("error");
// } else {
//   if (userNumber % 7 === 0) {
//     console.log("multiple 7");
//   } else if (userNumber % 5 === 0) {
//     console.log("multiple 5");
//   } else if (userNumber % 3 === 0) {
//     console.log("multiple 3");
//   } else if (userNumber % 2 === 0) {
//     console.log("multiple 2");
//   } else {
//     console.log("multiple 1");
//   }
// }

// const userChoose = prompt("Enter number language:\n1-ua\n2-en\n3-fr\n4-pl");

// switch (userChoose) {
//   case "1":
//   case "ua":
//     console.log("hi ua");
//     break;
//   case "2":
//   case "en":
//     console.log("hi en");
//     break;
//   case "3":
//   case "fr":
//     console.log("hi fr");
//     break;
//   case "4":
//   case "pl":
//     console.log("hi pl");
//     break;

//   default:
//     console.log("chao");
//     break;
// }

// const userChooseNumber = Number(userChoose);
// if (userChooseNumber === 1) {
//   console.log("hi ua");
// } else if (userChooseNumber === 2) {
//   console.log("hi en");
// } else if (userChooseNumber === 3) {
//   console.log("hi fr");
// } else if (userChooseNumber === 4) {
//   console.log("hi pl");
// } else console.log("no language");

// const userInputNumber = prompt("Enter number");
// if (
//   userInputNumber === "1" ||
//   userInputNumber === "2" ||
//   userInputNumber === "12"
// ) {
//   console.log("winter");
// } else if (
//   userInputNumber === "3" ||
//   userInputNumber === "4" ||
//   userInputNumber === "5"
// ) {
//   console.log("spring");
// } else if (
//   userInputNumber === "6" ||
//   userInputNumber === "7" ||
//   userInputNumber === "8"
// ) {
//   console.log("summer");
// } else if (
//   userInputNumber === "9" ||
//   userInputNumber === "10" ||
//   userInputNumber === "11"
// ) {
//   console.log("fall");
// } else {
//   console.log("month not found");
// }
// switch (userInputNumber) {
//   case "1":
//   case "2":
//   case "12":
//     console.log("winter");
//     break;
//   case "3":
//   case "4":
//   case "5":
//     console.log("spring");
//     break;
//   case "6":
//   case "7":
//   case "8":
//     console.log("summer");
//     break;
//   case "9":
//   case "10":
//   case "11":
//     console.log("fall");
//     break;

//   default:
//     console.log("month not found");
//     break;
// }

// const userAge = prompt();

// if (userAge >= 0) {
//   console.log("baby");
// } else if (userAge >= 2) {
//   console.log("kinder");
// } else if (userAge >= 6) {
//   console.log("child");
// } else if (userAge >= 12) {
//   console.log("tinager");
// } else if (userAge >= 18) {
//   console.log("adult");
// } else if (userAge >= 65) {
//   console.log("old");
// } else if (userAge >= 100) {
//   console.log("super");
// } else {
//   console.log("error");
// }

// function isEven(number) {
//   return number % 2 === 0 ? "even" : "odd";
// }
// console.log(isEven(21));

// const isError = function () {
//   return prompt("anything") ? "thanks" : "error";
// };
// console.log(isError());

// console.log(calculate(3, 7, "*"));
// const summa = function (number1, number2) {
//   return number1 + number2;
// };
// const subtr = function (number1, number2) {
//   return number1 - number2;
// };
// const mult = function (number1, number2) {
//   return number1 * number2;
// };
// const div = function (number1, number2) {
//   return number1 / number2;
// };

// const calculate = function (number1 = 10, number2 = 5, operator = "+") {
//   let func = null;
//   switch (operator) {
//     case "+":
//       func = summa;
//       break;
//     case "-":
//       func = subtr;
//       break;
//     case "*":
//       func = mult;
//       break;
//     case "/":
//       func = div;
//       break;
//   }
//   if (typeof func === "function") {
//     return func(number1, number2);
//   }
//   return null;
// };
// const HOF = function (number1, number2, func) {
//   return func(number1, number2);
// };
// console.log(HOF(2, 5, mult));

// let count = 0;

// while (true) {
//   console.log(count++);
//   if (count > 3) {
//     break;
//   }
// }

// const MAX_SIZE = 10;
// let count = 0;
// while (true) {
//   if (count % 2 === 1) {
//     console.log(count);
//   }
//   count++;
//   if (count >= MAX_SIZE) {
//     break;
//   }
// }

// const PIN = "1111";
// const MAX_TRY = 3;
// let count = MAX_TRY;
// while (true) {
//   const userInput = prompt("enter pin");
//   count--;

//   if (userInput === PIN) {
//     console.log("thanks");
//     break;
//   }
//   if (count === 0) {
//     console.log("try later");
//     break;
//   }
//   console.log("try more, left:", count);
// }
// const MAX_TRY = 3;
// const SECRET_PIN = "1111";
// for (let i = 0; i < MAX_TRY; i++) {
//   const PIN = prompt("Enter PIN");
//   if (PIN === SECRET_PIN) {
//     console.log("THANKS");
//     break;
//   }
//   console.log("try =", i + 1);
// }

// const getFactorial = function (limit = 5) {
//   let factorial = 1n;
//   for (let i = 1; i <= limit; i++) {
//     factorial *= BigInt(i);
//   }
//   return factorial;
// };
// console.log(getFactorial(4));

// const getPower = function (base = 2, power = 5) {
//   let res = 1;
//   for (let i = 0; i < power; i++) {
//     res *= base;
//   }
//   return res;
// };
// console.log(getPower(2,2));

//literal

//const cat1 = {};

//constructor

//const cat2 = new Object();

//const cat3 = Object();

// const cat1 = {
//   name: "Muha",
//   isMale: false,
//   age: 2,
//   color: "grey",
//   breed: "yard",
//   say: function () {
//     return "mew";
//   },
//   run: function () {
//     return "i'm run";
//   },
//   sleep: function () {
//     return "i'm sleep";
//   },
//   jump: function () {
//     return "i'm jump";
//   },
// };

// function Cat(name, isMale, color, breed, age) {
//   this.name = name;
//   this.isMale = isMale;
//   this.say = function () {
//     return "mew";
//   };
//   this.run = function () {
//     return this.name + " " + "running";
//   };
// }

// const cat1 = new Cat("muha", false, "grey", "yard", 2);

// console.log(cat1.run());

// function User(fname, sname, age) {
//   this.fname = fname;
//   this.sname = sname;
//   this.age = age;
//   this.fullname = function () {
//     return this.fname + " " + this.sname;
//   };
// }

// const user1 = new User("Alex", "Khal", 30);
// const user2 = new User("Olrg", "Ivanov", 25);
// const user3 = new User("Ivan", "Nor", 22);

// user1.fname = 'Alexey';
// console.log(user1.fullname())

// function County(name, population, area){
// this.name = name;
// this.population = population;
// this.area = area;
// this.getDetsity = function(){
//   return this.population / this.area;
// }
// }

// const country1 = new County('Monaco', 39244, 202);

// country1.area = 39244;
// console.log(country1.getDetsity())

// function Kettle(maxVolume = 1000) {
//   this.maxVolume = maxVolume;
//   this.volume = 0;
//   this.addWater = function (value) {
//     if (this.volume + value <= this.maxVolume) {
//       this.volume += value;
//     } else {
//       this.volume = this.maxVolume;
//     }
//     return this.volume;
//   };
//   this.drainWater = function (value) {
//     if (this.volume - value >= 0) {
//       this.volume -= value;
//     } else {
//       console.log("resr water:", value - this.volume);
//       this.volume = 0;
//     }
//     return this.volume;
//   };
// }

// const pot = new Kettle();

// const number1 = 2;
// const number2 = 5;
// const sign = "+";
// const sum = function (n1, n2) {
//   return n1 + n2;
// };
// const strResult = `${number1} ${sign} ${number2} = ${sum(number1, number2)}`;
// console.log(strResult);

// const PROTOCOL = "http://";
// const LOCAL_IP = "127.0.0.1";
// const LOCAL_SERVER_PORT = "5500";

// function getValidUrl(path) {
//   return `${PROTOCOL}${LOCAL_IP}:${LOCAL_SERVER_PORT}/${path}`;
// }
// console.log(getValidUrl("index.html"));
// const user = {
//   name: 'Tom',
//   age: 12,
//   method: function(n=0){
//     return `over ${n} years ${this.name} will be ${this.age + n} years old`
//   },
// }
// console.log(user.method(8));

// const object = {
//   prop1: "prop value",
//   prop2: 12,
//   "prop 3": true,
//   4: "qwerty",
// };

// function createMultipleTable() {
//   const table = {};
//   for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//       table[`${i}*${j}`] = i * j;
//     }
//   }

//   return table;
// }

// const multTable = createMultipleTable();

// function getValueMult(table, str) {
//   return table[str];
// }

// console.log(getValueMult(multTable, '4*6'));

// function createFamily() {
//   const family = {};
//   const countMemberFamily = prompt("how much");
//   for (let i = 0; i < countMemberFamily; i++) {
//     const name = prompt("enter name");
//     const role = prompt("enter who is");
//     family[name] = role;
//   }

//   return family;
// }
// console.log(createFamily());

// const family = {
//   "Elon Musk": "brother",
//   "Elen Buf": "mother",
// };

// //const dother = 'Olga Andreevna';

// const nameUser = "Olgs Andreeva"
// family[nameUser] = "dother";

// console.log(family);

// const ShowRange = function (max = 30, min = 21, num = 7) {
//   for (let i = max; i >= min; i--) {
//     if (i % num === 0) {
//       console.log(i);
//     }
//   }
// };

// console.log(ShowRange());

// const obj1 = {
//   prop: 123,
// };

// const obj2 = new Object({
//   prop: 1,
// });

// const obj3 = Object({
//   prop: 1,
// });

// function MyObject() {
//   if (!new.target) {
//     return new MyObject();
//   }
// }

// const myObj = MyObject();
// console.log(myObj);

// const book1 = "It";
// const book2 = "M. Mersedes";
// const book3 = "book 3";

// const books = {
//   1: "It",
//   2: "M. Mersedes",
//   3: "Institute",
// };

// const books = ["It", "M. Mersedes", "Institute"];

// function f(){
//   return 5;
// }

// console.dir(f);
// object with data
// function MyArray() {
//   this.length = 0;
//   for(let i = 0; i < arguments.length; i++){
//     this.push(arguments[i]);
//   }
// }
// object with logic
// function MyArrayPrototype() {
//   this.push = function (element) {
//     this[this.length] = element;
//     return ++this.length;
//   };
//   this.pop = function () {
//     if (this.length === 0) {
//       return;
//     }

//     --this.length;
//     const lastElement = this[this.length];
//     delete this[this.length];
//     return lastElement;
//   };
// }

// MyArray.prototype = new MyArrayPrototype();

// const myArr = new MyArray();

// myArr.push(11);
// console.log(myArr);

// --------------------------------------------------------------------------------------------------
// const arr = [];
// const arr2 = [];
// arr.push(55);
// console.log(arr);
// function toString() {
//   return `${this.name} ${this.sname}`;
// }

// function Animal() {
//   this.go = function () {
//     return (this.name ? this.name : "I am") + " go";
//   };
//   this.eat = function () {
//     return this.name + " eat";
//   };
// }

// function Dog(name) {
//   this.name = name;
// }

// Dog.prototype = new Animal();

// const dog1 = new Dog("Alpha");

// function Man() {
//   this.dansing = function () {
//     return this.name + " dancing";
//   };
// }

// Man.prototype = new Animal();

// const man = new Man();

// function User(name, sname) {
//   this.name = name;
//   this.sname = sname;
// }
// User.prototype = new Man();

// const user1 = new User('elon', 'mask');

// function Rabbit() {
//   (this.eat = function () {
//     return (this.name ? this.name : "I am") + " eat";
//   }),
//     (this.jump = function () {
//       return (this.name ? this.name : "I am") + " jump";
//     });
// }

// function RabbitPet() {

//   this.petMe = function () {
//     return "Pet me" + name;
//   };
// }

// RabbitPet.prototype = new Rabbit();

// function RabbitMagic(name) {
//   this.name = name;
//   this.say = function (word) {
//     return this.name + " Says " + word;
//   };
// }

// RabbitMagic.prototype = new RabbitPet();

// const magic = new RabbitMagic('s wad');

// function Ladder() {
//   this.step = 0;
// }

// function LadderStep() {
//   this.up = function () {
//     this.step++;
//     return this;
//   };
//   this.down = function () {
//     this.step--;
//     return this;
//   };
//   this.showStep = function () {
//     return this.step;
//   };
// }

// Ladder.prototype = new LadderStep();

// const myLadder1 = new Ladder();

// const myLadder2 = new Ladder();
// function getRandomArbitrary(min, max) {
//   return Math.random() * (max - min) + min;
// }

// const arr1 = [];
// const amount = 2;
// const min = 0;
// const max = 10;

// for (let i = 0; i < amount; i++) {
//   arr1.push(Math.round(getRandomArbitrary(min, max)));
// }

// const evenArr = arr1.filter(function (element) {
//   return element % 2 === 0;
// });
// const oddArr = arr1.filter(function (element) {
//   return element % 2 === 1 || element % 2 === -1;
// });

// const summa = arr1.reduce(function (accumulator, currentValue) {
//   return accumulator + currentValue;
// }, 0);

// console.log(summa);

// const arr = [10, 20, 30, 40, 50, 60];
// // for (let index = 0; index < arr.length; index++) {
// //   console.log(arr[index]);
// // }

// arr.forEach(function (num) {
//   if (num % 4 === 0) {
//     console.log(num);
//   }
// });
/**
 *
 * @param {string} fname
 * @param {string} lname
 * @param {number} age
 * @param {boolean} isMale
 * @param {string} email
 * @param {boolean} isSubsrabed
 */
// function User(fname, lname, age, isMale, email, isSubsrabed = false) {
//   this.fname = fname;
//   this.lname = lname;
//   this.age = age;
//   this.isMale = isMale;
//   this.email = email;
//   this.isSubsrabed = isSubsrabed;
// }

// function UserPrototype() {
//   this.fullName = function () {
//     return `${this.fname} ${this.lname}`;
//   };
// }

// User.prototype = new UserPrototype();

// function createUsers(amount = 1) {
//   const arrUsers = [];
//   for (let i = 0; i < amount; i++) {
//     const user = new User(
//       `Elon${i}`,
//       `Musk${i}`,
//       Math.ceil(Math.random() * (60 - 20) + 20),
//       Math.random() > 0.5,
//       `emailEM${i}@gmail.com`
//     );
//     arrUsers.push(user);
//   }
//   return arrUsers;
// }

// const users = createUsers(20);
// // console.table(users);
// const arrFullName = users.map(function (user) {
//   return user.fullName();
// });
// // console.table(arrFullName);

// const arrMore40 = users.filter(function (user) {
//   return user.age > 40;
// });

// // console.table(arrMore40);

// users.forEach(function (user) {
//   user.isSubsrabed = Math.random() > 0.5;
// });

// console.table(users);

// const newArr = users
//   .filter(function (user) {
//     return user.age < 40;
//   })
//   .filter(function (user) {
//     return user.isMale;
//   })
//   .filter(function (user) {
//     return user.isSubsrabed === false;
//   })
//   .map(function (user) {
//     return user.fullName();
//   });
// console.table(newArr);

// const newArr2 = users
//   .filter(function (user) {
//     return user.age < 40;
//   })
//   .filter(function (user) {
//     return user.isMale;
//   })
//   .filter(function (user) {
//     return user.isSubsrabed === false;
//   });

// const allAge = newArr2.reduce(function (result, user) {
//   return result + user.age;
// }, 0);

// console.log(allAge);

"use strict";

// const site = {
//   title: "green site",
//   headers: ["header1", "header2", "header3"],
//   showHeaders() {
//     // console.log(this);
//     this.headers.forEach((header) => {
//       console.log(`${header} | ${this.title}`);
//     });
//   },
// };
// site.showHeaders();

// const sum = (a, b) => a + b;
// console.log(sum(5, 7));

// const square = (n) => n * n;
// console.log(square(12));

// const logWord = (word) => console.log(word);

// logWord('das');

// const array1 = [1, 2, 3, 4];

// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (previousValue, currentValue) => previousValue + currentValue,
//   initialValue
// );
// console.log(sumWithInitial);

// const sum = (...numbers) =>
//   numbers.reduce((previousValue, currentValue) => previousValue + currentValue);

// console.log(sum(3, 0, 2, 0));

// const arrNumbers = [1, 2, 5, 6, 4, 8, 9];

// console.log(sum(...arrNumbers));

// const arr1 = ['a', 'o', 'e'];
// const arr2 = ['q', 'w', 'x'];

// const arr3 = [...arr1, ...arr2];

// const power = (num, pow) => {
//   if (pow === 0) {
//     return 1;
//   }
//   return num * power(num, pow - 1);
// };
// console.log(power(3, 3));

// const bigger = (a, b) => (a > b ? a : b);

// console.log(bigger(9, 7));

const str = "to Be or NoT To be e e eaaaaaaaaaaa";

// const regex = /[a,e,i,o,u,y]/g;
// const found = str.match(regex);

const vowels = ["a", "e", "i", "o", "u", "y"];



const countVowels = (str, arr = ["a", "e", "i", "o", "u", "y"]) => {
  return str
    .toLowerCase()
    .split("")
    .filter((letter) => arr.includes(letter))
    .length;
};

console.log(countVowels(str))

// const words = str.split(" ");

// const arrayWords = words.map(function (word) {
//   return word.toLowerCase();
// });

// const arrayWordsUpper = arrayWords.map(function (word) {
//   return word[0].toUpperCase() + word.slice(1);
// });
// const jadenCase = arrayWordsUpper.join(" ");
