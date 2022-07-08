// 한 번 비동기는 영원한 비동기
// 비동기는 동시의 문제가 아닌, 순서의 문제이다.
// promise, process.nextTick => micro, 나머지는 매크로

// 예제 1)(비동기 호출 스택)
setTimeout(() => {
  console.log("a");
}, 0);

setTimeout(() => {
  console.log("b");
}, 1000);

setTimeout(() => {
  console.log("c");
}, 2000);

// 예제 2)(then.catch.finally)
let a = 2;
const p = new Promise((resolve, reject) => {
  //동기
  //이 함수는 Promise 선언될 때, 호출 된다.
  console.log("제일 먼저");
  setTimeout(() => {
    a = 5;
    console.log(a);
    resolve(a);
  }, 0);
});
//딴 짓
//딴 짓
//딴 짓
//딴 짓
//딴 짓
//딴 짓
//딴 짓
//딴 짓
p.then((result) => {
  console.log("result", result);
})
  .then((result) => {
    // 에러 났다 -> 나머지 then을 건너뛰고 catch로 간다.
    console.log("result", result);
    return 1;
  })
  .then((result) => {
    console.log(result); // 1
    return Promise.resolve(1);
  })
  .then((result) => {
    console.log(result); //Promise가 resolve된 값을 return 한다.
  })
  .then(() => {})
  .catch(() => {}) // catch()는 여러 개 사용해도 된다.
  .finally(() => {}); //p.then의 호출 조건 : resolve()함수가 호출되면이 조건

// 예제 3) (async 예)
function delayP(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

async function a() {
  try {
    await delayP(1000);
  } catch (error) {
    console.log(error);
  }
  try {
    await delayP(1000);
    await delayP(1000);
    await delayP(1000);
  } catch (error) {
    console.log(error);
  }
}

// 예제 4)(async/await => promise 변경)
async function b() {
  const a = await 1; //await -> then
  console.log("a", a);
  console.log("hmm");
  await null;
  const b = await Promise.resolve(1);
  console.log("b", b);
  return b;
}

Promise.resolve(1)
  .then((a) => {
    console.log("a", a);
    console.log("hmm");
    return null;
  })
  .then(() => {
    return Promise.resolve(1);
  })
  .then((b) => {
    console.log("b", b);
    return b;
  });
