import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { UserFooterComponent } from './user-footer/user-footer.component';
import { UserSideBarComponent } from './user-side-bar/user-side-bar.component';


@NgModule({
  declarations: [
    UserDashboardComponent,
    UserNavbarComponent,
    UserFooterComponent,
    UserSideBarComponent
  ],
  imports: [
    CommonModule,
    UserProfileRoutingModule
  ]
})
export class UserProfileModule { }
