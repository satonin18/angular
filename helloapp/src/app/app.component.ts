import { Component } from '@angular/core';

// @Component({
//     selector: 'my-app',
//     template: `
//                 <p #userName>{{name}}</p>
//                 <p>{{userName.textContent}}</p>
//                 <input type="text" [(ngModel)]="name" />`
// })
// export class AppComponent { 
//     name:string="Tom";
// }

@Component({
    selector: 'my-app',
    template: `<child-comp #counter></child-comp>
                <button (click)="counter.increment()">+</button>
                <button (click)="counter.decrement()">-</button>`
})
export class AppComponent { }