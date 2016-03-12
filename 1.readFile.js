var fs=require("fs");
//fs.readFile('./1.txt',function(err,data){
//    if(err){
//        console.log(err)
//    }else{
//        console.log('直接读取会是buffer'+data);
//        console.log('buffer使用toString'+data.toString())
//    }
//});
//----------------------------------
//fs.readFile('./1.txt','utf8',function(err,data){
//    if(err){
//        console.log(err)
//    }else{
//        console.log('指定编码utf8'+data.toString())
//    }
//});
//-----------------------------------
//同步方法会阻塞   使用try  catch捕获错误
//try{
//    var data=fs.readFileSync('./1.txt');
//    console.log(data.toString());
//}catch (e){
//    console.log(e);
//}
//----------------------------------------
//fs.writeFileSync('./2.txt','这是动态添加的文件');
//fs.writeFile('./2.txt','这是异步添加的内容',function(e){
//    if(e){
//        console.log(e)
//    }
//});
//----------------------------------------
//完成拷贝功能
//function copy(a,b){
//    fs.readFile(a,function(err,data){
//        if(err){
//            console.log(err)
//        }else {
//            fs.writeFile(b,data,function(err){
//                if (err){console.log(err)}
//            })
//        }
//    })
//}
//copy('./1.txt','./2.txt');
//----------------------------------------------
//fs.readdir('./',function(err,data){
//    if(err){
//        console.log(err)
//    }else{
//        console.log(data)
//    }
//})
//--------------------------------------------
//fs.mkdir('./test/', function (err) {
//    if(err){
//        console.log(err)
//    }
//})
//
//--------------------------------------------
//思考:如何一次创建 ./test/t/t/t这样多重目录
//-------------------------------------------
fs.readdir('./',function(err,data){
    data.forEach(function(key){
        fs.stat('./'+key,function(err,state){//这边一般要放目录名的
            console.log(state)
        })
    })
});