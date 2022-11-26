import { HomeService } from './../../Services/home.service';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Table } from 'primeng/table'
@Component({
  selector: 'app-manage-testimonial',
  templateUrl: './manage-testimonial.component.html',
  styleUrls: ['./manage-testimonial.component.css']
})
export class ManageTestimonialComponent implements OnInit {
  @ViewChild('callUpdatDailog') callUpdate!:TemplateRef<any>
  @ViewChild('callDeleteDailog') callDelete!:TemplateRef<any>
  constructor(public home:HomeService,public dialog: MatDialog) { }
  createForm :FormGroup= new FormGroup({
    opinion:new FormControl('',Validators.required),
    rating:new FormControl('',Validators.required),
    status:new FormControl('',Validators.required),
    useR_ID:new FormControl('',Validators.required),
  })

  updateForm :FormGroup= new FormGroup({
    id:new FormControl(),
    status:new FormControl('',Validators.required),
  })

  ngOnInit(): void {
    this.home.getAllTestimonial();
  }
  saveData()
  {
    this.home.createTestimonial(this.createForm.value);
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
}
