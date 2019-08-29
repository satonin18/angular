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
//Декоратор метода доступа
function decorator(target, propertyName, descriptor) {
    // код декоратора
}
/*
Где 1 параметр представляет конструктор класса, если метод статический,
    либо прототип класса, если метод метода.
2 параметр представляет имя свойства.
3 параметр представляет объект PropertyDescriptor.
    interface PropertyDescriptor {
        configurable?: boolean;
        enumerable?: boolean;
        value?: any;
        writable?: boolean;
        get?(): any;
        set?(v: any): void;
    }
*/
function validator(target, propertyKey, descriptor) {
    var oldSet = descriptor.set;
    descriptor.set = function (value) {
        if (value === "admin") {
            throw new Error("Invalid value");
        }
        oldSet.call(this, value);
    };
}
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (n) {
            this._name = n;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        validator
    ], User.prototype, "name", null);
    return User;
}());
var tom = new User("Tom");
tom.name = "admin"; //throw new Error("Invalid value");
console.log(tom.name);
