import { Component, ContentChild, ElementRef } from '@angular/core';
       
@Component({
    selector: 'child-comp',
    template: `<ng-content></ng-content>
               <button (click)="change()">Изменить</button>`
})
export class ChildComponent{ 
     
    @ContentChild("headerContent", {static:false})
    header: ElementRef;
     
    change() { 
        console.log(this.header); 
        this.header.nativeElement.textContent = "Hell to world!"; 
    }
}