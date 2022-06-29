// function sum(){
//   // console.log(arguments);
//   let summa = 0;
//   for (let index = 0; index < arguments.length; index++) {

//     summa += arguments[index];
//   }
//   return summa;
// }
// sum(1,2,3,4,5);

// function Accumulator() {
//   this.max = 100;
//   this.current = 0;
// }

// function AccumulatorPrototype() {
//   this.charge = function (value=10) {
//     if (value + this.current <= this.max) {
//       this.current += value;
//       return this.current;
//     }
//   };
// }

// Accumulator.prototype = new AccumulatorPrototype();

// const myAcc = new Accumulator();

// console.log(myAcc.charge(99));
