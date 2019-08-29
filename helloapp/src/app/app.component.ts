import { Component } from '@angular/core';
      
@Component({
    selector: 'my-app',
    template: `<child-comp> <h2>Добро пожаловать {{name}}!</h2> </child-comp>
                <p>By chield</p>`,
    styles: [`h2, p {color:#333;}`]
})
export class AppComponent { 
    name = 'Tom';
}