import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { HighlightDirective } from './highlight.directive';
import { Highlight2Directive } from './highlight2/highlight2.directive';
import { UppercasePipe } from './shared/uppercase.pipe';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    HighlightDirective,
    Highlight2Directive,
    UppercasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
