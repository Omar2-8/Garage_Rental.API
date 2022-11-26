import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from 'src/app/Services/home.service';

@Component({
  selector: 'app-add-testimonial',
  templateUrl: './add-testimonial.component.html',
  styleUrls: ['./add-testimonial.component.css']
})
export class AddTestimonialComponent implements OnInit {

  constructor(public home:HomeService,public dialog: MatDialog) { }
  createForm :FormGroup= new FormGroup({
    opinion:new FormControl('',Validators.required),
    rating:new FormControl('',Validators.required),
    status:new FormControl('',Validators.required),
    useR_ID:new FormControl('',Validators.required),
  })
  ngOnInit(): void {
  }
  saveData()
  {
    this.home.createTestimonial(this.createForm.value);
  }
}
