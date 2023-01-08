import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-side-bar',
  templateUrl: './user-side-bar.component.html',
  styleUrls: ['./user-side-bar.component.css']
})
export class UserSideBarComponent implements OnInit {


  constructor(private router:Router) { }
  ngOnInit(): void {
   
  }

  Logout() {
    window.localStorage.clear();
    this.router.navigateByUrl('/');
  }
}
