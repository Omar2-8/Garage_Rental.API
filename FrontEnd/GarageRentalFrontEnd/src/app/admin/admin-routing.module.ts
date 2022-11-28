import { AdminPaymentComponent } from './admin-payment/admin-payment.component';
import { ManageGarageComponent } from './manage-garage/manage-garage.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ManageHomeComponent } from './manage-home/manage-home.component';
import { ManageTestimonialComponent } from './manage-testimonial/manage-testimonial.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

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
    path:'testimonial',
    component:ManageTestimonialComponent
  },
  {
    path:'home',
    component:ManageHomeComponent
  },
  {
    path:'contactUs',
    component:ContactUsComponent
  },
  {
    path:'users',
    component:UserDetailsComponent
  },
  {
    path:'garage',
    component:ManageGarageComponent
  },
  {
    path:'payment',
    component:AdminPaymentComponent
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

