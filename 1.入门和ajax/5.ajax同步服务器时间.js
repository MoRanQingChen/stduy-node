var http=require("http");
var fs=require("fs");
var server=http.createServer(function (req,res) {
    var url=req.url=='/'?"/index.html":req.url;
    if(url=='/index.html'){
        fs.readFile('html/clock/index.html','utf8',function(err,data){
                res.end(data)
        })
    }else if(url=='/clock'){
        res.end(new Date().toLocaleTimeString())
    }else{
        res.end("404")
    }
}).listen(8080);