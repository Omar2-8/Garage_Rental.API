import { Router } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NgxSpinnerService } from "ngx-spinner";
import { AuthService } from 'src/app/Services/auth.service';
import { HomeService } from 'src/app/Services/home.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private spinner:NgxSpinnerService,public home:HomeService, public auth:AuthService) { }
  email =new FormControl('',[Validators.required,Validators.email]);
  password =new FormControl('',[Validators.required,Validators.minLength(8)]);
  cheack= new FormControl('');
  
  login()
  {
    this.spinner.show();
    
    setTimeout(()=>{
      this.spinner.hide();
      this.auth.login(this.email,this.password);
      },2000)
      
  }

 
 
  
  ngOnInit(): void {
    localStorage.getItem('user info is saved');
    localStorage.getItem('Email');
    localStorage.getItem('Password');
   
  }

  click(){

    console.log(this.password.value);
    console.log("check");

    console.log(this.cheack.value);
    
  }
  isAccepted !:boolean;
  emailFromnStorage!:string;
  passFromStorage!:string;
  Submit()
  {

    if(this.cheack){
    localStorage.setItem("user info is saved",this.cheack.value as string);
    localStorage.setItem("Email",this.email.value as string);
    localStorage.setItem("Password",this.password.value as string);


    this.emailFromnStorage=localStorage.getItem("Email") as string;
    this.passFromStorage=localStorage.getItem("Password") as string;
    this.isAccepted=this.cheack.value as unknown as boolean;
    }
  }
}
