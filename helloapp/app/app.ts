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
function log(target: Object, method: string, descriptor: PropertyDescriptor){
    let originalMethod = descriptor.value;
    descriptor.value = function(...args){
        console.log(JSON.stringify(args));
        let returnValue = originalMethod.apply(this, args);
        console.log(`${JSON.stringify(args)} => ${returnValue}`)
        return returnValue;
    }
}
 
class Calculator{
 
    @log
    add(x: number, y: number): number{
        return x + y;
    }
}
 
let calc = new Calculator();
let z = calc.add(4, 5);
z = calc.add(6, 7);
console.log(z);