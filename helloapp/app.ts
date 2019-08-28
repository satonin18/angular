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
*/
let el = this.document.getElementById("content");
 
class User{
    name : string;
    age : number;
    constructor(_name:string, _age: number){
         
        this.name = _name;
        this.age = _age;
    }
}
let tom : User = new User("Том", 5);
console.log("Имя: ", tom.name, " возраст: ", tom.age);
el.innerHTML="Имя: " + tom.name + " возраст: " + tom.age;
