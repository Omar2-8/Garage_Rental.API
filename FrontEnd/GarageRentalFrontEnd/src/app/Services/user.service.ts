import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
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
  car2: any = {};
  testimonial: any[] = [];
  visa: any[] = [];
  visa1: any[] = [];
  payment: any[] = [];
  rent: any[] = [];
  user: any[] = [];
  userName: any = {};
  userid: any = {};

  Longletgrage: any[] = [];
  garage: any = {}; //عرفنا اريي عشان رح ترجعلي الداتا جيسون اوبجكت فبحتاج ارريي لحتى اخزن فيها الداتا الي جبتها من الإي بي اّي
  constructor(
    private http: HttpClient,
    private spinner: NgxSpinnerService,
    private toster: ToastrService,
    private router:Router
  ) {}
  //--------Users
  createUser(body: any) {
    body.useR_IMAGE = this.display_image1;
    this.spinner.show();

    this.http.post('https://localhost:44391/api/Users/Create', body).subscribe(
      (resp) => {
        console.log(resp);
        setTimeout(()=>{
          this.spinner.hide();
        this.toster.success('Created Successfuly!!');
          },2000)
        
        this.router.navigate(['/security/login']); 
        
      },
      (err) => {
        setTimeout(()=>{
          this.spinner.hide();
          this.toster.error('Something Wrong!!');
          },2000)
        
      }
    );
  }
  getAllUsers() {
    this.http.get('https://localhost:44391/api/Users/GetAll').subscribe(
      (Resp: any) => {
        //السبسكرايب بتتكون من حالتين اول وحدة ترو والثانية اذا كانت ايرور ريسبونس
        this.user = Resp;
        // this.userName=Resp;
        // this.toster.success('Data Retrieved');
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
        // this.toster.success('Data Retrieved!');
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
          setTimeout(()=>{
            this.spinner.hide();
           this.toster.success('Deleted Successfully !!');
            },2000)
         
        },
        (err) => {
          setTimeout(()=>{
            this.spinner.hide();
           this.toster.error('Can not Deleted !!');
            },2000)
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
        setTimeout(()=>{
          this.spinner.hide();
        this.toster.success('Updated Successfully !!');
          },2000)
        
      },
      (err) => {
        setTimeout(()=>{
          this.spinner.hide();
         this.toster.error('Can not Updated Please Try Again Later !!');
          },2000)
        
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
        setTimeout(()=>{
          this.spinner.hide();
           this.toster.success('Created Garage successfuly!!');
          },2000)
       
      },
      (err) => {
        setTimeout(()=>{
          this.spinner.hide();
       this.toster.error('Can not Create Garage!!');
          },2000)
        
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
          // this.toster.success('Data Retrieved!');
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
          setTimeout(()=>{
            this.spinner.hide();
         this.toster.success('Deleted Successfully !!');
            },2000)
          
        },
        (err) => {
          this.spinner.hide();
          this.toster.error(err.message, err.status);
        }
      );
  }
  updateGarage(body: any) {
debugger
    if(this.display_image !=null ) {  
      body.image1 = this.display_image;
      }
      if(this.display_image2 != null) {
        body.image2 = this.display_image2;}
    
    this.spinner.show();
    this.http.put('https://localhost:44391/api/Garage/Update', body).subscribe(
      (resp) => {
        setTimeout(()=>{
          this.spinner.hide();
          this.toster.success('Update Garage Successfully !!');
          },2000)
       
      },
      (err) => {
        setTimeout(()=>{
          this.spinner.hide();
          this.toster.error('Can Not Updated Garage !!');
          },2000)
        
      }
    );
  }

  uploadAttachmentGarage(file: FormData) {
    this.http
      .post('https://localhost:44391/api/Garage/UploadIMage/', file)
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
      .post('https://localhost:44391/api/Garage/UploadIMage/', file)
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
  ChangeModeOfGrage(body:any) {this.http.put(this.baseApiUrl+'General/ChangeGarageMode',body).subscribe((resp)=>{
    this.toster.success('Change Mode Of Garage Successfully !!');
  },err=>{
    this.toster.error(err.message, err.status);
  })}
  //-------End Garage

  //-------Rent
  createRent(body: any) {
    debugger;

    this.spinner.show();

    this.http.post('https://localhost:44391/api/Rent/Create', body).subscribe(
      (resp) => {
        console.log(resp);
        this.spinner.hide();
        this.toster.success('ٌRent completed successfully!!');
      },
      (err) => {
        this.spinner.hide();
        this.toster.error('Can Not Rent Please Check on start and end (time)');
      }
    );
  }

  getRentId(id: number) {
    //show Spinner
    //Hits Api
    //Hide Spinner
    //Resp=> Toastr

    this.http.get('https://localhost:44391/api/General/GetAllRentById/' + id).subscribe(
      (resp: any) => {
        this.rent = resp;
        console.log(this.user);

        // this.toster.success('Data Retrieved!');
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
  getAllVisa() {
    this.http.get('https://localhost:44391/api/Visa/GetAll').subscribe(
      (Resp: any) => {
        //السبسكرايب بتتكون من حالتين اول وحدة ترو والثانية اذا كانت ايرور ريسبونس
        this.visa = Resp;
        console.log(this.visa);
        // this.toster.success('Data Retrieved!');
      },
      (err) => {
        this.toster.error('something Wrong');
      }
    );
  }

  getVisaId(id: number) {
    //show Spinner
    //Hits Api
    //Hide Spinner
    //Resp=> Toastr

    this.http.get('https://localhost:44391/api/Visa/GetById/' + id).subscribe(
      (resp: any) => {
        this.visa1 = resp;
        console.log(this.visa);

        // this.toster.success('The visa has been selected!');
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

  ChangeAmountVisa(body: any) {
    this.http.put(this.baseApiUrl + 'General/ChangeAmount', body).subscribe(
      (resp) => {
        this.toster.success('The deduction has been made from the visa !!');
      },
      (err) => {
        this.toster.error(err.message, err.status);
      }
    );
  }

  //-------End Visa

  //--------Car
  createCar(body: any) {
    this.http.post('https://localhost:44391/api/Car/Create', body).subscribe(
      (resp) => {
        console.log(resp);
        this.toster.success('Created Successfuly!!');
      },
      (err) => {
        this.toster.error('Please Cheack Car Type And Car Plate!!');
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
  getListCarId(id: number) {
    //show Spinner
    //Hits Api
    //Hide Spinner
    //Resp=> Toastr

    this.http.get('https://localhost:44391/api/General/GetAllCarById/' + id).subscribe(
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
      .get('https://localhost:44391/api/LongLetGrages/GetByIdListPay/' + id)
      .subscribe(
        (resp: any) => {
          this.payment = resp;
          console.log(this.payment);

          // this.toster.success('Data Retrieved!');
        },
        (err) => {
          this.toster.error(err.message, err.status);
        }
      );
  }
   createpay(body: any) {
    this.spinner.show();

    this.http.post('https://localhost:44391/api/Payment/Create', body).subscribe(
      (resp) => {
        console.log(resp);
        this.spinner.hide();
        // this.toster.success('Created Successfuly!!');
      },
      (err) => {
        this.spinner.hide();
        this.toster.error(err.message, err.status);
      }
    );
  }

  //--------- End Payment

  //Omar CCode

  getUserList(): Observable<User[]> {
    return this.http.get<User[]>(this.baseApiUrl + 'Users/GetAll');
  }

  // getVisa(id: string): Observable<User> {
  //   return this.http.get<User>(this.baseApiUrl + 'Visa/GetById?id=' + id);
  // }

  // addVisa(addVisaReq: User): Observable<User> {
  //   return this.http.post<User>(this.baseApiUrl + 'Visa/Create', addVisaReq);
  // }

  // updateVisa(id: number, updateVisareq: User): Observable<User> {
  //   return this.http.post<User>(
  //     this.baseApiUrl + 'Visa/Update?id=' + id,
  //     updateVisareq
  //   );
  // }
}
