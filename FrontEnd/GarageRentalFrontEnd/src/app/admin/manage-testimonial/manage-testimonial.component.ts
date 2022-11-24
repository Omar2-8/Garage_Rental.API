import { HomeService } from './../../Services/home.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-manage-testimonial',
  templateUrl: './manage-testimonial.component.html',
  styleUrls: ['./manage-testimonial.component.css']
})
export class ManageTestimonialComponent implements OnInit {

  constructor(public home:HomeService) { }
  createForm :FormGroup= new FormGroup({
    opinion:new FormControl('',Validators.required),
    rating:new FormControl('',Validators.required),
    status:new FormControl('',Validators.required),
    image:new FormControl()
  })

  ngOnInit(): void {
    this.home.getAllTestimonial();
  }
  saveData()
  {
    
    this.home.createTestimonial(this.createForm.value);
  }
}
