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

  constructor() { }

  ngOnInit(): void {
  }

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
        this.markerPositions[0]=(event.latLng.toJSON());


    }

    saveGarage(){

    }

}
