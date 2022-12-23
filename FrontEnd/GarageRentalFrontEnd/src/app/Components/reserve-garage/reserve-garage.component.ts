import { UserService } from 'src/app/Services/user.service';
import { GarageModel } from './../../Models/garage.model';
import { GarageService } from './../../Services/garage.service';
import {
  Component,
  ElementRef,
  NgZone,
  OnInit,
  ViewChild,
} from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reserve-garage',
  templateUrl: './reserve-garage.component.html',
  styleUrls: ['./reserve-garage.component.css'],
})
export class ReserveGarageComponent implements OnInit {
  markerPositions: google.maps.LatLngLiteral[] = [];
  index!: google.maps.LatLngLiteral;
  serachMap!: string;
  zoom = 13;
  @ViewChild('search')
  public searchElementRef!: ElementRef;
  @ViewChild(GoogleMap)
  public map!: GoogleMap;
  latitude!: any;
  longitude!: any;
  center!: google.maps.LatLngLiteral;
  garages: GarageModel[] = [];
  garageCard!: GarageModel;
  showCardPanel: boolean = false;
  constructor(private ngZone: NgZone, private GarageService: GarageService,private user:UserService,private router:Router) {}

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
    debugger;
    this.GarageService.getGarageList().subscribe({
      next: (data: GarageModel[]) => {
        this.garages = data.filter(x=>x.status=="Accept");
        this.garages.forEach((element) => {
          var x = +element.latitude;
          var y = +element.longitude;
          this.index = {
            lat: x,
            lng: y,
          };
          this.markerPositions.push(this.index);
        });
      },
      error: (er) => {
        console.log(er);
      },
    });
    this.garages.forEach((element) => {
      this.index.lat = +element.latitude;
      this.index.lng = +element.longitude;
      this.markerPositions.push(this.index);
      console.log(11);
      console.log(this.index);
    });
  }
  ngAfterViewInit(): void {
    let autocomplete = new google.maps.places.Autocomplete(
      this.searchElementRef.nativeElement
    );

    this.map.controls[google.maps.ControlPosition.TOP_CENTER].push(
      this.searchElementRef.nativeElement
    );
    autocomplete.addListener('place_changed', () => {
      this.ngZone.run(() => {
        let place: google.maps.places.PlaceResult = autocomplete.getPlace();

        if (place.geometry === undefined || place.geometry === null) {
          return;
        }

        this.latitude = place.geometry.location?.lat();
        this.longitude = place.geometry.location?.lng();
        this.center = {
          lat: this.latitude,
          lng: this.longitude,
        };
        this.zoom = 10;
      });
    });
  }

  options: google.maps.MapOptions = {
    zoomControl: true,
    scrollwheel: true,
    disableDefaultUI: true,
    fullscreenControl: true,
    disableDoubleClickZoom: true,
    mapTypeId: 'hybrid',
    draggable: false,
    scaleControl: true,
  };

  showCard(marker: google.maps.LatLngLiteral): string {
    debugger;
    var x = marker.lat as unknown as string;
    var y = marker.lng as unknown as string;

    this.garageCard = this.garages.find(
      (item) => item.latitude == x && item.longitude == y
    ) as unknown as GarageModel;
    this.showCardPanel = true;

    console.log(this.garageCard);

    console.log(this.garageCard);

    return '';
  }

  rent(){
      this.router.navigateByUrl('/rent/'+this.garageCard.garagE_ID);

  }
}
