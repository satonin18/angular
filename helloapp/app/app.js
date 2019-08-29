var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
из-за применения декоратора мы, не сможем добавить в класс User
    новое свойство следующим образом:
Object.defineProperty(User, 'age', {
    value: 17
});
*/
function deprecated(target, propertyName, descriptor) {
    console.log("Method is deprecated");
}
/*
target=Функция конструктора класса для статического метода,
    либо прототип класса для обычного метода.

interface PropertyDescriptor{
    configurable?: boolean;
    enumerable?: boolean;
    value?: any;
    writable?: boolean;
    get? (): any;
    set? (v: any): void;
}
*/
function readonly(target, propertyKey, descriptor) {
    descriptor.writable = false;
}
;
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.print = function () {
        console.log(this.name);
    };
    __decorate([
        readonly //if comment, then console.log will change
    ], User.prototype, "print", null);
    return User;
}());
var tom = new User("Tom");
tom.print(); // Tom
tom.print = function () { console.log("print has been changed"); };
tom.print(); // Tom
