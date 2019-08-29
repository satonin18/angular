import { Component } from '@angular/core';
     
@Component({
    selector: 'my-app',
    // template: `<label>Введите имя:</label>
    //              <input [(ngModel)]="name" placeholder="name">
    //              <h1>Добро пожаловать {{name}}!</h1>`
    // templateUrl: './app.component.html' 
    // ,
    // styles: [` 
    //         h1, h2{color:navy;}
    //         p{font-size:13px; font-family:Verdana;}
    //         :host {
    //             font-family: Verdana;
    //             color: #555;
    //         }
    // `]
    // styleUrls: ['./app.component.css']

    // Привязка к классам CSS
    // [class]="varStrContain_nameClass"
    template: `<div [class]="varStrContain_nameClass"></div>
    <br>
    <div [style.backgroundColor]="isRed? 'red' : 'green'"></div>
    <div [style.background-color]="!isRed ? 'red' : 'green'"></div>
    <input type="checkbox" [(ngModel)]="isRed" />`,
    styles: [`
        div {width:50px; height:50px; border:1px solid #ccc}
         .isredbox{background-color:red;}
    `]
})
export class AppComponent{ 
    varStrContain_nameClass = "isredbox"
    isRed = false;
}