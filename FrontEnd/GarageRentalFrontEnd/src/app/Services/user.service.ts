import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../Models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseApiUrl: string = environment.baseApiUrl;

  message: string = 'Welcome :) ';
  display_image: any;
  display_image1: any;
  display_image2: any;
  car: any[] = [];
  testimonial: any[] = [];
  visa: any = {};
  payment: any[] = [];
  rent: any = {};
  user: any[] = [];
  userName: any = {};
  userid: any = {};

  Longletgrage: any[] = [];
  garage: any = {}; //عرفنا اريي عشان رح ترجعلي الداتا جيسون اوبجكت فبحتاج ارريي لحتى اخزن فيها الداتا الي جبتها من الإي بي اّي
  constructor(
    private http: HttpClient,
    private spinner: NgxSpinnerService,
    private toster: ToastrService
  ) {}
  //--------Users
  createUser(body: any) {
    body.useR_IMAGE = this.display_image1;
    this.spinner.show();

    this.http.post('https://localhost:44391/api/Users/Create', body).subscribe(
      (resp) => {
        console.log(resp);
        this.spinner.hide();
        this.toster.success('Created Successfuly!!');
      },
      (err) => {
        this.spinner.hide();
        this.toster.error(err.message, err.status);
      }
    );
  }
  getAllUsers() {
    this.http.get('https://localhost:44391/api/Users/GetAll').subscribe(
      (Resp: any) => {
        //السبسكرايب بتتكون من حالتين اول وحدة ترو والثانية اذا كانت ايرور ريسبونس
        this.user = Resp;
        // this.userName=Resp;
        this.toster.success('Data Retrieved');
      },
      (err) => {
        this.toster.error('something Wrong');
      }
    );
  }
  getUserById(id: number): Observable<User> {
    return this.http.get<User>(this.baseApiUrl + 'Users/GetById/' + id);
  }
  getUserId(id: number) {
    this.http.get('https://localhost:44391/api/Users/GetById/' + id).subscribe(
      (resp: any) => {
        this.userid = resp;
        console.log(this.userid);
        this.toster.success('Data Retrieved!');
      },
      (err) => {
        this.toster.error(err.message, err.status);
      }
    );
  }

  deleteUser(id: number) {
    this.spinner.show();

    this.http
      .delete('https://localhost:44391/api/Users/Delete/' + id)
      .subscribe(
        (resp) => {
          this.toster.success('Deleted Successfully !!');
        },
        (err) => {
          this.toster.error(err.message, err.status);
        }
      );
  }

  updateUser(body: any) {
    if (this.display_image1 != null) {
      body.useR_IMAGE = this.display_image1;
    }
    this.spinner.show();
    this.http.put('https://localhost:44391/api/Users/Update', body).subscribe(
      (resp) => {
        this.spinner.hide();
        this.toster.success('Updated Successfully !!');
      },
      (err) => {
        this.spinner.hide();
        this.toster.error(err.message, err.status);
      }
    );
  }

  uploadAttachmentUser(file: FormData) {
    this.http
      .post('https://localhost:44391/api/Users/UploadIMage/', file)
      .subscribe(
        (resp: any) => {
          this.display_image1 = resp.useR_IMAGE;
        },
        (err) => {
          this.toster.error('Can not Upload Image');
          console.log(err);
        }
      );
  }
  //--------End Users

  //-------Garage

  createGarage(body: any) {
    body.image1 = this.display_image;
    body.image2 = this.display_image2;
    this.spinner.show();
    debugger;
    this.http.post('https://localhost:44391/api/Garage/Create', body).subscribe(
      (resp) => {
        console.log(resp);
        this.spinner.hide();
        this.toster.success('Created !!');
      },
      (err) => {
        this.spinner.hide();
        this.toster.error(err.message, err.status);
      }
    );
  }
  getGarageId(id: number) {
    //show Spinner
    //Hits Api
    //Hide Spinner
    //Resp=> Toastr
    this.http
      .get('https://localhost:44391/api/LongLetGrages/GetByIdList/' + id)
      .subscribe(
        (resp: any) => {
          this.garage = resp;
          console.log(this.garage);
          this.toster.success('Data Retrieved!');
        },
        (err) => {
          this.toster.error(err.message, err.status);
        }
      );
  }
  getSingleGarageId(id: number) {
    //show Spinner
    //Hits Api
    //Hide Spinner
    //Resp=> Toastr
    this.http.get('https://localhost:44391/api/Garage/GetById/' + id).subscribe(
      (resp: any) => {
        this.garage = resp;
        console.log(this.garage);
        this.toster.success('Data Retrieved!');
      },
      (err) => {
        this.toster.error(err.message, err.status);
      }
    );
  }

  getLongLetById(id: number) {
    //show Spinner
    //Hits Api
    //Hide Spinner
    //Resp=> Toastr
    this.http
      .get(
        'https://localhost:44391/api/LongLetGrages/GetLongitudeLatitudeByID/' +
          id
      )
      .subscribe(
        (resp: any) => {
          this.Longletgrage = resp;
          console.log(this.Longletgrage);
          this.toster.success('Data Retrieved!');
        },
        (err) => {
          this.toster.error(err.message, err.status);
        }
      );
  }

  deleteGarage(id: number) {
    this.spinner.show();

    this.http
      .delete('https://localhost:44391/api/Garage/Delete/' + id)
      .subscribe(
        (resp) => {
          this.toster.success('Deleted Successfully !!');
        },
        (err) => {
          this.toster.error(err.message, err.status);
        }
      );
  }
  updateGarage(body: any) {
    body.useR_IMAGE = this.display_image;
    body.useR_IMAGE = this.display_image2;
    this.spinner.show();
    this.http.put('https://localhost:44391/api/Garage/Update', body).subscribe(
      (resp) => {
        this.spinner.hide();
        this.toster.success('Accepted The Garage Successfully !!');
      },
      (err) => {
        this.spinner.hide();
        this.toster.error(err.message, err.status);
      }
    );
  }

  uploadAttachmentGarage(file: FormData) {
    this.http
      .post('https://localhost:44391/api/Home/UploadIMage/', file)
      .subscribe(
        (resp: any) => {
          this.display_image = resp.image1;
        },
        (err) => {
          this.toster.error('Can not Upload Image');
          console.log(err);
        }
      );
  }
  uploadAttachmentGarage2(file: FormData) {
    this.http
      .post('https://localhost:44391/api/Home/UploadIMage/', file)
      .subscribe(
        (resp: any) => {
          this.display_image2 = resp.image2;
        },
        (err) => {
          this.toster.error('Can not Upload Image');
          console.log(err);
        }
      );
  }
  //-------End Garage

  //-------Rent
  createRent(body: any) {
    debugger;

    this.spinner.show();
    this.getVisaId(1);
    if (
      this.garage.availablE_FROM <= body.starT_TIME &&
      this.garage.availablE_TO >= body.enD_TIME
    ) {
      if (
        this.visa.visA_AMOUNT >
        this.garage.renT_PRICE * (body.enD_TIME - body.starT_TIME)
      ) {
        this.visa.visA_AMOUNT =
          this.visa.visA_AMOUNT -
          this.garage.renT_PRICE * (body.enD_TIME - body.starT_TIME);

        this.http
          .post('https://localhost:44391/api/Rent/Create', body)
          .subscribe(
            (resp) => {
              console.log(resp);
              this.spinner.hide();
              this.toster.success('Created Successfuly!!');
            },
            (err) => {
              this.spinner.hide();
              this.toster.error(err.message, err.status);
            }
          );
      } else this.toster.error('Amount of visa not enoug ');
    } else this.toster.error('The time of rent garage is not available');
  }

  getRentId(id: number) {
    //show Spinner
    //Hits Api
    //Hide Spinner
    //Resp=> Toastr

    this.http.get('https://localhost:44391/api/Rent/GetById/' + id).subscribe(
      (resp: any) => {
        this.rent = resp;
        console.log(this.user);

        this.toster.success('Data Retrieved!');
      },
      (err) => {
        this.toster.error(err.message, err.status);
      }
    );
  }

  deleteRent(id: number) {
    this.spinner.show();

    this.http.delete('https://localhost:44391/api/Rent/Delete/' + id).subscribe(
      (resp) => {
        this.toster.success('Deleted Successfully !!');
      },
      (err) => {
        this.toster.error(err.message, err.status);
      }
    );
  }

  //-------End Rent

  //-------Visa
  getVisaId(id: number) {
    //show Spinner
    //Hits Api
    //Hide Spinner
    //Resp=> Toastr

    this.http.get('https://localhost:44391/api/Visa/GetById/' + id).subscribe(
      (resp: any) => {
        this.visa = resp;
        console.log(this.visa);

        this.toster.success('Data Retrieved!');
      },
      (err) => {
        this.toster.error(err.message, err.status);
      }
    );
  }

  deleteVisa(id: number) {
    this.spinner.show();

    this.http.delete('https://localhost:44391/api/Visa/Delete/' + id).subscribe(
      (resp) => {
        this.toster.success('Deleted Successfully !!');
      },
      (err) => {
        this.toster.error(err.message, err.status);
      }
    );
  }

  //-------End Visa

  //--------Car
  createCar(body: any) {
    this.spinner.show();

    this.http.post('https://localhost:44391/api/Car/Create', body).subscribe(
      (resp) => {
        console.log(resp);
        this.spinner.hide();
        this.toster.success('Created Successfuly!!');
      },
      (err) => {
        this.spinner.hide();
        this.toster.error(err.message, err.status);
      }
    );
  }

  getCarId(id: number) {
    //show Spinner
    //Hits Api
    //Hide Spinner
    //Resp=> Toastr

    this.http.get('https://localhost:44391/api/Car/GetById/' + id).subscribe(
      (resp: any) => {
        this.car = resp;
        console.log(this.car);

        this.toster.success('Data Retrieved!');
      },
      (err) => {
        this.toster.error(err.message, err.status);
      }
    );
  }

  deleteCar(id: number) {
    this.spinner.show();

    this.http.delete('https://localhost:44391/api/Car/Delete/' + id).subscribe(
      (resp) => {
        this.toster.success('Deleted Successfully !!');
      },
      (err) => {
        this.toster.error(err.message, err.status);
      }
    );
  }

  updateCar(body: any) {
    this.spinner.show();
    this.http.put('https://localhost:44391/api/Car/Update', body).subscribe(
      (resp) => {
        this.spinner.hide();
        this.toster.success('Updated Successfully !!');
      },
      (err) => {
        this.spinner.hide();
        this.toster.error(err.message, err.status);
      }
    );
  }

  //-------End Car

  //--------- Payment

  getPaymentId(id: number) {
    //show Spinner
    //Hits Api
    //Hide Spinner
    //Resp=> Toastr

    this.http
      .get('https://localhost:44391/api/Payment/GetById/' + id)
      .subscribe(
        (resp: any) => {
          this.payment = resp;
          console.log(this.payment);

          this.toster.success('Data Retrieved!');
        },
        (err) => {
          this.toster.error(err.message, err.status);
        }
      );
  }

  //--------- End Payment
}
