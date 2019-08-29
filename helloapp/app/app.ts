/*
из-за применения декоратора мы, не сможем добавить в класс User
    новое свойство следующим образом:
Object.defineProperty(User, 'age', {
    value: 17
});
*/
//Декоратор свойства
function MyPropertyDecorator(target: Object, propertyKey: string){
    // код декоратора
}
/*
Где 1 параметр представляет конструктор класса, если метод статический,
    либо прототип класса, если метод нестатический.
А 2 параметр представляет имя свойства.
*/
function format(target: Object, propertyKey: string){
     
    let _val = this[propertyKey];   // получаем значение свойства
 
    // геттер
    var getter = function () {
        return "Mr./Ms." + _val;
    };
  
    // сеттер
    var setter = function (newVal) {
        _val = newVal;
    };
  
    // удаляем свойство
    if (delete this[propertyKey]) {
  
        // И создаем новое свойство с геттером и сеттером
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    }
}
 
class User {
 
    @format
    name: string;
    constructor(name: string){
        this.name = name;
    }
    print():void{
        console.log(this.name);
    }
}
let tom = new User("Tom");
tom.print();
tom.name = "Tommy";
tom.print();