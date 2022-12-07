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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfileRoutingModule { }
