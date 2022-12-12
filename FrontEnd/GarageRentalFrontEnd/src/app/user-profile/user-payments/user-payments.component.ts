import { UserService } from './../../Services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-payments',
  templateUrl: './user-payments.component.html',
  styleUrls: ['./user-payments.component.css']
})
export class UserPaymentsComponent implements OnInit {
  first = 0;
  rows = 10;
  constructor(public user:UserService) { }

  ngOnInit(): void {
    let user:any= localStorage.getItem('user');
    user = JSON.parse(user);
    this.user.getPaymentId(user.USER_ID)
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
      return this.user.payment
        ? this.first === this.user.payment.length - this.rows
        : true;
    }
    isFirstPage(): boolean {
      return this.user.payment ? this.first === 0 : true;
    }
}
