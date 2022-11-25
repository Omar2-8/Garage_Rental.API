import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-garage',
  templateUrl: './user-garage.component.html',
  styleUrls: ['./user-garage.component.css']
})
export class UserGarageComponent implements OnInit {

  constructor() { }
  createFormContactUs :FormGroup= new FormGroup({
    name:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required,Validators.email]),
    message:new FormControl('',Validators.required),
    phonE_NUMBER:new FormControl('',Validators.required),
  })
  ngOnInit(): void {
  }

}
