import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { AboutnewComponent } from './components/aboutnew/aboutnew.component';
import { ContactComponent } from './components/contact/contact.component';
import { GalleryComponent } from './components/gallery/gallery.component';


const routes: Routes = [
  { path: 'LandingpageComponent', component: LandingpageComponent },
  { path: 'GalleryComponent', component: GalleryComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'AboutComponent',      component: AboutnewComponent },
  { path: 'ContactComponent', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
