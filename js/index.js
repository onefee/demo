/**
 * 第3课 事件、样式、 */


function show(){
    let namea1 = document.querySelector('.right') .value
    let namea2 = document.querySelector('.left') .value
    console.log("namea1的值为%o,namea2的值为%o",namea1,namea2)
    let res = `姓名：${namea1},性别：${namea2}`
    alert(res)
}

/**
 * 聚焦事件
 */
function stuFocus(){

    console.log('Focus')
}

/**
 * 失焦事件
 */
function stuBlur(e){
    let name = document.getElementById('name').value
    if(!name){
        // alert('姓名不能为空') 
        console.log('不能为空')
    }
    // e.value等同于document.getElementById('name').value 
    console.log('Blur', e.value)    
}