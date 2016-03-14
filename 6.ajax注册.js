var http=require("http");
var fs=require("fs");
var url=require("url");
var users=[];
http.createServer(function(req,res){
    var urlObj=url.parse(req.url);
    if(urlObj.path=='/'){
        fs.readFile('html/reg/index.html','utf8', function (err,data) {
            res.end(data)
        })
    }else if(urlObj.path=='/reg'){
        //每当客户端发来请求的时候都会触发req的data事件
        var str='';
        req.on('data',function(data){//这里的data就是接收到的数据段
            str+=data;
        });
        //接受完的时候会触发end时间
        req.on('end', function () {
            str&&users.push(JSON.parse(str));
            res.end(JSON.stringify(users));
        })
    }else {
        res.end("404")
    }
}).listen(8080);