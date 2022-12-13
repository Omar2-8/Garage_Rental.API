import { AdminService } from 'src/app/Services/admin.service';
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
  @ViewChild('callCarDailog') callCarRent!: TemplateRef<any>;
  garageid :any;
  userid:any;
  viR:Visa={
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
  constructor(public userService:UserService,public adminService:AdminService,public dialog: MatDialog,private route: ActivatedRoute,private toastr: ToastrService) {
   this.garageid =this.route.snapshot.params['id'];
   }

  
  createForm: FormGroup = new FormGroup({

    starT_TIME: new FormControl('', Validators.required),
    enD_TIME: new FormControl('', Validators.required),
    garagE_ID: new FormControl('', Validators.required),
    useR_ID: new FormControl('', Validators.required),
    
    
  });
  createPaym: FormGroup = new FormGroup({

    paY_AMOUNT: new FormControl('', Validators.required),
    garagE_NAME: new FormControl('', Validators.required),
    paY_DATE: new FormControl('', Validators.required),
    commissioN_RATE: new FormControl('', Validators.required),
    useR_ID: new FormControl('', Validators.required),
    visA_ID: new FormControl('', Validators.required),
    renT_ID: new FormControl('', Validators.required),
    
    
  });
  ChangeAmount: FormGroup = new FormGroup({
    
    visA_NUMBER:new FormControl('',Validators.required),
    visA_AMOUNT: new FormControl('', Validators.required),
  });
  CheckVisa: FormGroup = new FormGroup({
    
    visA_NUMBER:new FormControl('',Validators.required),
    cvC_CVV: new FormControl('', Validators.required),
  });
  CheckCar: FormGroup = new FormGroup({
    caR_TYPE: new FormControl(),
    caR_PLATE: new FormControl(),
  });


  p_data_c: any = {};


   user:any;
  ngOnInit(): void {
    this.userService.getSingleGarageId(this.garageid);
    this.adminService.getAllRents();
    
   this.user = localStorage.getItem('user');
    this.user = JSON.parse(this.user);
    this.userid=this.user.USER_ID;
  }
  
 
  openCreateDailog() {
    debugger
    
     this.dialog.open(this.callCreateRent);
  }




  openVisaDailog() {
    this.dialog.open(this.callVisaRent);
    this.userService.getAllVisa();
  }
  visa_t:any;
  
  Visa() {
  
    debugger;
    let num:number=this.CheckVisa.value.visA_NUMBER;
    let cvc:number=this.CheckVisa.value.cvC_CVV;
    if(num!=0 &&cvc!=0){
  
   this.visa_t= this.userService.visa.filter(x=>x.visA_NUMBER==num &&x.cvC_CVV==cvc);
  
   if(this.visa_t.length!=0){
   this.toastr.success('The visa has been selected! Visa Number is :'+num);}
   else
   {
    this.toastr.error('The visa entered is incorrect!');
   }
   }else{
    this.toastr.error('Please Add Visa For rent!');
   }

    
  }
  openCarDailog() {
    
    this.dialog.open(this.callCarRent);
    this.userService.getListCarId(this.userid);
    
  }
  
  temb_car:any;
  Car() {
    debugger
    let cType:string=this.CheckCar.value.caR_TYPE;
    let cPlate:string=this.CheckCar.value.caR_PLATE;
    if(cType!=null &&cPlate!=null){
    this.temb_car= this.userService.car.filter(x=>x.caR_TYPE==cType&&x.caR_PLATE==cPlate);
    if(this.temb_car.length!=0){
      this.toastr.success('The Car Has Been Selected! Car: '+cType+' Car Plate '+cPlate);
    }
    else{
      this.toastr.error('The Car entered is incorrect!');
    }
  }
    else{
      this.toastr.error('Please Choose You Car For Rent!');
  }
}
temp_r:any;
  saveData() {
   
    debugger
    this.createForm.value.garagE_ID=parseInt(this.garageid)
     this.createForm.value.useR_ID=parseInt(this.userid)
    
    if(this.userService.garage.garagE_MODE !='unavailable'){
      if(this.userService.garage.availablE_FROM <=this.createForm.value.starT_TIME && this.userService.garage.availablE_TO >=this.createForm.value.enD_TIME ){
      if(this.temb_car!=undefined){
        if( this.visa_t!=undefined){
        if(this.visa_t[0].visA_AMOUNT>this.userService.garage.renT_PRICE*(this.createForm.value.enD_TIME-this.createForm.value.starT_TIME)){
          this.ChangeAmount.value.visA_NUMBER=this.visa_t[0].visA_NUMBER;
          this.ChangeAmount.value.visA_AMOUNT=this.visa_t[0].visA_AMOUNT-this.userService.garage.renT_PRICE*(this.createForm.value.enD_TIME-this.createForm.value.starT_TIME);
       
          
          {//payment create
            
            let uid:number=parseInt(this.userid);
            let gid:number=parseInt(this.garageid);
    
            this.temp_r= this.adminService.rent.pop();
            
 
          this.createPaym.value.paY_AMOUNT=this.visa_t[0].visA_AMOUNT-this.userService.garage.renT_PRICE*(this.createForm.value.enD_TIME-this.createForm.value.starT_TIME);
          this.createPaym.value.garagE_NAME=this.userService.garage.garagE_NAME; 
          this.createPaym.value.paY_DATE=this.temp_r.renT_DATE.split('T')[0];
          this.createPaym.value.commissioN_RATE=10;
          this.createPaym.value.useR_ID=parseInt(this.userid);
          this.createPaym.value.visA_ID=this.visa_t[0].visA_ID;
          this.createPaym.value.renT_ID=this.temp_r.renT_ID;

          this.userService.ChangeAmountVisa(this.ChangeAmount.value);
          this.userService.createRent(this.createForm.value);
          this.userService.createpay(this.createPaym.value);
        }//end payment create

        }
          else{
            this.toastr.error('Amount of visa not enoug ');
          }
  }
  else
  this.toastr.error('Please Add Visa For Rent ');

  }
  else
  this.toastr.error('Please Add Car For Rent ');
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
