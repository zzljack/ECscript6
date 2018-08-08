let obj = {
    firstName:"first",
    lastName: "last",
    hj:{
        a: 1,
        b: 2
    }
}

// let firstName = obj.firstName,
//     lastName = obj.lastName;

// 变量的结构赋值语法
let {firstName, lastName} = obj;


// 嵌套结构
// 获取hj
let {hj} = obj;

// 获取hj里的a和b
let {hj:{a,b}} = obj;

// 获取hj和a、b
let {hj:{a,b},hj} = obj;


// 在函数参数里面，可直接结构
function name({firstName, lastName}){
    console.log(`${firstName} ${lastName}`);
}
name({firstName:'zzl', lastName:'123'})