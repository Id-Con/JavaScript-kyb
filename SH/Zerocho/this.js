// ❗❗❗❗❗this는 호출될 때, 결정된다❗❗❗❗❗
// 변경되는 경우(this를 변경시키는 경우) : 앞에 객체가 붙는경우,  new 하는 경우 , (bind, call, apply), 화살표 함수
// 호출스택을 그릴 때, this정의 가능

console.log(this); // js : window // node : global

const obj = {
  name: "sangheon",
  sayName() {
    console.log(this.name);
    function inner() {
      console.log(this.name);
    }
    inner(); // window
  }, // 만약, 화살표 함수라면 부모의 this를 가진다.
};

obj.sayName(); // sangheon

const sayN = obj.sayName;
sayN(); // window

// ❗this를 분석할 수 없는 케이스❗

const header = document.querySelector(".header");
header.addEventListener("click", function () {
  console.log(this); // header
});
// addEventListener가 어떻게 만들어졌는지 알 수 없다. this는 함수가 호출될 때 결정되는데 호출되는건 addEventListener만 있다.

// bind는 this값을 바꿔서 새로운 함수를 만들어준다.(호출은 하지 않음), apply와 call는 this 값을 바꿔서 새로운 함수를 만들고 호출한다.
// 즉, function a() {} 이 있다면
// a.apply(window) === a.bind(window)() === a.call(window)
