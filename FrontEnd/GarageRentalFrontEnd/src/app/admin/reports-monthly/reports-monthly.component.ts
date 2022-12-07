import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-reports-monthly',
  templateUrl: './reports-monthly.component.html',
  styleUrls: ['./reports-monthly.component.css']
})
export class ReportsMonthlyComponent implements OnInit {

  constructor(public admin:AdminService) { }

  ngOnInit(): void {
    this.admin.getAllPayment();
  }

}
