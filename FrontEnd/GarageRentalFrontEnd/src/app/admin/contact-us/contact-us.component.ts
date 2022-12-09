import { HomeService } from './../../Services/home.service';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-contact-us-dash',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  first = 0;
  rows = 10;
  constructor(public home:HomeService, public dialog: MatDialog) { }
  @ViewChild('callDeleteDailog') callDelete!:TemplateRef<any>
  ngOnInit(): void {
    this.home.getAllContactus();
  }

  openDeleteDailog(id:number)
  {
    const dialogRef=  this.dialog.open(this.callDelete);
    dialogRef.afterClosed().subscribe((result)=>{
      if(result!=undefined)
      {
        if(result=='yes')
        {
          this.home.deleteContactus(id);
        }
          else if(result=='no')
          console.log('thank you '); 
      }
    })
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
        return this.home.Contactus
          ? this.first === this.home.Contactus.length - this.rows
          : true;
      }
      isFirstPage(): boolean {
        return this.home.Contactus ? this.first === 0 : true;
      }
}
