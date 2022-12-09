import { UserService } from './../../Services/user.service';
import { AdminService } from './../../Services/admin.service';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  first = 0;
  rows = 10;

  constructor(
    public admin: AdminService,
    public users: UserService,
    public dialog: MatDialog
  ) {}
  @ViewChild('callDeleteDailog') callDelete!: TemplateRef<any>;
  ngOnInit(): void {
    this.admin.getAllUsers();
  }
  openDeleteDailog(id: number) {
    const dialogRef = this.dialog.open(this.callDelete);

    dialogRef.afterClosed().subscribe((result) => {
      if (result != undefined) {
        if (result == 'yes') {
          this.users.deleteUser(id);
        } else if (result == 'no') console.log('thank you ');
      }
    });
  }

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
    return this.admin.user
      ? this.first === this.admin.user.length - this.rows
      : true;
  }

  isFirstPage(): boolean {
    return this.admin.user ? this.first === 0 : true;
  }
}
