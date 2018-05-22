import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import {Ng2PageScrollModule} from 'ng2-page-scroll';

import { LoadingComponent } from './components/loading/loading.component';
import { NavHorizontalComponent } from './components/nav-horizontal/nav-horizontal.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { VideoBackgroundComponent } from './components/video-background/video-background.component';

import { AboutComponent } from './components/about/about.component';
import { NavVerticalComponent } from './components/nav-vertical/nav-vertical.component';

import { ContactComponent } from './components/contact/contact.component';
import { NavVertContactComponent } from './components/nav-vert-contact/nav-vert-contact.component';


import { LiveComponent } from './components/live/live.component';
import { CounterComponent } from './components/counter/counter.component';
import { AccordionComponent } from './components/accordion/accordion.component';

import { GalleryComponent } from './components/gallery/gallery.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule, Routes } from '@angular/router'; 


const appRoutes: Routes = [
  { path: 'LandingpageComponent', component: LandingpageComponent },
  { path: 'AboutComponent',      component: AboutComponent },
  { path: 'ContactComponent', component: ContactComponent },
  { path: 'GalleryComponent', component: GalleryComponent },
  { path: '', component: LandingpageComponent },
  { path: '**', component: LoadingComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    NavHorizontalComponent,
    LandingpageComponent,
    VideoBackgroundComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    LiveComponent,
    AccordionComponent,
    NavVerticalComponent,
    NavVertContactComponent,
    CounterComponent,
    GalleryComponent
   
],
  imports: [
    BrowserModule,NgbModule.forRoot(),Ng2PageScrollModule,RouterModule.forRoot(
      appRoutes,
      { } 
    )
  ],
  providers: [Ng2PageScrollModule],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
