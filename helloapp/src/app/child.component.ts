import { Input, Component} from '@angular/core';
      
@Component({
    selector: 'child-comp',
    template: `<p>Имя пользователя: {{userName}}</p>
              <p>Возраст пользователя: {{userAge}}</p>`
})
export class ChildComponent{ 
    @Input() userName: string;
    // @Input() userAge: number;
    _userAge: number;
      
    @Input()
    set userAge(age: number) {
        if(age<0)
            this._userAge=0;
        else if(age>100)
            this._userAge=100;
        else
            this._userAge = age;
  }
  get userAge() { return this._userAge; }

}