const multi = 100;

const num = 2 ** multi;
let sum = [];

// console.log(num.toString().length);

for (let i = 0; i < num.toString().length; i++) {
  // sum.push(Number(num.toString()[i]));
  console.log(Number(num.toString()[i]));
}

const result = sum.reduce((pre, cur) => pre + cur, 0);
console.log(result);
