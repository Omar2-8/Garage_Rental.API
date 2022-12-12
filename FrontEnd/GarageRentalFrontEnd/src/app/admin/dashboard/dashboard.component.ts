import { PaymentService } from './../../Services/payment.service';
import { GarageService } from './../../Services/garage.service';
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
    private home: HomeService,
    private user: UserService,
    private admin: AdminService,
    private garageServiuce: GarageService,
    private paymentService: PaymentService
  ) {}
  usersNumber!: number;
  gargesNumber!: number;
  watingGargesNumber!: number;
  acceptedGargesNumber!: number;
  rejectedGargesNumber!: number;
  availableGaragesNumber!: number;
  unAvailableGaragesNumber!: number;

  profitsCount = 0;
  data: any;
  pieData: any;
  chartOptions: any;

  ngOnInit(): void {
    this.garageServiuce.getGarageList().subscribe({
      next: (value) => {
        this.gargesNumber = value.length;
        this.watingGargesNumber = value.filter(
          (x) => x.status == 'wating'
        ).length;
        this.acceptedGargesNumber = value.filter(
          (x) => x.status == 'accept'
        ).length;
        this.rejectedGargesNumber = value.filter(
          (x) => x.status == 'Reject'
        ).length;
        this.availableGaragesNumber = value.filter(
          (x) => x.garagE_MODE == 'available'
        ).length;
        this.unAvailableGaragesNumber = value.filter(
          (x) => x.garagE_MODE == 'unavailable'
        ).length;

        this.data = {
          labels: ['Rejected Garages', 'Waiting Garages', 'Accepted Garages'],
          datasets: [
            {
              data: [
                this.rejectedGargesNumber,
                this.watingGargesNumber,
                this.acceptedGargesNumber,
              ],
              backgroundColor: ['#FF6384', '#FFCE56', '#36A2EB'],
              hoverBackgroundColor: ['#FF6384', '#FFCE56', '#36A2EB'],
            },
          ],
        };

        this.pieData = {
          labels: ['Unavailable Garages', 'Available Garages'],
          datasets: [
            {
              data: [
                this.unAvailableGaragesNumber,
                this.availableGaragesNumber,
              ],
              backgroundColor: ['#42A5F5', '#66BB6A'],
              hoverBackgroundColor: ['#64B5F6', '#81C784'],
            },
          ],
        };
      },
    });

    this.user.getUserList().subscribe({
      next: (value) => {
        this.usersNumber = value.length;
      },
    });
    this.paymentService.getPaymentList().subscribe({
      next: (value) => {
        this.paymentService.getPaymentList().subscribe({
          next: (value) => {
            value.forEach((x) => {
              this.profitsCount += x.paY_AMOUNT * x.commissioN_RATE * 0.1;
            });
          },
        });
      },
    });
  }
}
