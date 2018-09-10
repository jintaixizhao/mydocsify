const { exec } = require('child_process');
const http = require('http');
const path = require("path");
const rootPath = path.resolve(__dirname,'../')
const port = 3001

http.createServer((req,res)=>{
	const reqUrl = decodeURI(req.url).split("=").pop();console.log("打开"+rootPath+"/"+reqUrl);
	exec(rootPath+"/"+reqUrl)
}).listen(port, function () {
	console.log('WebServer running at http://127.0.0.1:'+port+'/');
});