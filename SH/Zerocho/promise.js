// ❗❗❗promise : 실행됬는데 결과 값을 나중에 쓸 수 있는 것❗❗❗

// 예제 1)
setTimeout(() => {
  console.log("a");
}, 1000); // 1초뒤에 강제로 콜백 실행(조건이 달성되면 바로 실행해버린다.)

// 예제 2)
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 1000);
}); // 실행은 됐는데 결과값을 나중에 쓸 수 있다.

// 다른 코드 작성(많은 줄)

promise.then(() => {
  console.log("a");
}); // 나중에 결과값 사용

// 예제 3)
const p1 = axios.get("서버주소1");
const p2 = axios.get("서버주소2");
const p3 = axios.get("서버주소3");
const p4 = axios.get("서버주소4");
const p5 = axios.get("서버주소5");
const p6 = axios.get("서버주소6"); // 실행만 시켜놓고

// 딴 짓

Promise.all([p1, p2, p3, p4, p5, p6])
  .then((results) => {})
  .catch((error) => {}); // 값을 나중에 사용할 수 있다.
// Promise.all 은 한 개라도 실패하면 error (사용❌)
// 그래서 Promise.allSettled 사용, 이것은 then에 성공 여부를 알려주고 실패한 것은 error를 보여준다.
// 만약 axios.post를 이용해서 송금 서비스를 진행한다 했을 때, 실패한 것만 다시 필터링하여 시도할 수 있게 해준다.

Promise.allSettled([p1, p2, p3, p4, p5, p6])
  .then((results) => {
    //실패한 것만 다시 필터링 해서 다시 시도
  })
  .catch((error) => {});

// catch()는 앞에 전체에 대한 catch이다.
// .finally()는 then이 되든, catch가 되든 실행된다.

// try catch문도 try{} catch(err){} finally{} 3단 구조이다.

// 만약 콜백으로 사용했을 때,
axios.get("서버주소1", function (데이터1) {
  axios.get("서버주소2", function (데이터2) {
    axios.get("서버주소3", function (데이터3) {});
  });
}); // 이렇게 길어지게 된다. 또한 값을 바로 받아써야 되므로 '콜백 지옥'이라고 한다. 콜백 지옥은 값을 바로 받고 코드가 지저분해진다.
