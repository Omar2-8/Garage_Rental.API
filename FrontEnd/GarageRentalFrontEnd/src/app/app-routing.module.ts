import { ReserveGarageComponent } from './Components/reserve-garage/reserve-garage.component';
import { UserProfileModule } from './user-profile/user-profile.module';
import { UserGarageComponent } from './Components/user-garage/user-garage.component';
import { AdminModule } from './admin/admin.module';
import { TestimonialComponent } from './Components/testimonial/testimonial.component';
import { AuthModule } from './auth/auth.module';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { HomeComponent } from './Components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationGuard } from './authorization.guard';

const routes: Routes = [
  {
    path: 'about',
    component: AboutUsComponent,
  },
  {
    path: 'contact',
    component: ContactUsComponent,
  },
  //the defult
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'security',
    loadChildren: () => AuthModule, //هان بدي احمل موديول كامل
  },
  {
    path: 'testimonial',
    component: TestimonialComponent,
  },
  {
    path: 'Admin',
    loadChildren: () => AdminModule,
    canActivate: [AuthorizationGuard],
  },
  {
    path: 'garage',
    component: UserGarageComponent,
    canActivate: [AuthorizationGuard],
  },
  {
    path: 'userProfile',
    loadChildren: () => UserProfileModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
