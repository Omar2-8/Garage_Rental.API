import { UserService } from 'src/app/Services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-rents',
  templateUrl: './user-rents.component.html',
  styleUrls: ['./user-rents.component.css']
})
export class UserRentsComponent implements OnInit {
  first = 0;
  rows = 10;
  constructor(public user:UserService) { }

  ngOnInit(): void {
    let user:any= localStorage.getItem('user');
    user = JSON.parse(user);
    this.user.getRentId(user.USER_ID);
  }

      //for table
      next() {
        this.first = this.first + this.rows;
      }
      prev() {
        this.first = this.first - this.rows;
      }
      reset() {
        this.first = 0;
      }
      isLastPage(): boolean {
        return this.user.rent
          ? this.first === this.user.rent.length - this.rows
          : true;
      }
      isFirstPage(): boolean {
        return this.user.rent ? this.first === 0 : true;
      }
}
