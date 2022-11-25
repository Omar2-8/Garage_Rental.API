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
<<<<<<< HEAD
import { ManageHomeComponent } from './manage-home/manage-home.component';
=======
import { ContactUsComponent } from './contact-us/contact-us.component';
>>>>>>> bdf6e294c32ea56d0777062fd5d9208461cb45aa


@NgModule({
  declarations: [

    DashboardComponent,
      AboutUsComponent,
      SidebarComponent,
      NavbarComponent,
      FooterComponent,
<<<<<<< HEAD
      ManageTestimonialComponent,
      ManageHomeComponent
=======
      ContactUsComponent
>>>>>>> bdf6e294c32ea56d0777062fd5d9208461cb45aa
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
