// map
// map会返回一个新数组
let arr = ['a','b','c','d'].map((val, idx)=>{
    // console.log(val);  //a,b,c,d
    // console.log(idx);  //0,1,2,3
    return val+idx;

})

// console.log(arr)  ["a0", "b1", "c2", "d3"]


// filter 过滤数组的数据
// return
//      true 数据会被保留下来
//      false 数组将会是空
let arr1 = [1,2,3,4].filter((val, idx)=>{

    return val>2;

})

// console.log(arr1);[3, 4]


// some 返回一个布尔值， 只要有一个符合条件就会返回true
//  回调函数返回值  true -- false
let bool = [1,2,3,4].some((val, idx)=>{

    return val>2;

})

// console.log(bool)  true


// every 返回一个布尔值， 必须所有的都符合条件才会返回true，只要有一个不符合条件就会返回false
let bool2 = [1,2,3,4].every((val, idx)=>{

    return val>1;

})

// console.log(bool2); false


// reduce
// 第二个参数是acce的初始值
// 计算数组的数值加起来的总和
let duce = [1,2,3,4].reduce((acce, val, idx)=>{

    return acce+val;

}, 0)
// console.log(duce);  10


// 过滤数组的数据（实现filter）
let duce2 = [1,2,3,4].reduce((acce, val, idx)=>{

    if(val>1) acce.push(val);
    return acce;

}, [])
// console.log(duce2);[2, 3, 4]


// 过滤数组返回布尔值（实现some方法）
let duce3 = [1,2,3,4].reduce((acce, val, idx)=>{

    if(val>2) return true;
    return acce;

}, false)
// console.log(duce3); true


// 过滤数组返回布尔值（实现every方法）
let duce4 = [1,2,3,4].reduce((acce, val, idx)=>{

    if(val<4) return false;
    return acce;

}, true)
// console.log(duce4); false
