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

@NgModule({
  declarations: [
    UserDashboardComponent,
    UserNavbarComponent,
    UserFooterComponent,
    UserSideBarComponent,
    AddTestimonialComponent,
    UserGarageComponent,
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
