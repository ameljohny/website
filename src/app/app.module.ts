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
import { GalleryComponent } from './components/gallery/gallery.component';
import { FooterComponent } from './components/footer/footer.component';

=======
import { FooterComponent } from './components/footer/footer.component';
import { VideoBackgroundComponent } from './components/video-background/video-background.component';
import { AboutComponent } from './components/about/about.component';
>>>>>>> 40de5d038634f6008a682a2be462f39686311f43


@NgModule({
  declarations: [
    AppComponent,
    LiveComponent,
    NavHorizontalComponent,
    NavVerticalComponent,
    AccordionComponent,
    LandingpageComponent,
<<<<<<< HEAD
    CounterComponent,
    GalleryComponent,
    FooterComponent
  ],
=======
    FooterComponent,
    VideoBackgroundComponent,
    AboutComponent
],
>>>>>>> 40de5d038634f6008a682a2be462f39686311f43
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
