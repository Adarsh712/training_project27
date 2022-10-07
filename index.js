//Function #1: Array Slice
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const modifiedFood = fruits.slice(1, 3);
console.log(modifiedFood);

//Function #2: Array Splice

fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);

//Function #3: Filter

const nums = [2, 43, 567, 99, 65, 33, 457, 789, 90];
var even = nums.filter((value) => value % 2 === 0);
console.log(even);

//Function #4: Reject

function nonPrime(arr) {
  var ans = [];
  for (i of arr) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        ans.push(i);
        break;
      }
    }
  }
  return ans;
}

//Function #5: Map
const myArray = [11, 34, 20, 5, 53, 16];
var squaredArray = myArray.map((val) => val * val);
console.log(squaredArray);

//Function #6: Reduce
var multiplyArray = myArray.reduce((a, value) => a * value);
console.log(multiplyArray);


// const names = [
//   { firstName: "Virat", lastName: "Kohli" },
//   { firstName: "MS", lastName: "Dhoni" },
//   { firstName: "Rohit", lastName: "Sharma" },
// ];

// var surname = names.map((value) => value.lastName);

// var marks = [23, 45, 75, 32, 99, 1];
// var sum = marks.reduce((ans, value) => ans + value);

// function circumference(r) {
//   return 2 * Math.PI * r;
// }

// function calculate(value, logic) {
//   return logic(r);
// }

// console.log(calculate(7, circumference));
