import { Component, ViewChild, ElementRef } from '@angular/core';
       
@Component({
    selector: 'my-app',
    template: `<p #nameText>{{name}}</p>
               <p>{{nameText.textContent}}</p>
               <button (click)="change()">Изменить</button>`
})
export class AppComponent { 
 
    @ViewChild("nameText", {static: false})
    nameParagraph: ElementRef;
     
    name: string = "Tom";
     
    change() { 
        console.log(this.nameParagraph.nativeElement.textContent); 
        this.nameParagraph.nativeElement.textContent = "hell";
    }
}