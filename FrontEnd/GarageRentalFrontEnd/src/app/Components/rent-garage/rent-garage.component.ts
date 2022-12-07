import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-rent-garage',
  templateUrl: './rent-garage.component.html',
  styleUrls: ['./rent-garage.component.css']
})
export class RentGarageComponent implements OnInit {

  @ViewChild('callDeleteDailog') callDelete!:TemplateRef<any>;
  @ViewChild('callCreateDailog') callCreateRent!: TemplateRef<any>;
  garageid :any;
  constructor(public userService:UserService,public dialog: MatDialog,private route: ActivatedRoute) {
   this.garageid =this.route.snapshot.params['id'];
   }

  
  createForm: FormGroup = new FormGroup({

    starT_TIME: new FormControl('', Validators.required),
    enD_TIME: new FormControl('', Validators.required),
    garagE_ID: new FormControl('', Validators.required),
    useR_ID: new FormControl('', Validators.required),
    
    
  });

   user:any;
  ngOnInit(): void {
    this.userService.getGarageId(this.garageid);
   this.user = localStorage.getItem('user');
    this.user = JSON.parse(this.user);
    this.userService.getUserId(this.user.USER_ID);

  }


  openCreateDailog() {
    this.dialog.open(this.callCreateRent);
    
  }
  saveData() {
    debugger
    this.createForm.value.garagE_ID=this.garageid;
    this.createForm.value.useR_ID=this.user.USER_ID;
    this.userService.createRent(this.createForm.value);
  }
 
  openDeleteDailog(id: number) {
    const dialogRef = this.dialog.open(this.callDelete);
    dialogRef.afterClosed().subscribe((result) => {
      if (result != undefined) {
        if (result == 'yes') {
          this.userService.deleteRent(id);
        } else if (result == 'no') console.log('thank you ');
      }
    });
  }


}
