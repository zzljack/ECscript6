// spread 展开

let arr = [1,2,3];

function fn(a, b, c){
    console.log(a, b, c);
}

// 在函数参数里展开一个数组
fn(...arr); //123
fn(...[3,6,9]); //369

// 在数组里展开另一个数组
console.log(['a', 'q', ...arr, 'p'])

let obj = {a: 1, b: 2};

// 在对象里展开另一个对象
console.log({name: 'zzl', ...obj, num: 123, a:3})


// rest 剩余

// 在函数形参里使用rest
function fn2(a, c, ...b){
    console.log(a, b, c);
}
fn2(1,2,3,4,5);

let obj2 = {a:1, b:2, c:3, d:4};

let {a, b, ...q} = obj2;

console.log(a, b, q);