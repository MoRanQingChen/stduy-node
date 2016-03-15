var http=require('http');
var fs=require('fs');
var url=require('url');
var formidable=require('formidable')//用于解析含文件表单,本节主角
var util=require('util');
var picArr=[];
http.createServer(function(req,res){
    var urlObj=url.parse(req.url);
    if(urlObj.path=='/'){
        fs.readFile('html/regPic/index.html','utf8',function(err,data){
            res.end(data);
        })
    }else if(urlObj.path=='/reg') {
        //-------------------------------------------------------------
      //先阅读formidable中间件的readMe,以下内容是从example中拷贝内容
        var form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files) {
            //fs.writeFile('html/regPic/1.jpg',files[0])
            //console.log(files)
            res.writeHead(200, {'content-type': 'text/plain'});
            //res.write('received upload:\n\n');
            //下面用到了util中间件,需引入.其中util.inspect是将对象转换为字符串
            //res.end(util.inspect({fields: fields, files: files}));
            //------------------
            //此处为自己扩展的内容
            if(files.picture){
                var picName=new Date().getTime();
                picName='html/regPic/getImg/'+picName+'.jpg';
                picArr.push(picName);
                console.log(picArr);
                fs.readFile(files.picture.path, function (err,data) {
                    fs.writeFile(picName,data,function(){
                        res.end(JSON.stringify(picArr));
                    });
                });
            }
            res.end(JSON.stringify(picArr));
            //------------------
        });
        return;
        //------------------------------------------------------------
    }else{
        fs.readFile('.'+urlObj.path, function (err,data) {
            if(!err){
                res.setHeader('Content-Type','text/html;charset=utf-8');
                res.write(data);
                res.end();
            }else{
                console.log(urlObj.path);
                res.setHeader('Content-Type','text/html;charset=utf-8');
                res.write("<h1>您要请求的页面被恐龙吃了!<h1>");
                res.end();
            }
        });
    }
}).listen(8080);