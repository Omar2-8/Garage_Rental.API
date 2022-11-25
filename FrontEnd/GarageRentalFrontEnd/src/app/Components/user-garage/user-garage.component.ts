import { AdminService } from './../../Services/admin.service';
import { HomeService } from './../../Services/home.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-garage',
  templateUrl: './user-garage.component.html',
  styleUrls: ['./user-garage.component.css']
})
export class UserGarageComponent implements OnInit {

  constructor(public admin:AdminService) { }
  createFormGarage :FormGroup= new FormGroup({
    garagE_NAME:new FormControl('',Validators.required),
    latitude:new FormControl('',Validators.required),
    longitude:new FormControl('',Validators.required),
    image1:new FormControl(),
    image2:new FormControl(),
    renT_PRICE:new FormControl('',Validators.required),
    status:new FormControl('',Validators.required),
    buildinG_NUMBER:new FormControl('',Validators.required),
    useR_ID:new FormControl('',Validators.required),
  })
  ngOnInit(): void {
  }

  saveDataContactUs()
  {
    this.admin.createGarage(this.createFormGarage.value);
  }
}
