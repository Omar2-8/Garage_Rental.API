import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { UserFooterComponent } from './user-footer/user-footer.component';
import { UserSideBarComponent } from './user-side-bar/user-side-bar.component';
import { AddTestimonialComponent } from './add-testimonial/add-testimonial.component';
import { UserGarageComponent } from './user-garage/user-garage.component';
import { GoogleMapsModule } from '@angular/google-maps';

import {TableModule} from 'primeng/table';
import { UserRentsComponent } from './user-rents/user-rents.component';
import { UserPaymentsComponent } from './user-payments/user-payments.component';
import { UserCarsComponent } from './user-cars/user-cars.component';

@NgModule({
  declarations: [
    UserDashboardComponent,
    UserNavbarComponent,
    UserFooterComponent,
    UserSideBarComponent,
    AddTestimonialComponent,
    UserGarageComponent,
    UserRentsComponent,
    UserPaymentsComponent,
    UserCarsComponent,
    ],
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    SharedModule,
    TableModule,
    GoogleMapsModule
  ]
})
export class UserProfileModule { }
