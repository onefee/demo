/**
 * 第二课 数组、对象、函数（方法）
 */

// 复习
// 获取元素(也叫标签或者节点)
document.querySelector('.right') 
document.querySelector('#id') 
document.getElementsByTagName('body')

let arr1=[1,2,3,4];
let arr2 = ['bruce', 'mongo']
let arr3 = ['bruce', 'mongo', 323,555]

console.log('数组', arr1,arr2,arr3)

let nam = document.querySelector('.right') 
// 获取输入框的值，是先获取元素，然后获取value
console.log(nam.value)


// 对象
let obj = {
    name:'bruce',
    sex:'男',
    weight:50,
}
console.log(obj, '对象-姓名', obj.name)
// 对象赋值
obj.name = 'mongo'
obj['sex'] = 46;
console.log('改变后姓名', obj.name)

for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        console.log(obj[key]);        
    }
}

console.log('obj索引取值', obj['sex'], obj.name)

// function 函数/方法

// 无返回值
function add(a,b,c){
    // console.log('参数', a,b,c)
    let sum = a+b+c;
    console.log('结果', sum)       
}

// NaN 非数字 typeof NaN的结果为number
add(1, 2);

add(1, 2, 5);

add(1, 2, '5');

// 有返回值
function add2(a, b){
    let sum = a + b;
    return sum      
}

let res = add2(4, 9)

console.log('add2', res)

function show(){
    let namea1 = document.querySelector('.right') .value
    let namea2 = document.querySelector('.left') .value
    console.log("namea1的值为%o,namea2的值为%o",namea1,namea2)
    let res = `姓名：${namea1},性别：${namea2}`
    alert(res)
}