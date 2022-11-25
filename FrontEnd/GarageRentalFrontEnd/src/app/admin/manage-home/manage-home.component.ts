
import { HomeService } from './../../Services/home.service';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-manage-home',
  templateUrl: './manage-home.component.html',
  styleUrls: ['./manage-home.component.css']
})
export class ManageHomeComponent implements OnInit {

  constructor(public home:HomeService,public dialog: MatDialog) { }

  @ViewChild('callUpdatDailog') callUpdate!:TemplateRef<any>
  UpdateHome :FormGroup= new FormGroup({
    id:new FormControl(),
    imagE_1:new FormControl(),
    titlE_1:new FormControl('',Validators.required),
    imagE_2:new FormControl(),
    titlE_2:new FormControl('',Validators.required),
    imagE_3:new FormControl(),
    titlE_3:new FormControl('',Validators.required),
    
  })


  ngOnInit(): void {
    this.home.getHome();
  }

  p_data :any={};
  openUpdateDailog(obj:any){
   
    console.log(obj);
    this.p_data={
      id:obj.id,
      imagE_1:obj.imagE_1,
      titlE_1:obj.titlE_1,
      imagE_2:obj.imagE_2,
      titlE_2:obj.titlE_2,
      imagE_3:obj.imagE_3,
      titlE_3:obj.titlE_3
  
    }
    this.UpdateHome.controls['id'].setValue(this.p_data.id);
    this.dialog.open(this.callUpdate);
  
    }
    saveDataHome(){
      this.home.updateHome(this.UpdateHome.value);
    }
    uploadFile(file:any){
      if(file.length==0)
      return;
      let fileToUpload=<File>file[0];//the first image 
      const formdata= new FormData();
      formdata.append('file',fileToUpload,fileToUpload.name);
      
      this.home.uploadAttachmentHome(formdata);
    }
    uploadFile1(file:any){
      if(file.length==0)
      return;
      let fileToUpload=<File>file[0];//the first image 
      const formdata= new FormData();
      formdata.append('file',fileToUpload,fileToUpload.name);
      
      this.home.uploadAttachmentHome1(formdata);
    }
    uploadFile2(file:any){
      if(file.length==0)
      return;
      let fileToUpload=<File>file[0];//the first image 
      const formdata= new FormData();
      formdata.append('file',fileToUpload,fileToUpload.name);
      
      this.home.uploadAttachmentHome2(formdata);
    }
}
