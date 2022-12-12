import { AdminService } from 'src/app/Services/admin.service';
import { UserService } from 'src/app/Services/user.service';
import { HomeService } from './../../Services/home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(
    public home: HomeService,
    public user: UserService,
    public admin: AdminService
  ) {}
  usersNumber!: number;

  ngOnInit(): void {
    debugger;
    this.user.getUserList().subscribe({
      next: (value) => {
        this.usersNumber = value.length;
      },
    });
  }
}
