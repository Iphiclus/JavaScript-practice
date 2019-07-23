//Write a function min that takes two arguments and returns their minimum.

function min(param1, param2) {
    return Math.min(param1, param2)
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

function min(a, b) {
    if (a < b) return a;
    else return b;
  }
  
  console.log(min(22, 21));
  console.log(min(23, 24));
