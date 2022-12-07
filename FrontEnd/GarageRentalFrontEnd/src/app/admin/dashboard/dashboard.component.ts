import { UserService } from 'src/app/Services/user.service';
import { HomeService } from './../../Services/home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public home:HomeService,public user:UserService) { }

  ngOnInit(): void {
    // const userNumber =this.user.length.getAllUsers();
    this.home.getAboutUs();
  }

}
