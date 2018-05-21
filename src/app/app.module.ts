import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavHorizontalComponent } from './components/nav-horizontal/nav-horizontal.component';
import { NavVerticalComponent } from './components/nav-vertical/nav-vertical.component';
import { FooterComponent } from './components/footer/footer.component';
import { VideoBackgroundComponent } from './components/video-background/video-background.component';
import { AboutComponent } from './components/about/about.component';
import { GalleryComponent} from './components/gallery/gallery.component';
import { CounterComponent} from './components/counter/counter.component';
import { ContactComponent } from './components/contact/contact.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { LiveComponent } from './components/live/live.component';
import { LoadingComponent } from './components/loading/loading.component';
import { NavVertContactComponent } from './components/nav-vert-contact/nav-vert-contact.component';



@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    NavHorizontalComponent,
    NavVerticalComponent,
    LandingpageComponent,
    VideoBackgroundComponent,
    LiveComponent,
    CounterComponent,
    AboutComponent,
    GalleryComponent,
    ContactComponent,
    
    NavVertContactComponent,
    AccordionComponent,
    FooterComponent,
   
],
  imports: [
    BrowserModule,NgbModule.forRoot()
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
