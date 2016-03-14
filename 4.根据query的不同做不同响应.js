var http=require("http");
var fs=require("fs");
var mime=require("mime")//第三方模块
var path=require("path");
var url=require("url");//这一节的主角
var server=http.createServer(function (req,res) {
    var urlObj=url.parse(req.url,true);//第二个参数为true时,query将被解析成对象
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
    if(urlObj.pathname=="/apple"){
        res.end("获得了"+urlObj.query.num+"个苹果");
    }
    res.end("传入了不正确的网址");
}).listen(8080);
