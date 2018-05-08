import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LiveComponent } from './components/live/live.component';
import { NavHorizontalComponent } from './components/nav-horizontal/nav-horizontal.component';
import { NavVerticalComponent } from './components/nav-vertical/nav-vertical.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { CounterComponent } from './components/counter/counter.component';



@NgModule({
  declarations: [
    AppComponent,
    LiveComponent,
    NavHorizontalComponent,
    NavVerticalComponent,
    AccordionComponent,
    LandingpageComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
