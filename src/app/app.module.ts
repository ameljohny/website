import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LiveComponent } from './components/live/live.component';
import { AccordionComponent } from './components/accordion/accordion.component';


@NgModule({
  declarations: [
    AppComponent,
    LiveComponent,
    AccordionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
