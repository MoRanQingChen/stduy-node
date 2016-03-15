//导入http模块
var http=require("http");
var fs=require("fs");
var mime=require("mime");
//var server=http.createServer();
//server.on('request',function (req,resp) {
//    if(req.url === '/data.txt'){
//        console.log("开始查ajax");
//        fs.readFile('html/paixu/data.txt', function(err, data){
//            if(err){
//                console.log(err);
//            }else {
//                console.log(data);
//                resp.end(data)
//            }
//
//        });
//    }else
//    if(req.url === '/'){
//        fs.readFile("html/paixu/index.html",'utf-8', function (err,data) {
//            if(err){
//                console.log(err)
//            }else {
//                resp.end(data)
//            }
//        });
//    }
//});
//server.listen(8090,'127.0.0.1');
//----------------------------------------------------------------
//静态文件  和 ajax获得data
//var server=http.createServer(function (req,res) {
//    var url=req.url;
//    if(url=='/'){
//        console.log("主页")
//        fs.readFile('html/paixu/index.html','utf8',function(err,data){
//            res.write(data);
//            res.end();
//        })
//    }else if(url=='/data.txt'){
//        console.log("获取内容")
//        fs.readFile('html/paixu/data.txt','utf8', function (err,data) {
//            res.write(data);
//            res.end();
//        })
//    }else if(url=='/mystyle.css'){
//        res.setHeader('Content-Type','text/css;charset=utf-8');
//        console.log("获取CSS");
//        fs.readFile('html/paixu/mystyle.css','utf8',function(err,data){
//            res.write(data);
//            res.end();
//        })
//    }else if(url=='/myjs.js'){
//        res.setHeader('Content-Type','text/javascript;charset=utf-8');
//        console.log("获取CSS");
//        fs.readFile('html/paixu/myjs.js','utf8',function(err,data){
//            res.write(data);
//            res.end();
//        })
//    }
//}).listen(8080);
//---------------------------------------------------------------
//优化上面的代码(不考虑query)
var server=http.createServer(function (req,res) {
    var url=req.url=='/'?"/index.html":req.url;
    fs.readFile("html/paixu"+url,'utf8', function (err,data) {
        if(!err){
            res.setHeader('Content-Type',mime.lookup(url)+';charset=utf-8');
            res.write(data);
            res.end();
        }else{
            res.setHeader('Content-Type','text/html;charset=utf-8');
            res.write("<h1>您要请求的页面被恐龙吃了!<h1>");
            res.end();
        }
    });
}).listen(8080);