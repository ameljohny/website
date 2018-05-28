import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LiveComponent } from './components/live/live.component';
import { NavVerticalComponent } from './components/nav-vertical/nav-vertical.component';
import { FooterComponent } from './components/footer/footer.component';
import { VideoBackgroundComponent } from './components/video-background/video-background.component';
import { GalleryComponent} from './components/gallery/gallery.component';
import { CounterComponent} from './components/counter/counter.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavVertContactComponent } from './components/nav-vert-contact/nav-vert-contact.component';
import { SocialComponent } from './components/social/social.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { NgModule } from '@angular/core';
import { AccordionComponent } from './components/accordion/accordion.component';
import { AboutnewComponent } from './components/aboutnew/aboutnew.component';
import { NavHorizontalComponent } from './components/nav-horizontal/nav-horizontal.component';
import { LoadingComponent } from './components/loading/loading.component';

const appRoutes: Routes = [
  { path: 'LandingpageComponent', component: LandingpageComponent },
  { path: 'GalleryComponent', component: GalleryComponent },
  { path: 'AboutComponent',      component: AboutnewComponent },
  { path: 'ContactComponent', component: ContactComponent },
  { path: '', component: LandingpageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    LiveComponent,
    NavVerticalComponent,
    FooterComponent,
    AccordionComponent,
    VideoBackgroundComponent,
    GalleryComponent,
    CounterComponent,
    ContactComponent,
    FooterComponent,
    LiveComponent,
    AccordionComponent,
    NavVerticalComponent,
    NavVertContactComponent,
    SocialComponent,
    AboutnewComponent,
    NavHorizontalComponent,
    LoadingComponent
],
  imports: [
    BrowserModule, NgbModule.forRoot(), RouterModule.forRoot(
      appRoutes,
      {}
    ), ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
