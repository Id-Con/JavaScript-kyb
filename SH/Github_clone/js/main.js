// const saTriggerMargin = 300;
// const saElementList = document.querySelectorAll(".sa");

// const saFunc = function () {
//   for (const element of saElementList) {
//     if (!element.classList.contains("show")) {
//       if (
//         window.innerHeight >
//         element.getBoundingClientRect().top + saTriggerMargin
//       ) {
//         element.classList.add("show");
//       }
//     }
//     if (element.classList.contains("show")) {
//       if (window.scrollY > element.getBoundingClientRect().bottom)
//         element.classList.remove("show");
//     }
//   }
// };

// window.addEventListener("load", saFunc);
// window.addEventListener("scroll", saFunc);

AOS.init({
  duration: 1000,
}); // 자바스크립트로 init()을 해야 동작한다.
