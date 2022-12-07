import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from 'src/app/Services/home.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(public home:HomeService) { }
  
  createFormContactUs :FormGroup= new FormGroup({
    name:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required,Validators.email]),
    message:new FormControl('',Validators.required),
    phonE_NUMBER:new FormControl('',Validators.required),
    
  })
  ngOnInit(): void {
  }
  saveDataContactUs()
  {
    this.home.createContactus(this.createFormContactUs.value);
  }
}
