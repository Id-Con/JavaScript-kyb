# Jqeury

| Ajax통신의 기법 중 하나로 옛날 춘추전국시대 때 크로스 브라우징 문제를 해결하기 위해 등장

(요즘에는 virtual DOM의 등장으로 쓰지 않는 추세지만, 국내 다수 기업들은 아직도 JQuery로 유지보수를 함)

## 형식

| 가장 최근 버전의 .ajax()의 done-fail-always는 Promise의 try-catch-finally문법과 비슷하다

```
$.ajax({
    url : "url",
    type : "POST",
    data : { key : value },
    contentType : "application/json; charset=utf-8", // 서버로 보내는 데이터 타입
    dataType : "json", // 서버에서 어떤 타입을 받을 건지를 의미

    //아래 3개 애들은 jquery 3.0버전 부터 삭제됨
    //.success : function(){},
    //.error : function(){},
    //.complete : function(){}
})
.done(function(){})
.fail(function(){})
.always(function(){})
```
