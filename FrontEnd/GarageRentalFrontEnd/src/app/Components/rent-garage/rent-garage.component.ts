import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  userid:any;
  constructor(public userService:UserService,public dialog: MatDialog,private route: ActivatedRoute,private toastr: ToastrService) {
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
    this.userService.getSingleGarageId(this.garageid);
    
   this.user = localStorage.getItem('user');
    this.user = JSON.parse(this.user);
    this.userid=this.user.USER_ID;
  }
  

  openCreateDailog() {
    this.dialog.open(this.callCreateRent);
    
  }
  saveData() {
    debugger
    if(this.userService.garage.garagE_MODE !='unavailable'){
    
    this.userService.createRent(this.createForm.value);
  }
  else
   this.toastr.error('the garage is rented ');
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
