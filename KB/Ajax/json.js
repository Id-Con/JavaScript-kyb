let obj = {
    name : '킹범',
    grade : '1',
    job : 'student'
}
console.log(obj)
console.log(JSON.stringify(obj));
console.log(JSON.parse(JSON.stringify(obj)));