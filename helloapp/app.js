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
var el = this.document.getElementById("content");
var User = /** @class */ (function () {
    function User(
    /*private*/ name, 
    /*private*/ age) {
        this.name = name;
        this.age = age;
        User.counter++;
    }
    User.getCounter = function () {
        return User.counter;
    };
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (age) {
            this._age = age;
        },
        enumerable: true,
        configurable: true
    });
    User.prototype.getInfo = function () {
        return "Имя: " + this.name + ", возраст: " + this.age;
    };
    // default = public
    User.counter = 0;
    return User;
}());
var first = new User("first", 1);
var tom = new User("Том", 15);
tom.name = "Rename"; // срабатывает set-метод
console.log(tom.name); // срабатывает get-метод
console.log(tom.getInfo());
el.innerHTML = tom.getInfo() + " User.getCounter() = " + User.getCounter();
