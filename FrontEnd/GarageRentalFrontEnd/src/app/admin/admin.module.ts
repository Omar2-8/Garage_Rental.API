import { ManageTestimonialComponent } from './manage-testimonial/manage-testimonial.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { GoogleMapsModule } from '@angular/google-maps';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { ManageHomeComponent } from './manage-home/manage-home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import {TableModule} from 'primeng/table';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ManageGarageComponent } from './manage-garage/manage-garage.component';
import { AdminPaymentComponent } from './admin-payment/admin-payment.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { ReportsMonthlyComponent } from './reports-monthly/reports-monthly.component';
import { ReportsAnnualComponent } from './reports-annual/reports-annual.component';


@NgModule({
  declarations: [

    DashboardComponent,
      AboutUsComponent,
      SidebarComponent,
      NavbarComponent,
      FooterComponent,
      ManageTestimonialComponent,
      ManageHomeComponent,
      ContactUsComponent,
      UserDetailsComponent,
      ManageGarageComponent,
      AdminPaymentComponent,
      AdminProfileComponent,
      ReportsMonthlyComponent,
      ReportsAnnualComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    TableModule,
    GoogleMapsModule
  ]
})
export class AdminModule { }
