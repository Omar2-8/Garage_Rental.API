import { UserService } from './../../Services/user.service';
import { Router } from '@angular/router';
import { HomeService } from './../../Services/home.service';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  constructor(public home:HomeService,private toster:ToastrService,public users:UserService) { }

  createFormContactUs :FormGroup= new FormGroup({
    name:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required,Validators.email]),
    message:new FormControl('',Validators.required),
    phonE_NUMBER:new FormControl('',Validators.required),
  })
  createFormTestimonial :FormGroup= new FormGroup({
    Rating:new FormControl('',Validators.required),
    Opinion:new FormControl('',Validators.required),
    Status:new FormControl('',Validators.required),
    USER_ID:new FormControl('',Validators.required),
  })
  
  saveDataContactUs()
  {
    this.home.createContactus(this.createFormContactUs.value);
  }
  opendialogTestimonial() {
    //this.dialog.open()
  }
  ngOnInit(): void {
    let user:any= localStorage.getItem('user');
    user = JSON.parse(user);
    this.home.getHome();
    this.toster.success('Welcome '+user.first_name);
    this.home.getAboutUs();
    this.users.getAllUsers();
    this.home.getAllTestimonial();
  }
  saveDataTestimonial()
  {
    this.home.createTestimonial(this.createFormTestimonial.value);
  }
  uploadFile(file:any){
    if(file.length==0)
    return;
    let fileToUpload=<File>file[0]//the first image 
    const formdata= new FormData();
    formdata.append('file',fileToUpload,fileToUpload.name);
    this.home.uploadAttachmentHome(formdata);
  }


}
