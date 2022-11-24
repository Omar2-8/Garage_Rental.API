import { ManageTestimonialComponent } from './manage-testimonial/manage-testimonial.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [

    DashboardComponent,
      AboutUsComponent,
      SidebarComponent,
      NavbarComponent,
      FooterComponent,
      ManageTestimonialComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
