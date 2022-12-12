import { AdminService } from './../../Services/admin.service';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-all-rents',
  templateUrl: './all-rents.component.html',
  styleUrls: ['./all-rents.component.css']
})
export class AllRentsComponent implements OnInit {

  constructor(public admin:AdminService,public dialog: MatDialog) { }
  @ViewChild('callDeleteDailog') callDelete!:TemplateRef<any>
  
  ngOnInit(): void {
    this.admin.getAllRents();
  }
  openDeleteDailog(id:number)
  {
    const dialogRef=  this.dialog.open(this.callDelete);
    dialogRef.afterClosed().subscribe((result)=>{
      if(result!=undefined)
      {
        if(result=='yes')
        {
          this.admin.deleteRent(id);
        }
          else if(result=='no')
          console.log('thank you '); 
      }
    })
  }
}
