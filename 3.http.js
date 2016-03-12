//导入http模块
var http=require("http");

var server=http.createServer(function (req,resp) {
    var date=new Date();
    resp.setHeader()
    resp.write(date.getFullYear().toString()+'年'+date.getMonth().toString()+"月"+date.getDate().toString()+"日");
    resp.end();
});

server.listen(8080,'127.0.0.1');

