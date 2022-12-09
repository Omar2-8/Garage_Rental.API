import { AdminService } from 'src/app/Services/admin.service';
import { UserService } from 'src/app/Services/user.service';
import { HomeService } from './../../Services/home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public home:HomeService,public user:UserService,public admin:AdminService) { }
  userNumber:any;
  ngOnInit(): void {
    debugger
    this.admin.getAllUsers();
    console.log(this.admin.getAllUsers());
    
    this.userNumber =this.admin.user.length;
    console.log(this.userNumber);
    
    this.home.getAboutUs();
  }

}
