import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ] //on start
})
export class AppModule { }
/*
declarations: классы представлений (view classes), которые принадлежат модулю.
    Angular имеет три типа классов представлений: компоненты (components), директивы (directives), каналы (pipes)

exports: набор классов представлений, которые должны использоваться в шаблонах компонентов из других модулей

imports: другие модули, классы которых необходимы для шаблонов компонентов из текущего модуля

providers: классы, создающие сервисы, используемые модулем

bootstrap: корневой компонент, который вызывается по умолчанию при загрузке приложения
*/
