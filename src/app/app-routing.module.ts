import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { GalleryComponent } from './components/gallery/gallery.component';


const routes: Routes = [
  { path: ':LandingpageComponent', component: LandingpageComponent },
  { path: ':GalleryComponent', component: GalleryComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: ':AboutComponent',      component: AboutComponent },
  { path: ':ContactComponent', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
