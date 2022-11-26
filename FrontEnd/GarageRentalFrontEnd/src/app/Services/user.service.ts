import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  message: string = "Welcome :) ";
  display_image: any;
  car :any[]=[];
  testimonial :any[]=[];
  visa :any[]=[];
  payment :any[]=[];
  rent :any[]=[];
  user :any[]=[];
  garage :any[]=[];//عرفنا اريي عشان رح ترجعلي الداتا جيسون اوبجكت فبحتاج ارريي لحتى اخزن فيها الداتا الي جبتها من الإي بي اّي
  constructor(private http:HttpClient ,private spinner:NgxSpinnerService , private toster:ToastrService ) { }
  //--------Users
  createUser(body: any) {
    body.useR_IMAGE = this.display_image;
    this.spinner.show();
    
    this.http.post('https://localhost:44391/api/Users/Create', body).subscribe((resp) => {
      console.log(resp);
      this.spinner.hide();
      this.toster.success('Created Successfuly!!');
    }, err => {
      this.spinner.hide();
      this.toster.error(err.message, err.status);
    }
    )
  }
  getAllUsers(){
  
    
    this.http.get('https://localhost:44391/api/Users/GetAll').subscribe((Resp:any)=>{//السبسكرايب بتتكون من حالتين اول وحدة ترو والثانية اذا كانت ايرور ريسبونس
      this.user=Resp;
      
       this.toster.success('Data Retrieved')
    },err=>{
      
      this.toster.error('something Wrong')
    })
  }
  getUserId(id: number) {
    //show Spinner 
    //Hits Api 
    //Hide Spinner
    //Resp=> Toastr 
    this.http.get('https://localhost:44391/api/Users/GetById/'+ id).subscribe((resp: any) => {
      this.user = resp;
      console.log(this.user);
      
      this.toster.success('Data Retrieved!');
  
    }, err => {
      
      this.toster.error(err.message, err.status);
    })
  
  }
 
  
  deleteUser(id:number)
  {
    this.spinner.show();
   
    this.http.delete('https://localhost:44391/api/Users/Delete/'+id).subscribe((resp)=>{
      
        this.toster.success('Deleted Successfully !!');
    },err=>{
      
     this.toster.error(err.message, err.status);
    })
  }
   
  updateUser(body:any)
    {
      body.image = this.display_image;
      this.spinner.show();
      this.http.put('https://localhost:44391/api/Users/Update',body).subscribe((resp)=>{
        this.spinner.hide();
        this.toster.success('Updated Successfully !!');
      },err=>{
        this.spinner.hide();
        this.toster.error(err.message, err.status);
      })
    }
   
    uploadAttachmentUser(file: FormData) {
      this.http.post('https://localhost:44391/api/Users/UploadIMage/', file).subscribe((resp: any) => {
        this.display_image = resp.image;
      }, err => {
        this.toster.error('Can not Upload Image');
        console.log(err);
  
      })
    }
  //--------End Users


   //-------Garage 
   
   createGarage(body: any) {
    body.image = this.display_image;
    this.spinner.show();
    debugger
    this.http.post('https://localhost:44391/api/Garage/Create', body).subscribe((resp) => {
      console.log(resp);
      this.spinner.hide();
      this.toster.success('Created !!');
    }, err => {
      this.spinner.hide();
      this.toster.error(err.message, err.status);
    }
    )
  }
  getGarageId(id: number) {
    //show Spinner 
    //Hits Api 
    //Hide Spinner
    //Resp=> Toastr 
  
  
    this.http.get('https://localhost:44391/api/Garage/GetById/' + id).subscribe((resp: any) => {
      this.garage = resp;
      console.log(this.garage);
      
      this.toster.success('Data Retrieved!');
  
    }, err => {
      
      this.toster.error(err.message, err.status);
    })
  
  }
 
  
  deleteGarage(id:number)
  {
    this.spinner.show();
    
    this.http.delete('https://localhost:44391/api/Garage/Delete/'+id).subscribe((resp)=>{
      
        this.toster.success('Deleted Successfully !!');
    },err=>{
      
     this.toster.error(err.message, err.status);
    })
  }
  updateGarage(body:any)
  {
    body.useR_IMAGE = this.display_image;
    this.spinner.show();
    this.http.put('https://localhost:44391/api/Garage/Update',body).subscribe((resp)=>{
      this.spinner.hide();
      this.toster.success('Accepted The Garage Successfully !!');
    },err=>{
      this.spinner.hide();
      this.toster.error(err.message, err.status);
    })
  }

  uploadAttachmentGarage(file: FormData) {
    this.http.post('https://localhost:44391/api/Home/UploadIMage/', file).subscribe((resp: any) => {
      this.display_image = resp.useR_IMAGE;
    }, err => {
      this.toster.error('Can not Upload Image');
      console.log(err);

    })
  }
    //-------End Garage 

    //-------Rent 
    createRent(body: any) {
      
      this.spinner.show();
     
      this.http.post('https://localhost:44391/api/Rent/Create', body).subscribe((resp) => {
        console.log(resp);
        this.spinner.hide();
        this.toster.success('Created Successfuly!!');
      }, err => {
        this.spinner.hide();
        this.toster.error(err.message, err.status);
      }
      )
    }
    
    getRentId(id: number) {
      //show Spinner 
      //Hits Api 
      //Hide Spinner
      //Resp=> Toastr 
    
    
      this.http.get('https://localhost:44391/api/Rent/GetById/' + id).subscribe((resp: any) => {
        this.rent = resp;
        console.log(this.user);
        
        this.toster.success('Data Retrieved!');
    
      }, err => {
        
        this.toster.error(err.message, err.status);
      })
    
    }
   
    
    deleteRent(id:number)
    {
      this.spinner.show();
     
      this.http.delete('https://localhost:44391/api/Rent/Delete/'+id).subscribe((resp)=>{
        
          this.toster.success('Deleted Successfully !!');
      },err=>{
        
       this.toster.error(err.message, err.status);
      })
    }

    //-------End Rent 
    
    //-------Visa
    getVisaId(id: number) {
      //show Spinner 
      //Hits Api 
      //Hide Spinner
      //Resp=> Toastr 
    
    
      this.http.get('https://localhost:44391/api/Visa/GetById/' + id).subscribe((resp: any) => {
        this.visa = resp;
        console.log(this.visa);
        
        this.toster.success('Data Retrieved!');
    
      }, err => {
        
        this.toster.error(err.message, err.status);
      })
    
    }
   
    
    deleteVisa(id:number)
    {
      this.spinner.show();
     
      this.http.delete('https://localhost:44391/api/Visa/Delete/'+id).subscribe((resp)=>{
        
          this.toster.success('Deleted Successfully !!');
      },err=>{
        
       this.toster.error(err.message, err.status);
      })
    }

    //-------End Visa 

    //--------Car
  createCar(body: any) {
    
    this.spinner.show();
   
    this.http.post('https://localhost:44391/api/Car/Create', body).subscribe((resp) => {
      console.log(resp);
      this.spinner.hide();
      this.toster.success('Created Successfuly!!');
    }, err => {
      this.spinner.hide();
      this.toster.error(err.message, err.status);
    }
    )
  }
  
  getCarId(id: number) {
    //show Spinner 
    //Hits Api 
    //Hide Spinner
    //Resp=> Toastr 
  
  
    this.http.get('https://localhost:44391/api/Car/GetById/' + id).subscribe((resp: any) => {
      this.car = resp;
      console.log(this.car);
      
      this.toster.success('Data Retrieved!');
  
    }, err => {
      
      this.toster.error(err.message, err.status);
    })
  
  }
 
  
  deleteCar(id:number)
  {
    this.spinner.show();
   
    this.http.delete('https://localhost:44391/api/Car/Delete/'+id).subscribe((resp)=>{
      
        this.toster.success('Deleted Successfully !!');
    },err=>{
      
     this.toster.error(err.message, err.status);
    })
  }
   
  updateCar(body:any)
    {
      
      this.spinner.show();
      this.http.put('https://localhost:44391/api/Car/Update',body).subscribe((resp)=>{
        this.spinner.hide();
        this.toster.success('Updated Successfully !!');
      },err=>{
        this.spinner.hide();
        this.toster.error(err.message, err.status);
      })
    }
    
    //-------End Car

    //--------- Payment
   
    getPaymentId(id: number) {
      //show Spinner 
      //Hits Api 
      //Hide Spinner
      //Resp=> Toastr 
    
    
      this.http.get('https://localhost:44391/api/Payment/GetById/' + id).subscribe((resp: any) => {
        this.payment = resp;
        console.log(this.payment);
        
        this.toster.success('Data Retrieved!');
    
      }, err => {
        
        this.toster.error(err.message, err.status);
      })
    
    }
  
  
  //--------- End Payment


}
