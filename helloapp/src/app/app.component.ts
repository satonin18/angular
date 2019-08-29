import { Component } from '@angular/core';
     
@Component({
    selector: 'my-app',
    // template: `<label>Введите имя:</label>
    //              <input [(ngModel)]="name" placeholder="name">
    //              <h1>Добро пожаловать {{name}}!</h1>`
    // templateUrl: './app.component.html'

    template: 
    // `<p>Имя: {{name}}</p>
    // // <p>Возраст: {{age}}</p>`

    // `<input type="text"
    // [value]="name" />` //*!!!
    // //value="{{name}}" />`

    // `<p [textContent]="name"></p>` //У <p> нет атрибута textContent. Зато у интерфейса Node есть

    // `<table border="1">
    //             <tr><td [attr.colspan]="colspanVar">One-Two</td></tr>
    //             <tr><td>Three</td><td>Four</td></tr>
    // </table>`

    `<p>Количество кликов {{count}}</p>`+
    // `<button (click)="increase()"> Click </button>`
    // `<button on-click="increase()">Click</button>`
    `<button (click)="increase($event)">Click</button>`
                
    ,
    // styles: [` 
    //         h1, h2{color:navy;}
    //         p{font-size:13px; font-family:Verdana;}
    //         :host {
    //             font-family: Verdana;
    //             color: #555;
    //         }
    // `]
    styleUrls: ['./app.component.css']
    
})
export class AppComponent { 
    // name: "";
    name = "Tom";
    age = 25;

    colspanVar = 2;

    count: number=0;
    // increase() : void {
    //     this.count++;
    // }
    increase($event : any) : void {
        this.count++;
        console.log($event);
    }
}