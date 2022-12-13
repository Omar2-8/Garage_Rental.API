import { UserService } from './../../Services/user.service';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-cars',
  templateUrl: './user-cars.component.html',
  styleUrls: ['./user-cars.component.css']
})
export class UserCarsComponent implements OnInit {
  first = 0;
  rows = 10;
  constructor(public user:UserService,private dialog: MatDialog) { }
  @ViewChild('callDeleteDailog') callDelete!: TemplateRef<any>;
  @ViewChild('callCreteDailog') callCreatecar!: TemplateRef<any>;
  @ViewChild('callUpdatDailog') callUpdate!: TemplateRef<any>;

  createForm :FormGroup= new FormGroup({
    caR_TYPE:new FormControl('',Validators.required),
    caR_PLATE:new FormControl('',Validators.required),
    useR_ID:new FormControl(''),  
    
  })
  ngOnInit(): void {
    let user:any= localStorage.getItem('user');
    user = JSON.parse(user);
    this.user.getListCarId(user.USER_ID);
  }

  openCreateDailog(){
    this.dialog.open(this.callCreatecar);
  }
  saveCreate(){
    debugger;
    let users:any= localStorage.getItem('user');
    users = JSON.parse(users);
    this.createForm.value.useR_ID=parseInt(users.USER_ID);
    this.user.createCar(this.createForm.value);
  }
//Delete
  openDeleteDailog(id: number) {
    const dialogRef = this.dialog.open(this.callDelete);
    dialogRef.afterClosed().subscribe((result) => {
      if (result != undefined) {
        if (result == 'yes') {
          this.user.deleteCar(id);
        } else if (result == 'no') console.log('thank you ');
      }
    });
  }


//Update
  // p_data :any={};
  // openUpdateDailog(obj:any){
  //   console.log(obj);
  //   this.p_data={
  //     caR_ID:obj.caR_ID,
  //     caR_TYPE:obj.caR_TYPE,
  //     caR_PLATE:obj.caR_PLATE,
  //     useR_ID:obj.useR_ID
  //   }
  //   this.UpdateCar.controls['caR_ID'].setValue(this.p_data.caR_ID);
  //   this.dialog.open(this.callUpdate);
  //   }
  //   saveUpdate(){
  //     let user:any= localStorage.getItem('user');
  //     user = JSON.parse(user);
  //     this.UpdateCar.value.useR_ID=user.USER_ID
  //     this.user.updateCar(this.UpdateCar.value);
  //   }


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
      return this.user.car
        ? this.first === this.user.car.length - this.rows
        : true;
    }
    isFirstPage(): boolean {
      return this.user.car ? this.first === 0 : true;
    }
}
