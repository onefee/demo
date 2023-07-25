/**
 * 1.注册谷歌账号，搜藏书签：https://www.w3school.com.cn/
 * https://cn.vuejs.org/
 * 2.JS数据类型
 * 3.JS基础语法
 * 4.JS操作html dom
 * 5.JS console 输出方便调试
 */

// 数据类型字符串
var name1='bruce';
// 数据类型number
let num = 12;
// 数据类型boolean
// const 表示常量，不可改变数据
const isDebug = false;
// 数据类型undefined
let v1;
// 数据类型object
let v2=null;
// 数据类型object
let obj={};
// 数据类型function
let fn=function(){
    console.log('this is a function');
}

console.log('hello word')
console.log('name1', name1)
console.log('num', num)
console.log('isDebug',isDebug)

console.log('name1:%o, num:%o, v1:%o,v2:%o,', name1, num, isDebug,v1,v2,fn)
console.log('fn数据类型', typeof fn)
// isDebug = true;
// console.log('isDebug',isDebug)

var x, y;	// 如何声明变量
x = '7'; y = 8;	// 如何赋值
zzzz = x + y;	// 如何计算值

console.log('z', zzzz)
console.log('"78"是否等于78', zzzz==78)
console.log('0是否等于false', 0==false)
console.log('0是否等于false', 0===false)

console.log('0不等于false', 0!=false)
console.log('0不等于false', 0!==false)


/* 
JS 语法
JavaScript 对大小写敏感
JavaScript 使用算数运算符（+ - * /）来计算值：
*/

if(x==y){
    console.log('x==y')
}else{
    console.log('x!=y')
}

switch (x) {
    case '1':
        console.log('进入1')
        break;
        case '2':
        console.log('进入2')
        break;
    default:
        console.log('进入默认')
        break;
}

for (let i = 0; i < x; i++) {
    console.log('i', i)
}

document.getElementById("app").innerHTML = name1