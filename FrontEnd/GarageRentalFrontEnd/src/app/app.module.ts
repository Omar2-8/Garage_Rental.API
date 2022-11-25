import { SharedModule } from './shared/shared.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';

import { TestimonialComponent } from './Components/testimonial/testimonial.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule}from  '@angular/common/http'
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';

import { GoogleMapsModule } from '@angular/google-maps';
import { ReserveGarageComponent } from './Components/reserve-garage/reserve-garage.component';
import { ListGarageComponent } from './Components/list-garage/list-garage.component';
import { UserGarageComponent } from './Components/user-garage/user-garage.component';

import {SliderModule} from 'primeng/slider';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactUsComponent,
    AboutUsComponent,
    TestimonialComponent,
    ReserveGarageComponent,
    ListGarageComponent,
    UserGarageComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    SharedModule,
    HttpClientModule,
    GoogleMapsModule,
    ToastrModule.forRoot(),
    ToastNoAnimationModule.forRoot(),
    FormsModule,
    SliderModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
