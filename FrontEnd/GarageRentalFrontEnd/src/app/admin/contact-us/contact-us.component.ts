import { HomeService } from './../../Services/home.service';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-contact-us-dash',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(public home:HomeService, public dialog: MatDialog) { }
  @ViewChild('callDeleteDailog') callDelete!:TemplateRef<any>
  name :string='';
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


  // SreachInput(ev:any)
  // {
  //   this.name= ev.target.value;
  //   console.log(ev.target.value);
  // }
  // search()
  // {
  //   this.home.SearchByPrice(this.price);
  // }
}
