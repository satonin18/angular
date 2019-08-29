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
 
@sealed
class User {
    name: string;
    constructor(name: string){
        this.name = name;
    }
    print(): void{
        console.log(this.name);
    }
}

