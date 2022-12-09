import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Visa } from 'src/app/Models/visa.model';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-rent-garage',
  templateUrl: './rent-garage.component.html',
  styleUrls: ['./rent-garage.component.css']
})
export class RentGarageComponent implements OnInit {

  @ViewChild('callDeleteDailog') callDelete!:TemplateRef<any>;
  @ViewChild('callCreateDailog') callCreateRent!: TemplateRef<any>;
  @ViewChild('callVisaDailog') callVisaRent!: TemplateRef<any>;
  garageid :any;
  userid:any;
  visA_NUMBER:Visa={
    visA_ID: 0,
    visA_NAME: '',
    visA_NUMBER: 0,
    visA_AMOUNT: 0,
    cvC_CVV: 0
  };
  v:any={
    visA_ID: 0,
    visA_AMOUNT: 0,
  };
  constructor(public userService:UserService,public dialog: MatDialog,private route: ActivatedRoute,private toastr: ToastrService) {
   this.garageid =this.route.snapshot.params['id'];
   }

  
  createForm: FormGroup = new FormGroup({

    starT_TIME: new FormControl('', Validators.required),
    enD_TIME: new FormControl('', Validators.required),
    garagE_ID: new FormControl('', Validators.required),
    useR_ID: new FormControl('', Validators.required),
    
    
  });
  ChangeAmount: FormGroup = new FormGroup({
    
    visA_NUMBER:new FormControl(''),
    visA_AMOUNT: new FormControl('', Validators.required),
  });
  p_data_c: any = {};


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
  openVisaDailog() {
    this.dialog.open(this.callVisaRent);
    this.userService.getAllVisa();
  }
  Visa(num:number) {
    this.userService.getVisaId(num);
  }
  Car() {
    this.userService.getCarId(this.userService.car2.caR_ID);
  }

  saveData() {
    debugger
    this.createForm.value.garagE_ID=parseInt(this.garageid)
     this.createForm.value.useR_ID=parseInt(this.userid)
    
    if(this.userService.garage.garagE_MODE !='unavailable'){
      if(this.userService.garage.availablE_FROM <=this.createForm.value.starT_TIME && this.userService.garage.availablE_TO >=this.createForm.value.enD_TIME ){
      if( this.userService.car2.caR_ID!=""){
        if( this.ChangeAmount.value.visA_NUMBER!=""){
        if(this.userService.visa.visA_AMOUNT>this.userService.garage.renT_PRICE*(this.createForm.value.enD_TIME-this.createForm.value.starT_TIME)){
          this.ChangeAmount.value.visA_AMOUNT=this.userService.visa.visA_AMOUNT-this.userService.garage.renT_PRICE*(this.createForm.value.enD_TIME-this.createForm.value.starT_TIME);
          
          this.userService.ChangeAmountVisa(this.ChangeAmount.value)
          this.userService.createRent(this.createForm.value);}
          else{
            this.toastr.error('Amount of visa not enoug ');
          }
  }
  else
  this.toastr.error('Please Add Visa For Rent ');
}
else
this.toastr.error('Please Select Your Car To Rent');
  }
  else
  this.toastr.error('The time of rent garage is not available');
}
  else
   this.toastr.error('the garage is rented (Unavailable)');
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
