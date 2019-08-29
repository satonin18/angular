import { Component, OnInit} from '@angular/core';
import { HttpService} from './http.service';
import {User} from './user';
   
@Component({
    selector: 'my-app',
    template: `<div>
                    <p>Имя пользователя: {{user?.name}}</p>
                    <p>Возраст пользователя: {{user?.age}}</p>
               </div>`,
    providers: [HttpService]
})
export class AppComponent implements OnInit { 
   
    user: User;
      
    // constructor(private http: HttpClient){ }
    constructor(private httpService: HttpService){}
      
    ngOnInit(){
          
        // this.http.get('user.json') //Observable<any>
        this.httpService.getData()
        .subscribe((data:User) => this.user=data);
    }
}
