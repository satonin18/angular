/*
из-за применения декоратора мы, не сможем добавить в класс User
    новое свойство следующим образом:
Object.defineProperty(User, 'age', {
    value: 17
});
*/
function sealed(constructor: Function) {
    console.log("sealed decorator_!");
    Object.seal(constructor); //запрещает расширение прототипа класса User
    Object.seal(constructor.prototype);
}

function logger<TFunction extends Function>(target: TFunction): TFunction{
 
    let newConstructor: Function = function(name:string){
        console.log("Creating new instance = " + name);
        this.name = name;
        this.age = 18; //ATTATION !
        this.print = function():void{
            console.log(this.name, this.age);
        }
    }
    return <TFunction> newConstructor;
}
 
@logger
@sealed
class User {
    name: string;
    constructor(name: string){
        this.name = name;
    }
    print():void{
        console.log(this.name);
    }
}
let tom = new User("Tom");
let bob = new User("Bob");
tom.print();
bob.print();
