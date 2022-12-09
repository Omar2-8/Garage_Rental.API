import { HomeService } from './../../Services/home.service';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import {MatDialog, MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-about-us-dash',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  // address
  // phonE_NUMBER
  // message
  // email
  // name
  // id
  first = 0;
  rows = 10;
  constructor(public home:HomeService,private dialog: MatDialog) { }
  @ViewChild('callUpdatDailog') callUpdate!:TemplateRef<any>
  updateForm :FormGroup= new FormGroup({
    id:new FormControl(),
    name:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required,Validators.email]),
    message:new FormControl('',Validators.required),
    phonE_NUMBER:new FormControl('',Validators.required),
    address:new FormControl('',Validators.required),
  })
  ngOnInit(): void {
    this.home.getAboutUs();
  }
  //Update
  p_data :any={};
  openUpdateDailog(obj:any){
    console.log(obj);
    this.p_data={
      id:obj.id,
      name:obj.name,
      email:obj.email,
      message:obj.message,
      phonE_NUMBER:obj.phonE_NUMBER,
      address:obj.address
    }
    this.updateForm.controls['id'].setValue(this.p_data.id);
    this.dialog.open(this.callUpdate);
  
    }
    saveData(){
      this.home.updateAboutus(this.updateForm.value);
    }

    //for table
    next() {
      this.first = this.first + this.rows;
    }
    prev() {
      this.first = this.first - this.rows;
    }
    reset() {
      this.first = 0;
    }
    isLastPage(): boolean {
      return this.home.Aboutus
        ? this.first === this.home.Aboutus.length - this.rows
        : true;
    }
    isFirstPage(): boolean {
      return this.home.Aboutus ? this.first === 0 : true;
    }
}
