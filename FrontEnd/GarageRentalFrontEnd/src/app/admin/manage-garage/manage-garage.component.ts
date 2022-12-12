import { UserService } from 'src/app/Services/user.service';
import { AdminService } from './../../Services/admin.service';
import { ScrollStrategy, ScrollStrategyOptions } from '@angular/cdk/overlay';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { GarageService } from './../../Services/garage.service';
import { GarageModel } from './../../Models/garage.model';
import { User } from 'src/app/Models/user.model';

import { Overlay } from '@angular/cdk/overlay';
@Component({
  selector: 'app-manage-garage',
  templateUrl: './manage-garage.component.html',
  styleUrls: ['./manage-garage.component.css'],
})
export class ManageGarageComponent implements OnInit {
  first = 0;
  rows = 10;
  markerPositions: google.maps.LatLngLiteral[] = [];
  display: any;
  val: any;
  UserData: User = {
    USER_ID: 0,
    FIRST_NAME: '',
    LAST_NAME: '',
    email: '',
    Password: '',
    Phonenumber: 0,
    USER_IMAGE: '',
    USER_IDENTITY: '',
    ROLES_ID: 0,
    Cars: [],
    Garages: [],
    Payments: [],
    Rents: [],
    Testimonials: [],
  };
  updateGarageModel: GarageModel = {
    garagE_ID: 0,
    garagE_NAME: '',
    latitude: '',
    longitude: '',
    image1: '',
    image2: '',
    availablE_FROM: 0,
    availablE_TO: 0,
    renT_PRICE: 0,
    street: '',
    buildinG_NUMBER: 0,
    status: '',
    garagE_MODE: '',
  };

  scrollStrategy: ScrollStrategy;

  constructor(
    public admin: AdminService,
    private dialog: MatDialog,
    private garageService: GarageService,
    public user: UserService,
    private readonly sso: ScrollStrategyOptions
  ) {
    this.scrollStrategy = this.sso.noop();
  }
  @ViewChild('callUpdatDailog') callUpdate!: TemplateRef<any>;
  @ViewChild('ChangeStatusOfGrage') ChangeStatuse!: TemplateRef<any>;
  @ViewChild('callCreteDailog') CreateGarage!: TemplateRef<any>;
  @ViewChild('callDeleteDailog') callDelete!: TemplateRef<any>;
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
  ChangeStatus: FormGroup = new FormGroup({
    garagE_ID: new FormControl(),
    status: new FormControl(''),
    useR_ID: new FormControl(''),
  });

  ngOnInit(): void {
    this.admin.getAllGarage();
  }
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
  p_data_c: any = {};
  openChangeStatDailog(obj: any) {
    debugger;
    console.log(obj);
    this.p_data_c = {
      garagE_ID: obj.garagE_ID,
      status: obj.status,
      useR_ID: obj.useR_ID,
    };

    this.ChangeStatus.controls['garagE_ID'].setValue(this.p_data_c.garagE_ID);
    this.dialog.open(this.ChangeStatuse);
  }
  onBasicUploadAuto(event: any) {
    //
  }

  //Update
  p_data: GarageModel = {
    garagE_ID: 0,
    garagE_NAME: '',
    latitude: '',
    longitude: '',
    image1: '',
    image2: '',
    availablE_FROM: 0,
    availablE_TO: 0,
    renT_PRICE: 0,
    street: '',
    buildinG_NUMBER: 0,
    status: '',
    garagE_MODE: '',
  };
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
    this.p_data = {
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
    this.updateForm.controls['garagE_ID'].setValue(this.p_data.garagE_ID);
    this.dialog.open(this.callUpdate);
  }

  saveData() {
    debugger;
    this.garageModel.latitude = this.p_data.latitude;
    this.garageModel.longitude = this.p_data.longitude;

    this.garageService
      .updateGarage(this.garageModel.garagE_ID, this.garageModel)
      .subscribe({
        next(value) {
          console.log(value);
        },
      });

    //this.user.updateGarage(this.updateForm.value);
    // this.admin.updateGarage();
  }
  saveDataUsers() {
    //getting user email
    this.user.getUserById(this.p_data_c.useR_ID).subscribe({
      next: (value) => {
        debugger;
        this.UserData = value;
        if (this.p_data_c.status == 'Accept') {
          this.admin.SendEmail(this.UserData.email, 'Accept');
        } else {
          this.admin.SendEmail(this.UserData.email, 'Reject');
        }
      },
    });
    this.admin.ChangeStatusOfGrage(this.ChangeStatus.value);
  }
  // location(){
  //   let user:any= localStorage.getItem('user');
  //   user = JSON.parse(user);
  //   this.user.getLongLetById(user.USER_ID);
  //   console.log( this.user.getLongLetById(user.USER_ID));

  // }
  openDeleteDailog(id: number) {
    const dialogRef = this.dialog.open(this.callDelete);
    dialogRef.afterClosed().subscribe((result) => {
      if (result != undefined) {
        if (result == 'yes') {
          this.admin.deleteGarage(id);
        } else if (result == 'no') console.log('thank you ');
      }
    });
  }

  uploadFile1(file: any) {
    debugger;
    if (file.length == 0) return;
    let fileToUpload = <File>file[0]; //the first image
    const formdata = new FormData();
    formdata.append('file', fileToUpload, fileToUpload.name);
    this.garageModel.image1 = fileToUpload.name;
    this.user.uploadAttachmentGarage(formdata);
  }
  uploadFile2(file: any) {
    if (file.length == 0) return;
    let fileToUpload = <File>file[0]; //the first image
    const formdata = new FormData();
    formdata.append('file', fileToUpload, fileToUpload.name);
    this.garageModel.image2 = fileToUpload.name;
    this.user.uploadAttachmentGarage2(formdata);
  }

  //* submit(){
  //  this.admin.createGarage(this.createForm.value);

  //   console.log(this.createForm.value);
  // }

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
    return this.admin.garage
      ? this.first === this.admin.garage.length - this.rows
      : true;
  }
  isFirstPage(): boolean {
    return this.admin.garage ? this.first === 0 : true;
  }
}
