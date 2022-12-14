import { GarageService } from './../../Services/garage.service';
import { GarageModel } from './../../Models/garage.model';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-garage',
  templateUrl: './list-garage.component.html',
  styleUrls: ['./list-garage.component.css'],
})
export class ListGarageComponent implements OnInit {
  markerPositions: google.maps.LatLngLiteral[] = [];
  display: any;
  val: any;

    
    constructor(private garageService: GarageService,public user: UserService,private toster: ToastrService) {}
userid:any;
  ngOnInit(): void {

    let user:any= localStorage.getItem('user');
    user = JSON.parse(user);
    this.user.getGarageId(user.USER_ID)
    this.userid=user.USER_ID;
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

  garageForm = new FormGroup({
    name: new FormControl(''),
    from: new FormControl('', Validators.required),
    to: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    street: new FormControl('', Validators.required),
    building: new FormControl('', Validators.required),
    mode: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
    user_ID: new FormControl(''),

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

  savetestgarage(){
    this.garageForm2.value.latitude = '' + this.markerPositions[0]['lat'];
      this.garageForm2.value.longitude = '' + this.markerPositions[0]['lng'];
      this.garageForm2.value.useR_ID=parseInt(this.userid);;
      this.user.createGarage(this.garageForm2.value)
  }
  saveInfo() {
    debugger;

    this.garageModel.garagE_NAME = '' + this.garageForm.value.name;

    this.garageModel.renT_PRICE = Number(this.garageForm.value.price);
    this.garageModel.street = '' + this.garageForm.value.street;
    this.garageModel.buildinG_NUMBER = Number(this.garageForm.value.building);
    this.garageModel.latitude = '' + this.markerPositions[0]['lat'];
    this.garageModel.longitude = '' + this.markerPositions[0]['lng'];
    let user:any= localStorage.getItem('user');
    user = JSON.parse(user);
    this.garageModel.useR_ID=Number(user.USER_ID);
  }

  saveGarage(form: FormGroup): void {
    console.log('Valid?', form.valid);
    debugger;

    this.saveInfo();

    this.garageService.addGarage(this.garageModel).subscribe({
      next: () => {
        this.toster.success('Created Garage successfuly!!');

        console.log('adding Garagee succeful');
      },
      error: (er) => {
        console.log(er);
      },
    });
  }

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
}
