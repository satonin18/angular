var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
из-за применения декоратора мы, не сможем добавить в класс User
    новое свойство следующим образом:
Object.defineProperty(User, 'age', {
    value: 17
});
    interface PropertyDescriptor {
        configurable?: boolean;
        enumerable?: boolean;
        value?: any;
        writable?: boolean;
        get?(): any;
        set?(v: any): void;
    }
*/
function regex(pattern) {
    var expression = new RegExp(pattern);
    return function regex(target, propertyName) {
        var propertyValue = this[propertyName];
        // геттер
        var getter = function () {
            return propertyValue;
        };
        // сеттер
        var setter = function (newVal) {
            var isValid = expression.test(newVal);
            if (isValid === false) {
                throw new Error("Value " + newVal + " does not match " + pattern);
            }
            else {
                console.log(newVal + " is valid");
            }
        };
        // удаляем свойство
        if (delete this[propertyName]) {
            // И создаем новое свойство с геттером и сеттером
            Object.defineProperty(target, propertyName, {
                get: getter,
                set: setter
            });
        }
    };
}
var Account = /** @class */ (function () {
    function Account(email, phone) {
        this.email = email;
        this.phone = phone;
    }
    __decorate([
        regex("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"),
        __metadata("design:type", String)
    ], Account.prototype, "email", void 0);
    __decorate([
        regex("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"),
        __metadata("design:type", String)
    ], Account.prototype, "phone", void 0);
    return Account;
}());
var acc = new Account("bir@gmail.com", "+23451235678");
acc.email = "bir_iki_yedi";
//END TUTORIAL !!!
