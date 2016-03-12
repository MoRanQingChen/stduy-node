/**
 * Created by Administrator on 2016/3/12.
 */
var fs=require('fs');
var path=require('path');
console.log(path.join('node_modules','mime'));//尽量不要手写,最好用join拼
console.log(path.sep);//输出该系统应该的下划线

console.log(__filename);//获取当前模块的绝对地址
console.log(__dirname);//获取当前模块的绝对所在文件夹

console.log(path.basename('XXX.js','.js'))//传入两个参数会相减
console.log(path.extname('XX.XXX.js'))//输出后缀名

//相对路径变绝对路径,以应用程序所在目录为根起点
console.log(path.resolve('node_modules','mime'));
//可以解析".."作为返回上一级
console.log(path.resolve('node_modules','mime',"..",".bin"));
