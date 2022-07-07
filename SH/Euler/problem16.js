const multi = 1000;

const num = BigInt(2 ** multi);

const num_string = num.toLocaleString("fullwide", { useGrouping: false });

console.log(num);
console.log(num_string);

let sum = 0;
console.log(num_string[0]);
for (let index = 0; index < num_string.length; index++) {
  sum += parseInt(num_string[index]);
}

console.log(sum);

// let sum = [];

// // console.log(num.toString().length);

// for (let i = 0; i < num.toString().length; i++) {
//   // sum.push(Number(num.toString()[i]));
//   console.log(Number(num.toString()[i]));
// }

// const result = sum.reduce((pre, cur) => pre + cur, 0);
// console.log(result);
