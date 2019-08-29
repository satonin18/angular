import { Component, OnInit} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {User} from './user';
   
@Component({
    selector: 'my-app',
    template: `<div>
                    <p>Имя пользователя: {{user?.name}}</p>
                    <p>Возраст пользователя: {{user?.age}}</p>
               </div>`
})
export class AppComponent implements OnInit { 
   
    user: User;
 
    constructor(private http: HttpClient){}
      
    ngOnInit(){
          
        this.http.get('user.json') //Observable<any>
            .subscribe((data:User) => this.user=data);
    }
}