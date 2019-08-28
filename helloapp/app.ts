/*
Boolean: 
Number: + PREFIX: 0x(16) 0o(8) 0b(2);
String: + TEMPLATE: `Имя: ${varName1}, Возраст: ${varName2}`
        + manyLineText (LOL)    `Hello World!
                                Goob bye World!`;

Array<Type>: 
Type[]

Tuple[Type1, Type2]: кортежи
Enum: P.S. stupit store int(can set self number) 

Any: произвольный тип(as in JS)

Null
Undefined:
Void:
Never: также представляет отсутствие значения
    и используется в качестве возвращаемого типа функций,
    которые генерируют или возвращают ошибку
------------------------------------------------------------
//Union + alias
type strOrNumType = number | string;
let unionValue: strOrNumType = "hello work";

if(typeof unionValue === "string")
    strLength = (<string> unionValue).length;
    strLength = (unionValue as string).length;
------------------------------------------------------------
function getName(firstName: string,
    lastName?: string) {
    lastName: string = default_Username()) {
    ...nameArray: string[]) {

    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let f: (x:string, y:string) => string;
f = getName;

//(параметры) => тело функции. 
let getName = (a: string, b: string) => a + b;
let GenericSum = (a, b) => a + b;
let square = x => x * x;
let getHello = () => "hello world";
let koffSum = (x: number, y: number) => {
    x *= 2;
    return x + y;
};
*/
// let el = this.document.getElementById("content");
// console.log(tom.getInfo());
// el.innerHTML = tom.getInfo();
//---------------------------------------------------------
/*
мы можем использовать 5 различных систем модулей:
ES 2015
tsc --module commonjs main.ts // для CommonJS
tsc --module amd main.ts // для AMD (Asynchronys Module Defenition)
tsc --module umd main.ts // для UMD (Universal Module Defenition)
tsc --module system main.ts // для SytemJS

для загрузки модулей можно выбрать один из следующих загрузчиков:
RequireJS: RequireJS use синтаксис,известный как асинхронное определение модуля
    или (AMD)-asynchronous module definition
Browserify: use синтаксис CommonJS
SystemJS: универсальный загрузчик, может применяться для модулей любого типа
*/

////<reference path="devices.ts"/> 

//use module

import {/*Device,*/ Phone, Call} from "./devices";

let iphone: Phone = new Phone("iPhone X");
Call(iphone);

// import * as dev from "./devices";
// let iphone: devPhone = new dev.Phone("iPhone X");
// dev.Call(iphone);

// import SmartWatch from "./smartwatch";
// let iwatch: SmartWatch = new SmartWatch();