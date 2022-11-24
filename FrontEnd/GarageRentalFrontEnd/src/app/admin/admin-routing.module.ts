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
    path:'contactUs',
    component:ContactUsComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

