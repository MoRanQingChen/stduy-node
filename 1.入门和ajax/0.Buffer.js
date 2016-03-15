//var fs=require("fs");
//fs.readFile("./1.txt",'utf8',function(err,data){
//    console.log(data)
//});
//---------------------------------------
//var mime=require("mime");
//console.log(mime);
//----------------------------------------
//var buffer=new Buffer(1);//buffer类似数组  buffer只能放0-255之间的数 一旦创建长度不可改
//创建buffer三种方法
//buffer[0]=10;//值(不能大于255)
//console.log(buffer);//输出0a  因为a=10
//console.log(new Buffer("染"))//字
//console.log(new Buffer([1,2,3]));//数组(必须放不能大于255的数字)
//------------------------------------------------
//buffer有toString方法
//var buffer=new Buffer("墨染");
//console.log(buffer);
//console.log(buffer.toString());
//console.log(buffer.toString('utf8',3,6));
//-------------------------------------------------
//buffer严格意义上不能修改长度,却可以拼接
//var buf1=new Buffer("墨");
//var buf2=new Buffer("染");
//var buf3=new Buffer("加");
//var buf4=new Buffer("油");
//console.log(Buffer.concat([buf1,buf2,buf3,buf4],12).toString())
//------------------------------------------------
//buffer也有slice方法
var buffer=new Buffer("墨染加油");
console.log(Buffer);
buffer.slice(0,6);

