/*
из-за применения декоратора мы, не сможем добавить в класс User
    новое свойство следующим образом:
Object.defineProperty(User, 'age', {
    value: 17
});
*/
//Декоратор метода доступа
function decorator(target: Object, propertyName: string, descriptor: PropertyDescriptor){ 
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
function validator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const oldSet = descriptor.set;
 
    descriptor.set = function(value: string) {
        if (value === "admin") {
            throw new Error("Invalid value");
        }
 
        oldSet.call(this, value);
    }
}
class User {
 
    private _name: string;
    constructor(name: string){
        this.name = name;
    }
     
    public get name(): string {
        return this._name;
    }
    @validator
    public set name(n: string) {
        this._name = n;
    }
}
let tom = new User("Tom");
tom.name = "admin"; //throw new Error("Invalid value");
console.log(tom.name);