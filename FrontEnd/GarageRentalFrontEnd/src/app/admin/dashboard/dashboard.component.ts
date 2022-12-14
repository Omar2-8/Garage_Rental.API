import { PaymentService } from './../../Services/payment.service';
import { GarageService } from './../../Services/garage.service';
import { AdminService } from 'src/app/Services/admin.service';
import { UserService } from 'src/app/Services/user.service';
import { HomeService } from './../../Services/home.service';
import { Component, OnInit } from '@angular/core';
import { ExportToCsv } from 'export-to-csv-file';
import { Payment } from 'src/app/Models/payment.model';
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
  months: number[] = [];
  monthlyProfit: MonthlyProfit[] = [];
  cols!: any[];
  exportColumns!: any[];
  profitsCount = 0;
  data: any;
  pieData: any;
  chartOptions: any;
  reportsMonthly: any[] = [];
  options = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalSeparator: '.',
    showLabels: true,
    showTitle: true,
    title: 'CSV',
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: true,
    // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
  };

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
        this.reportsMonthly = value;
        value.forEach((x) => {
          this.profitsCount += x.paY_AMOUNT * x.commissioN_RATE * 0.1;
          const month = +x.paY_DATE.split('-')[1];
          const monthlyProfitObj = this.monthlyProfit.find(
            (y) => y.month == month
          );
          if (!monthlyProfitObj) {
            const newMonthlyProfit: MonthlyProfit = {
              month: month,
              profit: x.paY_AMOUNT,
            };
            this.monthlyProfit.push(newMonthlyProfit);
          } else {
            this.monthlyProfit[
              this.monthlyProfit.findIndex((y) => y.month == month)
            ].profit += x.paY_AMOUNT;
          }
        });
        this.monthlyProfit.sort((n1, n2) => {
          if (n1.month > n2.month) {
            return 1;
          }
          if (n1.month < n2.month) {
            return -1;
          }
          return 0;
        });
        this.cols = [
          { field: 'month', header: 'Month' },
          { field: 'profit', header: 'Profit' },
        ];
        this.exportColumns = this.cols.map((col) => ({
          title: col.header,
          dataKey: col.field,
        }));
      },
    });
  }

  exportPdf() {
    (jsPDF: { default: new (arg0: number, arg1: number) => any }) => {
      import('jspdf-autotable').then((x) => {
        const doc = new jsPDF.default(0, 0);
        doc.autoTable(this.exportColumns, this.monthlyProfit);
        doc.save('products.pdf');
      });
    };
  }

  exportExcel() {
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.monthlyProfit);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });
      this.saveAsExcelFile(excelBuffer, 'products');
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    import('file-saver').then((FileSaver) => {
      let EXCEL_TYPE =
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
      let EXCEL_EXTENSION = '.xlsx';
      const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE,
      });
      FileSaver.saveAs(
        data,
        fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION
      );
    });
  }

  ExportToCsv(month: number) {
    if (month == 0) {
      const data = this.reportsMonthly.map(
        ({ user, visA_ID, rent, visa, ...rest }) => {
          return rest;
        }
      );
      console.log(data);

      const csvExporter = new ExportToCsv(this.options);
      csvExporter.generateCsv(data);
    } else {
      const data = this.reportsMonthly.filter(
        (x) => x.paY_DATE.split('-')[1] == month
      );
      const csvExporter = new ExportToCsv(this.options);
      csvExporter.generateCsv(data);
    }
  }
}
export interface MonthlyProfit {
  month: number;
  profit: number;
}
