import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HomeService } from './../../Services/home.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor(public home: HomeService, private route: Router) {}

  ngOnInit(): void {}

  logout() {
    window.localStorage.clear();
    this.route.navigateByUrl('/');
  }
}
