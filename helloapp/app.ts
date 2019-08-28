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

interface IUser {
    //default public
    getId(): number ;

    getName(): string ;
    setName(name: string): void;

    getAge(): number ;
    setAge(age: number): void;

    getFullName(surname: string): string;
    getInfo(): string ;
}

class User implements IUser{
    // default = public
    private static counter: number = 0;
 
    static getCounter(): number {
        return User.counter;
    }

    // default = by constructor(with Модификатор доступа)
    private id : number;
    private name : string;
    private age : number;

    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }
    public setName(name: string) {
        this.name = name;
    }

    public getAge(): number {
        return this.age;
    }
    public setAge(age: number) {
        this.age = age;
    }

    constructor(
        /*private*/ name:string,
        /*private*/ age: number
        ){
        this.id = User.counter;
        this.name = name;
        this.age = age;

        User.counter++;
    }
    getFullName(username: string): string {
        return this.name + " " + username;
    }

    getInfo(): string {
        return "Id: " + this.id +", Имя: " + this.name + ", возраст: " + this.age;
    }
}

//in extendable classes need ЯВНО call super(...);

let first : IUser  = new User("first", 1);
let tom : IUser = new User("Том", 15);

tom.setName("Rename");
console.log(tom.getName);

console.log(tom.getInfo());
el.innerHTML = tom.getInfo();

//----------------------------------------------------
interface Point {
    readonly x: number;
    readonly y: number;
}
let p: Point = { x: 10, y: 20 };
console.log(p);
//----------------------------------------------------
interface ISingleUser {
    id: number;
    name: string;
    age?: number;
    getFullName?(surname: string): string;
}

let employee: ISingleUser = {
    id: -1, 
    name: "Alice",
    age: 23,
    getFullName : function (surname: string): string {
        return this.name + " " + surname;
    }
}
let manager: ISingleUser = {
    id: -2, 
    name: "Tom"
}
function buildUser(userId: number, userName: string): ISingleUser {
    return { id: userId, name: userName };
}
let worker = buildUser(-3, "Bill");

function getEmployeeInfo(user: ISingleUser): void {
    console.log("id: " + user.id);
    console.log("name: " + user.name)

    let fullName = employee.getFullName("Tompson");
    console.log(fullName); // Alice Tompson
}
getEmployeeInfo(employee);
//-------------------------------------------------------------
// Интерфейсы функций
interface FullNameBuilder {
    (name: string, surname: string): string;
}
 
let simpleBuilder: FullNameBuilder = function (name:string, surname: string): string {
        return "Mr. " + name + " " + surname;
}
 
let fullName = simpleBuilder("Bob", "Simpson");
console.log(fullName); // Mr. Bob Simpson
//-------------------------------------------------------------
// Интерфейсы массивов:
// может индексироваться с помощью - number.
// данный объект должен хранить - string.
interface StringArray {
    [index: number]: string;
}
 
let phones: StringArray = ["iPhone 7", "HTC 10", "HP Elite x3"];
 
let myPhone: string = phones[0];
console.log(myPhone);
//-------------------------------------------------------------
// EXAMPLE
// может индексироваться с помощью - string.
// данный объект должен хранить - string.
interface Dictionary {
    [index: string]: string;
}
 
var colors: Dictionary = {};
colors["red"] = "#ff0000";
colors["green"] = "#00ff00";
colors["blue"] = "#0000ff";
 
console.log(colors["red"]);
//-------------------------------------------------------------
// Гибридные интерфейсы
interface PersonInfo {
    (name: string, surname: string):void;
    fullName: string;
    password: string;
    authenticate(): void;
}
 
function personBuilder(): PersonInfo {
    let person = <PersonInfo> function (name: string, surname: string): void{
        person.fullName = name + " " + surname;
    };
    person.authenticate = function () {
        console.log(person.fullName + " входит в систему с паролем " + person.password);
    };
    return person;
}
 
let humon : PersonInfo = personBuilder();
humon("Tom", "Simpson");
humon.password = "qwerty"; 
humon.authenticate();
//-------------------------------------------------------------
