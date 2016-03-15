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
        var str='';
        req.on('data',function(data){
            str+=data;
        });
        req.on('end', function () {
            str&&users.push(JSON.parse(str));
            res.end(JSON.stringify(users));
        })
    }else {
        res.end("404")
    }
}).listen(8080);