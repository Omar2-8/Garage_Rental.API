import { Router } from '@angular/router';
import { HomeService } from './../../Services/home.service';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  constructor(public home:HomeService) { }

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
    // this.home.getAll();
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
