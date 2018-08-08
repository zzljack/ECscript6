let firstName = 'Flowke',
    lastName = 'Hurley';

// 字符串拼接
let string = 'My name is '+ firstName +' '+ lastName + '!';

let fn = ()=>'zzl'

// ES6字符串拼接，声明模板字符串使用 反引号
// 你可以使用${} 在里面写表达式
let str = `New my name is ${firstName} ${lastName} !`

let str2 = `New my name is ${fn()} ${lastName} !`

let str3 = `New my name is ${3>2 ? firstName : fn()} ${lastName} !`

console.log(str3);