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
import{HttpClientModule}from  '@angular/common/http'
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
<<<<<<< HEAD
=======
import { UserProfileComponent } from './user-profile/user-profile.component';
import { GoogleMapsModule } from '@angular/google-maps';
>>>>>>> 633fe6da4ba24189e9ba56f981224860447d785e


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactUsComponent,
    AboutUsComponent,
<<<<<<< HEAD
    TestimonialComponent, 
   
=======
    TestimonialComponent,
    UserProfileComponent,


>>>>>>> 633fe6da4ba24189e9ba56f981224860447d785e
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
    ToastNoAnimationModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
