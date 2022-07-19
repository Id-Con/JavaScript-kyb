const {odd : a, even : b} = require('./var'); //var.js 에 있는 변수odd는 변수a에 변수even은 변수b에 저장

//{odd : odd, even : even} === {odd, even}
function check(num){
    if (num%2){
        return a;
    }
    return b;
}

module.exports = check;