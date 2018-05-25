import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import {Ng2PageScrollModule} from 'ng2-page-scroll';

import { LoadingComponent } from './components/loading/loading.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';


import { AboutComponent } from './components/about/about.component';
import { NavVerticalComponent } from './components/nav-vertical/nav-vertical.component';

import { ContactComponent } from './components/contact/contact.component';
import { NavVertContactComponent } from './components/nav-vert-contact/nav-vert-contact.component';
import { RouterModule, Routes } from '@angular/router';

import { GalleryComponent } from './components/gallery/gallery.component';
import { FooterComponent } from './components/footer/footer.component';

import { Page1Sec2Component } from './components/page1-sec2/page1-sec2.component';
import { Page1Sec3Component } from './components/page1-sec3/page1-sec3.component';


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
    LandingpageComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    NavVerticalComponent,
    NavVertContactComponent,
    GalleryComponent,
    Page1Sec2Component,
    Page1Sec3Component,

   
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
