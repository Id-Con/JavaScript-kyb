'use strict'

let Circle = function(r){ //생성자함수는 파스칼케이스, 생성자함수 안에서는 this쓰면 안됨
    this.r = r; 
}

console.log(Circle.prototype);
console.log(Circle);

Circle.prototype.getArea = function(){
    return Math.PI * this.r**2;
}

console.log(Circle); //Circle생성자 함수는 영향없음, 하지만 프로토타입에는 getArea메소드가 추가됨

const circle1 = new Circle(2); //반지름이 2인 circle1
const circle2 = new Circle(3); //반지름이 2인 circle2


console.log(circle1.getArea());
console.log(circle2.getArea()); 