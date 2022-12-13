import { UserService } from './../../Services/user.service';

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm :FormGroup= new FormGroup({
    firsT_NAME :new FormControl('',[Validators.required]),
    lasT_NAME :new FormControl('',[Validators.required]),
    email :new FormControl('',[Validators.required,Validators.email]),
    password :new FormControl('',[Validators.required,Validators.minLength(8)]),
    phonenumber:new FormControl('',[Validators.required,Validators.minLength(9)]),
    useR_IMAGE:new FormControl(),
    useR_IDENTITY:new FormControl('',[Validators.required]),
    
    
  })

  constructor(public user:UserService,private route:Router,private spinner :NgxSpinnerService) { }
  p_data :any={};
  
  submit(){
    this.user.createUser(this.registerForm.value);
    this.spinner.show();
    setTimeout(()=>{
      this.spinner.hide();
    },2000)
    console.log(this.registerForm.value);
    this.route.navigate(['security/login']);
  }
ngOnInit(): void {
  
}
matchError(){
  if(this.registerForm.controls['password'].value==
  this.registerForm.controls['confirmPassword'].value)
  this.registerForm.controls['confirmPassword'].setErrors(null);
  else 
  this.registerForm.controls['confirmPassword'].setErrors({mismatch:true});

}
goToLogin(){
  this.route.navigate(['security/login'])
}
uploadFile(file:any){
  if(file.length==0)
  return;
  let fileToUpload=<File>file[0];//the first image 
  const formdata= new FormData();
  formdata.append('file',fileToUpload,fileToUpload.name);
  
  this.user.uploadAttachmentUser(formdata);
}

}
