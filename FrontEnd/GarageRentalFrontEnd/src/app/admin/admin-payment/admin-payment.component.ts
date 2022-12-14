import { AdminService } from './../../Services/admin.service';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-payment',
  templateUrl: './admin-payment.component.html',
  styleUrls: ['./admin-payment.component.css']
})
export class AdminPaymentComponent implements OnInit {
  first = 0;
  rows = 10;
  constructor(public admin:AdminService, public dialog: MatDialog) { }
  @ViewChild('callDeleteDailog') callDelete!:TemplateRef<any>
  ngOnInit(): void {
    this.admin.getAllPayment();
  }


  
  openDeleteDailog(id:number)
  {
    const dialogRef=  this.dialog.open(this.callDelete);
    dialogRef.afterClosed().subscribe((result)=>{
      if(result!=undefined)
      {
        if(result=='yes')
        {
          this.admin.deletePayment(id);
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
        return this.admin.payment
          ? this.first === this.admin.payment.length - this.rows
          : true;
      }
      isFirstPage(): boolean {
        return this.admin.payment ? this.first === 0 : true;
      }
}
