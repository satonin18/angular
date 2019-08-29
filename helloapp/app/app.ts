/*
из-за применения декоратора мы, не сможем добавить в класс User
    новое свойство следующим образом:
Object.defineProperty(User, 'age', {
    value: 17
});
*/
function deprecated(target: any, propertyName: string, descriptor: PropertyDescriptor){ 
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
function readonly (target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.writable = false;
};
 
class User {
 
    name: string;
    constructor(name: string){
        this.name = name;
    }
 
    @readonly //if comment, then console.log will change
    print(): void{
        console.log(this.name);
    }
}
let tom = new User("Tom");
tom.print();  // Tom
tom.print = function(){ console.log("print has been changed");}
tom.print();  // Tom