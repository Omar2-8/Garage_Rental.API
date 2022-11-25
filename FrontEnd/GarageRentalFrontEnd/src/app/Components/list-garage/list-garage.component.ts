import { GarageService } from './../../Services/garage.service';
import { Garage } from './../../Models/garage.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
  garageModel!:Garage;


  garageForm=new FormGroup({

    name:new FormControl('',Validators.required),
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

    saveGarage(){
      debugger


    this.garageModel.AVAILABLE_FROM=this.garageForm.value.from as unknown  as number;
    this.garageModel.AVAILABLE_TO=this.garageForm.value.to as unknown as  number;
    this.garageModel.RENT_PRICE=this.garageForm.value.price as unknown as  number;
    this.garageModel.Street=this.garageForm.value.street as string;
    this.garageModel.BUILDING_NUMBER=this.garageForm.value.building as unknown as number;
    this.garageModel.Latitude=this.markerPositions[0]["lat"] as unknown as string;
    this.garageModel.Longitude=this.markerPositions[0]["lng"] as unknown as string;
    this.garageModel.GARAGE_MODE=this.garageForm.value.mode as string;
 this.garageModel.GARAGE_NAME=this.garageForm.value.name as string;debugger
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

}
