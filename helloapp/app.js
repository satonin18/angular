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
        this.id = User.counter;
        this.name = name;
        this.age = age;
        User.counter++;
    }
    User.getCounter = function () {
        return User.counter;
    };
    User.prototype.getId = function () {
        return this.id;
    };
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.setName = function (name) {
        this.name = name;
    };
    User.prototype.getAge = function () {
        return this.age;
    };
    User.prototype.setAge = function (age) {
        this.age = age;
    };
    User.prototype.getFullName = function (username) {
        return this.name + " " + username;
    };
    User.prototype.getInfo = function () {
        return "Id: " + this.id + ", Имя: " + this.name + ", возраст: " + this.age;
    };
    // default = public
    User.counter = 0;
    return User;
}());
//in extendable classes need ЯВНО call super(...);
var first = new User("first", 1);
var tom = new User("Том", 15);
tom.setName("Rename");
console.log(tom.getName);
console.log(tom.getInfo());
el.innerHTML = tom.getInfo();
var p = { x: 10, y: 20 };
console.log(p);
var employee = {
    id: -1,
    name: "Alice",
    age: 23,
    getFullName: function (surname) {
        return this.name + " " + surname;
    }
};
var manager = {
    id: "manager",
    name: "Tom"
};
function buildUser(userId, userName) {
    return { id: userId, name: userName };
}
var worker = buildUser(-3, "Bill");
function getEmployeeInfo(user) {
    console.log("id: " + user.id);
    console.log("name: " + user.name);
    var fullName = employee.getFullName("Tompson");
    console.log(fullName); // Alice Tompson
}
getEmployeeInfo(employee);
var simpleBuilder = function (name, surname) {
    return "Mr. " + name + " " + surname;
};
var fullName = simpleBuilder("Bob", "Simpson");
console.log(fullName); // Mr. Bob Simpson
var phones = ["iPhone 7", "HTC 10", "HP Elite x3"];
var myPhone = phones[0];
console.log(myPhone);
var colors = {};
colors["red"] = "#ff0000";
colors["green"] = "#00ff00";
colors["blue"] = "#0000ff";
console.log(colors["red"]);
function personBuilder() {
    var person = function (name, surname) {
        person.fullName = name + " " + surname;
    };
    person.authenticate = function () {
        console.log(person.fullName + " входит в систему с паролем " + person.password);
    };
    return person;
}
var humon = personBuilder();
humon("Tom", "Simpson");
humon.password = "qwerty";
humon.authenticate();
//-------------------------------------------------------------
// Обобщения
function getId(id) {
    return id;
}
var result1 = getId(5);
console.log(result1);
var result2 = getId("abc");
console.log(result2);
//-------------------------------------------------------------
var UserGeneric = /** @class */ (function () {
    function UserGeneric(id) {
        this._id = id;
    }
    UserGeneric.prototype.getId = function () {
        return this._id;
    };
    return UserGeneric;
}());
var h = new UserGeneric(3);
console.log(tom.getId()); // возвращает number
var alice = new UserGeneric("vsf");
console.log(alice.getId()); // возвращает string
var u = new UserGeneric(3);
console.log(u.getId());
//u = new UserGeneric<string>("vsf"); // ошибка
//-------------------------------------------------------------
// Ключевое слово new
// function UserFactory<T>(): T {
//     return new T(); // ошибка компиляции
// }
function userFactory(type) {
    return new type();
}
var UserGenericNew = /** @class */ (function () {
    function UserGenericNew() {
        console.log("создан объект UserGenericNew");
    }
    return UserGenericNew;
}());
var user = userFactory(UserGenericNew);
//-------------------------------------------------------------
