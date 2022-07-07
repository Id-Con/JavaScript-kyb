let obj = new Map();
obj.set(1,11);
obj.set(2,22);
console.log(obj);
console.log(obj.size);
console.log(obj.has(11));
console.log(...obj);
for(let [key,value] of obj){
    console.log(key, value);
}