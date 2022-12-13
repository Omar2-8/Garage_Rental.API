import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {TableModule} from 'primeng/table';
import { MatDialog } from '@angular/material/dialog';

import { AdminService } from './../../Services/admin.service';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { GarageService } from './../../Services/garage.service';
import { GarageModel } from './../../Models/garage.model';
import { ScrollStrategy, ScrollStrategyOptions } from '@angular/cdk/overlay';

@Component({
  selector: 'app-user-manage-garage',
  templateUrl: './user-garage.component.html',
  styleUrls: ['./user-garage.component.css']
})
export class UserGarageComponent implements OnInit {
  
  isreeateDialogOpen: boolean = false;
  city!: string;
  first = 0;
  rows = 10;
  markerPositions: google.maps.LatLngLiteral[] = [];
  display: any;
  val: any;
  scrollStrategy: ScrollStrategy;

  
  constructor(public user:UserService,private dialog: MatDialog,private router:Router,private garageService: GarageService,public admin: AdminService,private readonly sso: ScrollStrategyOptions) {
    this.scrollStrategy = this.sso.noop();
   }
 
  @ViewChild('callUpdatDailog') callUpdate!: TemplateRef<any>;
  @ViewChild('ChangeModeOfGrage') Changemo!: TemplateRef<any>;
  @ViewChild('callCreteDailog') CreateGarage!: TemplateRef<any>;
  @ViewChild('callDeleteDailog') callDelete!: TemplateRef<any>;
  @ViewChild('callCreateDailog') callCreate!: TemplateRef<any>;
  userid:any;
  updateForm: FormGroup = new FormGroup({
    garagE_ID: new FormControl(),
    garagE_NAME: new FormControl(''),
    latitude: new FormControl(''),
    longitude: new FormControl(''),
    image1: new FormControl(),
    image2: new FormControl(),
    availablE_FROM: new FormControl('', Validators.required),
    availablE_TO: new FormControl('', Validators.required),
    renT_PRICE: new FormControl('', Validators.required),
    street: new FormControl('', Validators.required),
    buildinG_NUMBER: new FormControl('', Validators.required),
    garagE_MODE: new FormControl('', Validators.required),
    useR_ID: new FormControl('', Validators.required),
  });
  ChangeStatus: FormGroup = new FormGroup({
    garagE_ID: new FormControl(),
    status: new FormControl(''),
    useR_ID: new FormControl(''),
  });
  ChangeMode: FormGroup = new FormGroup({
    garagE_ID: new FormControl(),
    garagE_MODE: new FormControl(''),
    useR_ID: new FormControl(''),
  });
  garageForm2 = new FormGroup({
  
    garagE_NAME: new FormControl('', Validators.required),
    latitude: new FormControl(''),
    longitude: new FormControl(''),
    renT_PRICE: new FormControl('', Validators.required),
    street: new FormControl('', Validators.required),
    image1: new FormControl(),
    image2: new FormControl(),
    buildinG_NUMBER: new FormControl('', Validators.required),
    useR_ID: new FormControl(),
  });

  saveMode(){
    this.user.ChangeModeOfGrage(this.ChangeMode.value);
  }
  saveData() {
    debugger;
    this.updateForm.value.latitude= this.p_data_c.latitude;
    this.updateForm.value.longitude= this.p_data_c.longitude;
    this.updateForm.value.useR_ID=parseInt(this.userid);
    //this.garageModel.latitude = this.p_data.latitude;
    //this.garageModel.longitude = this.p_data.longitude;

    // this.garageService
    //   .updateGarage(this.garageModel.garagE_ID, this.garageModel)
    //   .subscribe({
    //     next(value) {
    //       console.log(value);
    //     },
    //   });

    this.user.updateGarage(this.updateForm.value);
    // this.admin.updateGarage();
  }

 
  savetestgarage(){
    this.garageForm2.value.latitude = '' + this.markerPositions[0]['lat'];
      this.garageForm2.value.longitude = '' + this.markerPositions[0]['lng'];
      this.updateForm.value.useR_ID=parseInt(this.userid);
      this.user.createGarage(this.garageForm2.value)
  }
  

 
 
  ngOnInit(): void {
    let user:any= localStorage.getItem('user');
    user = JSON.parse(user);
    this.user.getGarageId(user.USER_ID)
    this.userid=user.USER_ID;
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
  p_data_c: any = {};
  openChangeGarageModeDailog(obj: any) {
    debugger;
    console.log(obj);
    this.p_data_c = {
      garagE_ID: obj.garagE_ID,
      garagE_MODE: obj.garagE_MODE,
      useR_ID: obj.useR_ID,
    };

    this.ChangeMode.controls['garagE_ID'].setValue(this.p_data_c.garagE_ID);
    this.dialog.open(this.Changemo);
  }
  openUpdateDailog(obj: {
    garagE_ID: any;
    garagE_NAME: any;
    image1: any;
    image2: any;
    availablE_FROM: any;
    availablE_TO: any;
    latitude: any;
    longitude: any;
    renT_PRICE: any;
    street: any;
    buildinG_NUMBER: any;
    garagE_MODE: any;
    useR_ID: any;
    staus: any;
  }) {
    debugger;
    console.log(obj);
    this.p_data_c = {
      garagE_ID: obj.garagE_ID,
      garagE_NAME: obj.garagE_NAME,
      latitude: obj.latitude,
      longitude: obj.longitude,
      image1: obj.image1,
      image2: obj.image2,
      availablE_FROM: obj.availablE_FROM,
      availablE_TO: obj.availablE_TO,
      renT_PRICE: obj.renT_PRICE,
      street: obj.street,
      buildinG_NUMBER: obj.buildinG_NUMBER,
      garagE_MODE: obj.garagE_MODE,
      useR_ID: obj.useR_ID,
      status: obj.staus,
    };
    this.updateForm.controls['garagE_ID'].setValue(this.p_data_c.garagE_ID);
    this.dialog.open(this.callUpdate);
  }

  //upload images
  uploadFile1(file: any) {
    debugger;
    if (file.length == 0) return;
    let fileToUpload = <File>file[0]; //the first image
    const formdata = new FormData();
    formdata.append('file', fileToUpload, fileToUpload.name);
    //this.garageModel.image1 = fileToUpload.name;
    this.user.uploadAttachmentGarage(formdata);
  }
  uploadFile2(file: any) {
    if (file.length == 0) return;
    let fileToUpload = <File>file[0]; //the first image
    const formdata = new FormData();
    formdata.append('file', fileToUpload, fileToUpload.name);
    //this.garageModel.image2 = fileToUpload.name;
    this.user.uploadAttachmentGarage2(formdata);
  }
  
  


//create
openCreateDailog() {
  this.dialog.open(this.callCreate);
}
Mode: any[] = ['available', 'unavailable'];
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

