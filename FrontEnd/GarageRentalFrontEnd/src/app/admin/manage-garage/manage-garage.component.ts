import { AdminService } from './../../Services/admin.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-garage',
  templateUrl: './manage-garage.component.html',
  styleUrls: ['./manage-garage.component.css']
})
export class ManageGarageComponent implements OnInit {

  constructor(public admin:AdminService) { }

  ngOnInit(): void {
    this.admin.getAllGarage();
  }

}
