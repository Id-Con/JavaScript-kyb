const express = require('express');
const path = require('path');

const app = express();

app.use((req,res,next)=>{
    console.log('모든 요청에 다 실행됩니다.');
    next();
})


app.get('/',(req,res,next)=>{
    console.log('GET / 요청에만 실행됩니다.');
    next();
},(req,res)=>{
    throw new Error('에러는 에러 처리 미들웨어로 갑니다.')
})

app.use((err,req,res,next)=> {
    console.log(err);
    res.status(500).send(err.message);
})

app.listen(3000,()=>console.log(`app is running on http://localhost:3000/`))