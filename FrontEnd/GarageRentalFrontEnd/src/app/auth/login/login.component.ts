import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('container')
  container!: ElementRef;

  signIn() {
    this.container.nativeElement.classList.remove('right-panel-active');
  }

  signUp() {
    this.container.nativeElement.classList.add('right-panel-active');
  }
  constructor() {
    console.log(1);

  }

  email = new FormControl('',[Validators.required,Validators.email]);
  password = new FormControl('',[Validators.required,Validators.minLength(8)]);
  cheack= new FormControl('');
   
  ngOnInit(): void {
<<<<<<< HEAD
   
=======
    localStorage.getItem('user info is saved');
    localStorage.getItem('Email');
    localStorage.getItem('Password');

>>>>>>> 02d86726f1d06d3a3f36b970b81d06827d1a7d1c
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
<<<<<<< HEAD
    

=======


     this.emailFromnStorage=localStorage.getItem("Email") as string;
     this.passFromStorage=localStorage.getItem("Password") as string;
     this.isAccepted=this.cheack.value as unknown as boolean;
>>>>>>> 02d86726f1d06d3a3f36b970b81d06827d1a7d1c
    }
    


  }
 
    
  

}
