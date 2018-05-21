import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavHorizontalComponent } from './components/nav-horizontal/nav-horizontal.component';
import { NavVerticalComponent } from './components/nav-vertical/nav-vertical.component';
import { FooterComponent } from './components/footer/footer.component';
import { VideoBackgroundComponent } from './components/video-background/video-background.component';
import { AboutComponent } from './components/about/about.component';
import { LoadingComponent } from './components/loading/loading.component';


@NgModule({
  declarations: [
    AppComponent,
    NavHorizontalComponent,
    NavVerticalComponent,
    FooterComponent,
    VideoBackgroundComponent,
    AboutComponent,
    LoadingComponent,
],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
