var http=require('http');
var fs=require('fs');
var url=require('url');
var formidable=require('formidable')//用于解析含文件表单,本节主角
var util=require('util');
http.createServer(function(req,res){
    var urlObj=url.parse(req.url);
    if(urlObj.path=='/'){
        fs.readFile('html/regPic/index.html','utf8',function(err,data){
            res.end(data);
        })
    }else if(urlObj.path='/reg') {
        //-------------------------------------------------------------
      //先阅读formidable中间件的readMe,以下内容是从example中拷贝内容
        var form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files) {
            //fs.writeFile('html/regPic/1.jpg',files[0])
            //console.log(files)
            res.writeHead(200, {'content-type': 'text/plain'});
            res.write('received upload:\n\n');
            //下面用到了util中间件,需引入.其中util.inspect是将对象转换为字符串
            res.end(util.inspect({fields: fields, files: files}));
            console.log(files)
        });
        return;
        //------------------------------------------------------------
    }else{

    }
}).listen(8080);