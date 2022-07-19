const http = require('http');
const fs = require('fs').promises;

const server = http.createServer(async (req,res)=>{
    res.writeHead(200, {'Content_Type' : 'text/html; charset=utf-8 '});
    res.end(await fs.readFile(__dirname+'/public/index.html'));
})

server.listen(8080,()=>{
    console.log(`server is running on http://localhost:8080/`)
})