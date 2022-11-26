import { GarageService } from './../../Services/garage.service';
import { Garage } from './../../Models/garage.model';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-garage',
  templateUrl: './list-garage.component.html',
  styleUrls: ['./list-garage.component.css']
})
export class ListGarageComponent implements OnInit {
 markerPositions: google.maps.LatLngLiteral[] = [];
   display: any;
val: any;

  constructor(private garageService:GarageService) { }

  ngOnInit(): void {
  }

  mode=["Available","NotAvailable"];
  rangeValues!:number[]
  garageModel:Garage={
    gARAGE_ID: 0,
    gARAGE_NAME: '',
    latitude: '',
    longitude: '',
    image1: 'test',
    image2: 'test',
    aVAILABLE_FROM: 0,
    aVAILABLE_TO: 0,
    rENT_PRICE: 0,
    street: '',
    buildinG_NUMBER: 0,
    status: 'test',
    gARAGE_MODE: ''
    // uSER_ID: 0,
    // rents: []
  };


  garageForm=new FormGroup({

    name:new FormControl(''),
    from:new FormControl('',Validators.required),
    to:new FormControl('',Validators.required),
    price:new FormControl('',Validators.required),
    street:new FormControl('',Validators.required),
    building:new FormControl('',Validators.required),
    mode:new FormControl('',Validators.required),
    status:new FormControl('',Validators.required),


  });



   center: google.maps.LatLngLiteral = {
        lat: 31,
        lng: 36
    };
    zoom = 7;
     markerOptions: google.maps.MarkerOptions = {
        draggable: false
    };

    addMarker(event: google.maps.MapMouseEvent) {

        if (event.latLng != null)
      {
        this.markerPositions[0]=(event.latLng.toJSON());
        console.log(this.markerPositions[0]);

}

    }

    saveInfo(){
      debugger

      this.garageModel.gARAGE_NAME=""+this.garageForm.value.name;

    this.garageModel.rENT_PRICE=Number(this.garageForm.value.price);
    this.garageModel.street=""+this.garageForm.value.street ;
    this.garageModel.buildinG_NUMBER=Number(this.garageForm.value.building);
    this.garageModel.latitude=""+this.markerPositions[0]["lat"];
    this.garageModel.longitude=""+this.markerPositions[0]["lng"];


    }

    saveGarage(form: FormGroup): void{

      console.log('Valid?', form.valid);
      debugger

       this.saveInfo();


    this.garageService.addGarage(this.garageModel)
    .subscribe({
      next:()=>{
        console.log("adding Garagee succeful");

      },
      error:(er)=>{
        console.log(er);

      }
    })




    }

    uploadImage(file:any){
      if(file.length==0)
      return;
      let fileToUpload=<File>file[0];//the first image
      const formdata= new FormData();
      formdata.append('file',fileToUpload,fileToUpload.name);
    }

}
