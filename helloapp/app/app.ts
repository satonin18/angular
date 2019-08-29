/*
из-за применения декоратора мы, не сможем добавить в класс User
    новое свойство следующим образом:
Object.defineProperty(User, 'age', {
    value: 17
});
*/
//Декоратор параметра метода
function MyParameterDecorator(target: Object, propertyKey: string, parameterIndex: number){
    // код декоратора
}
/*
Где 1 параметр представляет конструктор класса, если метод статический,
    либо прототип класса, если метод нестатический.
А 2 параметр представляет имя параметра.
И 3 параметр представляет порядковый индекс параметра в списке параметров.
*/
function logParameter(target: any, key : string, index : number) {
    var metadataKey = `__log_${key}_parameters`;
    
    if (Array.isArray(target[metadataKey])) {
        target[metadataKey].push(index);
        // console.log(`isArray`);
      }
      else {
        target[metadataKey] = [index];
        // console.log(`! isArray`);
    }
}
function logMethod(target, key, descriptor) {

    var originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {

        var metadataKey = `__log_${key}_parameters`;
        var indices = target[metadataKey];
        //---
        console.log("logMethod take "+target[metadataKey]);
        //---
        if (Array.isArray(indices)) { 
            for (var i = 0; i < args.length; i++) { 
         
                if (indices.indexOf(i) !== -1) { 
                    var arg = args[i];
                    var argStr = JSON.stringify(arg) || arg.toString();
                    console.log(`${key} arg[${i}]: ${argStr}`);
                }
            }
            var result = originalMethod.apply(this, args);
            return result;
        }
        else {
            var a = args.map(a => (JSON.stringify(a) || a.toString())).join();
            var result = originalMethod.apply(this, args);
            var r = JSON.stringify(result);
            console.log(`Call: ${key}(${a}) => ${r}`);
            return result;
        }
    }
    return descriptor;
}
 
class User {
 
    private name: string;
    constructor(name: string){
        this.name = name;
    }
    @logMethod
    setName(
        @logParameter //
        name: string){
        this.name = name;
    }
    print(): void{
        console.log(this.name);
    }
}
let tom = new User("Tom");
tom.setName("Bob");
tom.setName("Sam");