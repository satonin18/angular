var el = this.document.getElementById("content");
var User = /** @class */ (function () {
    function User(_name, _age) {
        this.name = _name;
        this.age = _age;
    }
    return User;
}());
var tom = new User("Том", 29);
console.log("Имя: ", tom.name, " возраст: ", tom.age);
el.innerHTML = "Имя: " + tom.name + " возраст: " + tom.age;
/*
Автоматическая перекомпиляция
    Опция --watch, а также ее сокращенная версия -w
    автоматически перекомпилирует файлы typescript, если в них были внесены какие-либо изменения. Благодаря чему не надо при каждом малейшем изменении вручную вводить команду в консоль для перекомпиляции.
tsc -w app.ts

Установка каталога
    С помощью параметра --outDir можно задать папку
    для хранения скомпилированных файлов js:
tsc --outDir D:\ts\js app.ts
*/ 
