import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  constructor(public users:UserService,public dialog: MatDialog,private router:Router) {}
  @ViewChild('callDeleteDailog') callDelete!:TemplateRef<any>
  @ViewChild('callUpdatDailog') callUpdate!:TemplateRef<any>
  UpdateProfile :FormGroup= new FormGroup({
    useR_ID:new FormControl(),
    firsT_NAME:new FormControl('',Validators.required),
    lasT_NAME:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(8)]),
    phonenumber:new FormControl('',Validators.required),
    useR_IMAGE:new FormControl(),
    useR_IDENTITY:new FormControl('',Validators.required),
    roleS_ID:new FormControl(),
  })

  ngOnInit(): void {
    let user:any= localStorage.getItem('user');
    user = JSON.parse(user);
    this.users.getUserId(user.USER_ID);
  }

  p_data :any={};
  openUpdateDailog(obj:any){
    console.log(obj);
    this.p_data={
      useR_ID:obj.useR_ID,
      firsT_NAME:obj.firsT_NAME,
      lasT_NAME:obj.lasT_NAME,
      email:obj.email,
      password:obj.password,
      phonenumber:obj.phonenumber,
      useR_IMAGE:obj.useR_IMAGE,
      useR_IDENTITY:obj.useR_IDENTITY,
      roleS_ID:obj.roleS_ID,
    }
    this.UpdateProfile.controls['useR_ID'].setValue(this.p_data.useR_ID);
    this.dialog.open(this.callUpdate);
    }
    saveDataProfile(){
      this.users.updateUser(this.UpdateProfile.value);
    }
    uploadFile(file:any){
      if(file.length==0)
      return;
      let fileToUpload=<File>file[0];//the first image 
      const formdata= new FormData();
      formdata.append('file',fileToUpload,fileToUpload.name);
      this.users.uploadAttachmentUser(formdata);
    }

    openDeleteDailog(id:number)
    {
      const dialogRef=  this.dialog.open(this.callDelete);
      dialogRef.afterClosed().subscribe((result)=>{
        if(result!=undefined)
        {
          if(result=='yes')
          {
            this.users.deleteUser(id);
            this.router.navigate(["/security/login"]);
          }
            else if(result=='no')
            console.log('thank you '); 
        }
      })
    }

}
