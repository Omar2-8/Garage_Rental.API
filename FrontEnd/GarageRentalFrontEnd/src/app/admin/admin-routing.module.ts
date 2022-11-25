<<<<<<< HEAD
import { ManageHomeComponent } from './manage-home/manage-home.component';
import { ManageTestimonialComponent } from './manage-testimonial/manage-testimonial.component';
=======
import { ContactUsComponent } from './contact-us/contact-us.component';

>>>>>>> bdf6e294c32ea56d0777062fd5d9208461cb45aa
import { AboutUsComponent } from './about-us/about-us.component';

import { DashboardComponent } from './dashboard/dashboard.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'aboutUs',
    component:AboutUsComponent
  },
  {
<<<<<<< HEAD
    path:'testimonial',
    component:ManageTestimonialComponent
  },
  {
    path:'home',
    component:ManageHomeComponent
  },
=======
    path:'contactUs',
    component:ContactUsComponent
  }

>>>>>>> bdf6e294c32ea56d0777062fd5d9208461cb45aa

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

