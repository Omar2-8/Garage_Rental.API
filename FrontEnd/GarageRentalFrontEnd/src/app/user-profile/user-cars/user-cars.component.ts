import { UserService } from './../../Services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-cars',
  templateUrl: './user-cars.component.html',
  styleUrls: ['./user-cars.component.css']
})
export class UserCarsComponent implements OnInit {

  constructor(public user:UserService) { }
  first = 0;
  rows = 10;
  ngOnInit(): void {
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
      return this.user.car
        ? this.first === this.user.car.length - this.rows
        : true;
    }
    isFirstPage(): boolean {
      return this.user.car ? this.first === 0 : true;
    }
}
