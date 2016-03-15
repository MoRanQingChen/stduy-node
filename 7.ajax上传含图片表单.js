var http=require('http');
var fs=require('fs');
var url=require('url');
http.createServer(function(req,res){
    var urlObj=url.parse(req.url);
    if(urlObj.path=='/'){
        fs.readFile('html/regPic/index.html','utf8',function(err,data){
            res.end(data);
        })
    }else if(urlObj.path='/reg') {
        var str='';
        req.on('data',function(data){
            str+=data;
        })
        req.on('end',function(){
            console.log(str)
        })
    }else{

    }
}).listen(8080);