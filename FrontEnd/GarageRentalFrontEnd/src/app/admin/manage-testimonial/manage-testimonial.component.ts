import { HomeService } from './../../Services/home.service';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Table } from 'primeng/table'
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-manage-testimonial',
  templateUrl: './manage-testimonial.component.html',
  styleUrls: ['./manage-testimonial.component.css']
})
export class ManageTestimonialComponent implements OnInit {
  first = 0;
  rows = 10;
  @ViewChild('callUpdatDailog') callUpdate!:TemplateRef<any>
  @ViewChild('callDeleteDailog') callDelete!:TemplateRef<any>
  constructor(public home:HomeService,public dialog: MatDialog) { }


  updateForm :FormGroup= new FormGroup({
    id:new FormControl(),
    status:new FormControl('',Validators.required),
  })

  ngOnInit(): void {
    this.home.getAllTestimonial();
  }

  openDeleteDailog(id:number)
  {
    const dialogRef=  this.dialog.open(this.callDelete);
    dialogRef.afterClosed().subscribe((result)=>{
      if(result!=undefined)
      {
        if(result=='yes')
        {
          debugger
          this.home.deleteTestimonial(id);
        }

          else if(result=='no')
          console.log('thank you ');

      }
    })
  }

  p_data :any={};
  openUpdateDailog(obj:any){

    console.log(obj);
    this.p_data={
      id:obj.id,
      status:obj.status

    }
    this.updateForm.controls['id'].setValue(this.p_data.id);
    this.dialog.open(this.callUpdate);

    }

    saveDataTestimonial(){
      this.home.updateTestimonial(this.updateForm.value);
    }
  @ViewChild('dt') dt: Table | undefined;

  applyFilterGlobal($event: any, stringVal: any) {

    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }
  getEventValue($event:any) :string {
    debugger
  return $event.target.value;
}


    //for table
    next() {
      this.first = this.first + this.rows;
    }
    prev() {
      this.first = this.first - this.rows;
    }
    reset() {
      this.first = 0;
    }
    isLastPage(): boolean {
      return this.home.testimonial
        ? this.first === this.home.testimonial.length - this.rows
        : true;
    }
    isFirstPage(): boolean {
      return this.home.testimonial ? this.first === 0 : true;
    }
}
