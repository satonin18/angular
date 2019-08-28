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
let el = this.document.getElementById("content");
 
class User{
    // default = public
    private static counter: number = 0;
 
    static getCounter(): number {
        return User.counter;
    }

    // default = by constructor(with Модификатор доступа)
    //protected name : string;
    //protected age : number;
    constructor(
        private name:string,
        private age: number
        ){
        //this.name = name;
        //this.age = age;
        User.counter++;
    }
    
    getInfo(): string {
        return "Имя: " + this.name + ", возраст: " + this.age;
    }
}
let first : User = new User("first", 1);
let tom : User = new User("Том", 15);
console.log(tom.getInfo());
el.innerHTML = tom.getInfo() + " User.getCounter() = " + User.getCounter();
