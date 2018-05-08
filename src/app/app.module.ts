import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LiveComponent } from './components/live/live.component';
import { NavHorizontalComponent } from './components/nav-horizontal/nav-horizontal.component';
import { NavVerticalComponent } from './components/nav-vertical/nav-vertical.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
<<<<<<< HEAD
import { CounterComponent } from './components/counter/counter.component';

=======
import { FooterComponent } from './footer/footer.component';
>>>>>>> 27848a906154772d28faf6c260e75a32d8f72904


@NgModule({
  declarations: [
    AppComponent,
    LiveComponent,
    NavHorizontalComponent,
    NavVerticalComponent,
    AccordionComponent,
    LandingpageComponent,
<<<<<<< HEAD
    CounterComponent
  ],
=======
    FooterComponent
],
>>>>>>> 27848a906154772d28faf6c260e75a32d8f72904
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
