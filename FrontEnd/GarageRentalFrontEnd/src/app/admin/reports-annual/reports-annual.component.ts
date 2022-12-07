import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-reports-annual',
  templateUrl: './reports-annual.component.html',
  styleUrls: ['./reports-annual.component.css']
})
export class ReportsAnnualComponent implements OnInit {

  constructor(public admin:AdminService) { }

  ngOnInit(): void {
    this.admin.getAllPayment();
  }

}
