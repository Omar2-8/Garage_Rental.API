import { Router } from '@angular/router';
import { HomeService } from './../../Services/home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,public home:HomeService) { }
 markerPositions: google.maps.LatLngLiteral[] = [];
  display: any;

  ngOnInit(): void {
    //this.home.getAll();
  }

    center: google.maps.LatLngLiteral = {
        lat: 31,
        lng: 36
    };
    zoom = 7;
     markerOptions: google.maps.MarkerOptions = {
        draggable: false
    };

    addMarker(event: google.maps.MapMouseEvent) {

        if (event.latLng != null) this.markerPositions.push(event.latLng.toJSON());
        console.log(this.markerPositions.length);

    }


}
