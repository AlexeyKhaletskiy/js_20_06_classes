//object with data
function MyArray() {
  this.length = 0;
  for (let i = 0; i < arguments.length; i++) {
    this.push(arguments[i]);
  }
}
//object with logic
function MyArrayPrototype() {
  this.push = function (element) {
    this[this.length] = element;
    return ++this.length;
  };
  this.pop = function () {
    if (this.length === 0) {
      return;
    }

    --this.length;
    const lastElement = this[this.length];
    delete this[this.length];
    return lastElement;
  };
  this.forEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  };
  this.every = function (callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this) === false) {
        return false;
      }
    }
    return true;
  };

  this.some = function (callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        return true;
      }
    }
    return false;
  };
  this.filter = function (callback) {
    const newMyArr = new MyArray();
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        newMyArr.push(this[i]);
      }
    }
    return newMyArr;
  };
}
MyArray.prototype = new MyArrayPrototype();
function isOdd(elem) {
  return elem % 2 === 1;
}

const myArr = new MyArray(1, 4, 3, 5, 9, 3, 5, 97, 56);
const myArr2 = myArr.filter(isOdd);
console.log(myArr2);

const check = myArr.some(function (elem) {
  return elem % 2 === 1;
});
// console.log(check);

// myArr.forEach(function (elem) {
//   console.log(elem * 2);
// });
// console.log(myArr);

// const arr = [];
// const arr2 = [];
// arr.push(55);
// console.log(arr);
