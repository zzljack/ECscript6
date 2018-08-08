// 构造函数加原型
// function Human(){
//     this.eyes = 2;
//     this.hands = 2;
// }

// Human.prototype.singing = function(){
//     console.log('I can sing');
// }

// let a = new Human();
// a.singing();


// 使用class关键字生命类
class Human{
    // 类的构造函数，初始化一个对象的属性
    constructor(eyes=2, hands=2){
        this.eyes = eyes;
        this.hands = hands;
    }

    singing(){
        console.log('I can sing');
    }
}
var a = new Human(3, 6);

a.singing();

console.log(a);



// 类可以继承另外一个类，使用extends语法
// 可以继承到另外一个类的所有属性和方法
class NormalMan extends Human{
    constructor(name='zzl'){
        // 调用一下父类的构造函数
        // 当你继承了另外一个类的时候，你必须用（super）
        super(33, 88);
        // this.eyes = 100;
        // this.hands = 200;
        this.feet = 2;
        this.name = name;
    }

    // 重写继承过来的方法
    singing(){
        console.log(this);
        // console.log(`${this.name} can sing`);
    }

    run(){
        console.log('NormalMan can run');
    }
}
var b = new NormalMan('zzlong');

console.log(b)

b.singing();
b.run();



// 关于类里面方法的 this 指向
class YouMan{
    constructor(name='zzl'){
        this.name = name;

        this.singing = this.singing.bind(this);
    }

    singing(){
        // console.log(this); // undefined
        console.log(`${this.name} can sing`);
    }
}

var c = new YouMan('zzlong');

let fnn  = c.singing;

fnn();
