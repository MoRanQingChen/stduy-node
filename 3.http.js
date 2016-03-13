////导入http模块
//var http=require("http");
//var fs=require("fs");
//var server=http.createServer();
//server.on('request',function (req,resp) {
//    if(req.url === '/data.txt'){
//        console.log("开始查ajax");
//        fs.readFile('./paixu/data.txt', function(err, data){
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
//        fs.readFile("./paixu/index.html",'utf-8', function (err,data) {
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
