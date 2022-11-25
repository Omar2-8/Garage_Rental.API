import { AdminModule } from './admin/admin.module';
import { TestimonialComponent } from './Components/testimonial/testimonial.component';
import { AuthModule } from './auth/auth.module';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { HomeComponent } from './Components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'about',
    component:AboutUsComponent
  },
  {
    path:'contact',
    component:ContactUsComponent
  },
  //the defult
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'security',
    loadChildren:()=>AuthModule //هان بدي احمل موديول كامل
  },
  {
    path:'testimonial',
    component:TestimonialComponent
  },
  {
    path:'Admin',
    loadChildren:()=>AdminModule
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
