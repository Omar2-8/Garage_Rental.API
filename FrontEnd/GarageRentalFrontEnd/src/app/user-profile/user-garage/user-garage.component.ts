import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {TableModule} from 'primeng/table';
import { MatDialog } from '@angular/material/dialog';

import { AdminService } from './../../Services/admin.service';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { GarageService } from './../../Services/garage.service';
import { GarageModel } from './../../Models/garage.model';

@Component({
  selector: 'app-user-manage-garage',
  templateUrl: './user-garage.component.html',
  styleUrls: ['./user-garage.component.css']
})
export class UserGarageComponent implements OnInit {
  markerPositions: google.maps.LatLngLiteral[] = [];
  display: any;
  val: any;

  first = 0;
  rows = 10;
  constructor(public user:UserService,private dialog: MatDialog,private router:Router,private garageService: GarageService,public admin: AdminService) { }
  @ViewChild('callDeleteDailog') callDelete!: TemplateRef<any>;
  @ViewChild('callCreteDailog') CreateGarage!: TemplateRef<any>;
  @ViewChild('callUpdatDailog') callUpdate!: TemplateRef<any>;
  updateForm: FormGroup = new FormGroup({
    garagE_ID: new FormControl(),
    garagE_NAME: new FormControl(''),
    latitude: new FormControl(''),
    longitude: new FormControl(''),
    image1: new FormControl(''),
    image2: new FormControl(''),
    availablE_FROM: new FormControl('', Validators.required),
    availablE_TO: new FormControl('', Validators.required),
    renT_PRICE: new FormControl('', Validators.required),
    street: new FormControl('', Validators.required),
    buildinG_NUMBER: new FormControl('', Validators.required),
    garagE_MODE: new FormControl('', Validators.required),
    useR_ID: new FormControl('', Validators.required),
  });


  ngOnInit(): void {
    let user:any= localStorage.getItem('user');
    user = JSON.parse(user);
    this.user.getGarageId(user.USER_ID)
  }
  openDeleteDailog(id: number) {
    const dialogRef = this.dialog.open(this.callDelete);
    dialogRef.afterClosed().subscribe((result) => {
      if (result != undefined) {
        if (result == 'yes') {
          this.user.deleteGarage(id);
        } else if (result == 'no') console.log('thank you ');
      }
    });
  }
//Update
  p_data: any = {};
  openUpdateDailog(obj: { garagE_ID: any; garagE_NAME: any; image1: any; image2: any; availablE_FROM: any; availablE_TO: any; renT_PRICE: any; street: any; buildinG_NUMBER: any; garagE_MODE: any; useR_ID: any; }) {
    console.log(obj);
    this.p_data = {
      garagE_ID: obj.garagE_ID,
      garagE_NAME: obj.garagE_NAME,
      // latitude: obj.markerPositions[0]['lat'],
      // longitude: obj.markerPositions[0]['lng'],
      image1: obj.image1,
      image2: obj.image2,
      availablE_FROM: obj.availablE_FROM,
      availablE_TO: obj.availablE_TO,
      renT_PRICE: obj.renT_PRICE,
      street: obj.street,
      buildinG_NUMBER: obj.buildinG_NUMBER,
      garagE_MODE: obj.garagE_MODE,
      useR_ID: obj.useR_ID,
    };
    this.updateForm.controls['garagE_ID'].setValue(this.p_data.garagE_ID);
    this.dialog.open(this.callUpdate);
  }
  
  saveData() {
    this.user.updateGarage(this.updateForm.value);
    // this.admin.updateGarage();
  }


//create
openCreateDailog() {
  this.dialog.open(this.CreateGarage);
}
mode = ['Available', 'NotAvailable'];
rangeValues!: number[];
garageModel: GarageModel = {
  garagE_ID: 0,
  garagE_NAME: '',
  latitude: '',
  longitude: '',
  image1: 'test',
  image2: 'test',
  availablE_FROM: 0,
  availablE_TO: 0,
  renT_PRICE: 0,
  street: '',
  buildinG_NUMBER: 0,
  status: 'test',
  garagE_MODE: '',
  // uSER_ID: 0,
  // rents: []
};
garageForm1 = new FormGroup({
  name: new FormControl(''),
  from: new FormControl('', Validators.required),
  to: new FormControl('', Validators.required),
  price: new FormControl('', Validators.required),
  street: new FormControl('', Validators.required),
  building: new FormControl('', Validators.required),
  mode: new FormControl('', Validators.required),
  status: new FormControl('', Validators.required),
});

center: google.maps.LatLngLiteral = {
  lat: 31,
  lng: 36,
};
zoom = 7;
markerOptions: google.maps.MarkerOptions = {
  draggable: false,
};

addMarker(event: google.maps.MapMouseEvent) {
  if (event.latLng != null) {
    this.markerPositions[0] = event.latLng.toJSON();
    console.log(this.markerPositions[0]);
  }
}

saveInfo1() {
  debugger;
  this.garageModel.garagE_NAME = '' + this.garageForm1.value.name;
  this.garageModel.renT_PRICE = Number(this.garageForm1.value.price);
  this.garageModel.street = '' + this.garageForm1.value.street;
  this.garageModel.buildinG_NUMBER = Number(this.garageForm1.value.building);
  this.garageModel.latitude = '' + this.markerPositions[0]['lat'];
  this.garageModel.longitude = '' + this.markerPositions[0]['lng'];
  let user:any= localStorage.getItem('user');
  user = JSON.parse(user);
  this.garageModel.useR_ID=Number(user.USER_ID);
}
saveGarage(form: FormGroup): void {
  console.log('Valid?', form.valid);
  debugger;
  this.saveInfo1();
  this.garageService.addGarage(this.garageModel).subscribe({
    next: () => {
      console.log('adding Garagee succeful');
    },
    error: (er) => {
      console.log(er);
    },
  });
}
//
uploadFile1(file:any){
  if(file.length==0)
  return;
  let fileToUpload=<File>file[0];//the first image 
  const formdata= new FormData();
  formdata.append('file',fileToUpload,fileToUpload.name);
  
  this.admin.uploadAttachmentGarage(formdata);
}
uploadFile2(file:any){
  if(file.length==0)
  return;
  let fileToUpload=<File>file[0];//the first image 
  const formdata= new FormData();
  formdata.append('file',fileToUpload,fileToUpload.name);
  
  this.admin.uploadAttachmentGarage2(formdata);
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
        return this.user.garage
          ? this.first === this.user.garage.length - this.rows
          : true;
      }
      isFirstPage(): boolean {
        return this.user.garage ? this.first === 0 : true;
      }
}

