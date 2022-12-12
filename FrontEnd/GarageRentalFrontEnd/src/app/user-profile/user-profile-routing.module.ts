import { UserCarsComponent } from './user-cars/user-cars.component';
import { UserPaymentsComponent } from './user-payments/user-payments.component';
import { UserRentsComponent } from './user-rents/user-rents.component';
import { UserGarageComponent } from './user-garage/user-garage.component';
import { AddTestimonialComponent } from './add-testimonial/add-testimonial.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path:'Profile',
    component:UserDashboardComponent
  },
  {
    path:'testimonial',
    component:AddTestimonialComponent
  },
  {
    path:'garage',
    component:UserGarageComponent
  },
  {
    path:'u-rents',
    component:UserRentsComponent
  },
  {
    path:'payments',
    component:UserPaymentsComponent
  },
  {
    path:'cars',
    component:UserCarsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfileRoutingModule { }
