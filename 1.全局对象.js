
//__dirname和__filename都不是global内的属性
console.log(__dirname);//所在文件夹路径
console.log(__filename);//文件路径
/*
1.内置模块  直接指定名字
2.自定义模块   指定路径
3.第三方模块   直接指定名字
*/
/*
在node中能直接用的有两种
1.global下的属性
2.初始化模块时传入的参数
*/
/*
require的内部原理
实质上是一个function
function t(__filename,__dirname,module,requrie){
    var exports={};
    //函数体
    return exports;
}*/
//-------------------------------------------

//作用是在下一个事件环里立马执行下一个事件
setImmediate(function () {
    console.log("下一个事件环里立马执行下一个事件")
});
//类似setTimeout(function () {},0)
//但是比setTimeout快,因为不用比对时间
process.nextTick(function () {
    console.log("把这个函数放在当前函数末尾执行")
});
console.log("我是普通的")
//所以优先级排序  普通>process.nextTick>setImmediate
//-----------------------------------------
//下面是util方法
//----------------------------------
//用util完成一个构造函数的[私有]继承(所谓私有继承,就是可以用父类prototype内的函数)
var util=require("util");
function Parent(){
    this.name="parent";
    this.age=50;
    this.say= function () {
        console.log("my name is "+this.name)
    }
}
Parent.prototype.sayHello= function () {
    console.log("hello "+this.name)//注意this的关系
}
function Child(){
    Parent.call(this);//普通继承
    this.name="child";//注意先parent的call再写自己的属性去覆盖父类的
}
//用util.inherit处理一下 , 子类也有父类的prototype内的方法了
util.inherits(Child,Parent);//继承私有内容(只继承prototype内的属性)
var c=new Child();
console.log(c);//c.sayHello是不存在的
//因为util.inherit处理过,所以可以用父类的prototype内的,
c.sayHello();