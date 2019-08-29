import { Component, OnInit} from '@angular/core';
import { HttpService} from './http.service';
import {User} from './user';
   
@Component({
    selector: 'my-app',
    template: `<ul>
                    <li *ngFor="let user of users">
                    <p>Имя пользователя: {{user?.name}}</p>
                    <p>Возраст пользователя: {{user?.age}}</p>
                    </li>
                </ul>`,
    providers: [HttpService]
})
export class AppComponent implements OnInit { 
   
    // user: User;
    users: User[]=[];
      
    // constructor(private http: HttpClient){ }
    constructor(private httpService: HttpService){}
      
    ngOnInit(){
          
        // this.http.get('user.json') //Observable<any>
        this.httpService.getData()
        // .subscribe((data:User) => this.user=data);
            .subscribe(data => this.users=data["userList"]);
    }
}
