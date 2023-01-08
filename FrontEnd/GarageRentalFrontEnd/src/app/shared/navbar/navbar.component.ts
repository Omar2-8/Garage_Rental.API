import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  logout: boolean = false;
  profile: boolean=false;
  constructor(private router: Router) {}

  ngOnInit(): void {
    debugger;
    if (window.localStorage.getItem('token')) {
      this.logout = true;
      this.profile=true;
    }
  }

  click() {
    this.router.navigate(['/']);
  }
  Logout() {
    window.localStorage.clear();
    this.router.navigateByUrl('/');
  }
}
