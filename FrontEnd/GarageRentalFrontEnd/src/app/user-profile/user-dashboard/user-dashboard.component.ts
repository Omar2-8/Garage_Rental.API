import { UserService } from './../../Services/user.service';
import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {


  constructor(public users:UserService,public dialog: MatDialog) {}
  
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


  @Input() useR_ID:number=0;
  @Input() firsT_NAME :string='N/A';
  @Input() lasT_NAME :string='N/A';
  @Input() email :string='N/A';
  @Input() password :number=0;
  @Input() phonenumber :number=0;
  @Input() useR_IMAGE: string|undefined;
  @Output() openProfile =new EventEmitter();
  ngOnInit(): void {
  }


  goToProfile()
  {
    //this.home.getCourseById(this.courseid)
    this.users.getUserId(4);
    this.openProfile.emit();

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
    this.UpdateProfile.controls['id'].setValue(this.p_data.id);
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






}
