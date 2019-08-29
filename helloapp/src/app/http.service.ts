import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
  
@Injectable()
export class HttpService{
  
    constructor(private http: HttpClient){ }
      
    // getData(){
    getUsers() : Observable<User[]> {
        return this.http.get('users.json') // Observable<any>
                            .pipe(map(data => {
                                let usersList = data["userList"];
                                return usersList.map(function(user:any) {
                                    return {name: user.userName, age: user.userAge};
                                });
                            }));
    }
}