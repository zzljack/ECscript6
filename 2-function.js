// 函数的扩展

// 可以给函数一个默认的参数
// function fn(a, b=6){
//     console.log(a, b);
// }
// fn(1)   1,6
// fn(1, 3);  1,3


// 声明一个匿名的箭头函数
// let a = (a, b, c=90)=>{
//     console.log(a, b, c);
// }
// a(1, 2); 1，2,90


// 如果函数只有一个参数，可以不写括号
// let a = arg=>{
//     console.log(arg);
// }
// a(88)

// 返回字符串数组等可以直接返回
// let a = ()=>'str';
// console.log(a());

// let a = ()=>true;
// console.log(a());

// let a = (a, b) => [1, a, 3, b];
// console.log(a(2, 6));


// 返回对象要用括号包住
// let a = (a, b) => ({a:1, b:a, c:2, d:b});
// console.log(a(3, 6));


// 箭头函数this指向会是函数所在的上下文环境
// var obj = {
//     fn: function () { 
//         let a = ()=>{
//             console.log(this);
//         }
//         a();
//     }
// }
// obj.fn();  //返回的this是fn
// let newFn = obj.fn;
// newFn(); //this返回的是window


// var obj2 = {
//     fn2: function () { 
//         let a = function(){
//             console.log(this);
//         }
//         a();
//     }
// }

// obj2.fn2(); //window