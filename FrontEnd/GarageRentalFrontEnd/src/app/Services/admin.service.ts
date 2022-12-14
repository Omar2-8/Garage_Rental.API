
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseApiUrl:string = environment.baseApiUrl;
  message: string = "Welcome :) ";
  display_image: any;
  display_image1: any;
  display_image2: any;
  visa :any[]=[];
  payment :any[]=[];
  rent :any[]=[];
  user :any={};
  garage :any[]=[];//عرفنا اريي عشان رح ترجعلي الداتا جيسون اوبجكت فبحتاج ارريي لحتى اخزن فيها الداتا الي جبتها من الإي بي اّي
  constructor(private http:HttpClient ,private spinner:NgxSpinnerService , private toster:ToastrService ) { }
   
  //-------User
  getAllUsers(){
    this.http.get(this.baseApiUrl+'Users/GetAll').subscribe((Resp:any)=>{//السبسكرايب بتتكون من حالتين اول وحدة ترو والثانية اذا كانت ايرور ريسبونس
      this.user=Resp;
      //  this.toster.success('Data Retrieved')
    },err=>{
      this.toster.error('something Wrong')
    })
  }
  //-------End User

  //-------Garage 
  createGarage(body: any) {
    body.image1 = this.display_image1;
    body.image2 = this.display_image2;
    this.spinner.show();
    this.http.post('https://localhost:44391/api/Garage/Create', body).subscribe((resp) => {
      console.log(resp);
      setTimeout(()=>{
        this.spinner.hide();
        this.toster.success('Created Garage !!');
        },2000)
      
    }, err => {
      this.spinner.hide();
      this.toster.error(err.message, err.status);
    }
    )
  }
  getAllGarage(){
    this.http.get('https://localhost:44391/api/Garage/GetAll').subscribe((Resp:any)=>{//السبسكرايب بتتكون من حالتين اول وحدة ترو والثانية اذا كانت ايرور ريسبونس
      this.garage=Resp;      
      // this.toster.success('Data Retrieved')
    },err=>{
      this.toster.error('something Wrong')
    })
  }
  
  getGarageId(id: number) {
    //show Spinner 
    //Hits Api 
    //Hide Spinner
    //Resp=> Toastr   
    this.http.get('https://localhost:44391/api/Garage/GetById/' + id).subscribe((resp: any) => {
      this.garage = resp;
      console.log(this.garage);
      // this.toster.success('Data Retrieved!');
    }, err => {
      this.toster.error(err.message, err.status);
    })
  }
 
  ChangeStatusOfGrage(body:any) {this.http.put(this.baseApiUrl+'LongLetGrages/ChangeGragaeStatus',body).subscribe((resp)=>{
    this.toster.success('Change Status of The Garage Successfully !!');
  },err=>{
    this.toster.error(err.message, err.status);
  })
  
  }
  SendEmail(email: string,status:string) {
    this.http.get(this.baseApiUrl+'Users/SendEmail/'+ email+"/"+status).subscribe((resp: any) => {
      this.toster.success('THe email sending!!');
    }, err => {
      this.toster.error(err.message, err.status);
    })
  }
  SendEmail2(email: string,status:string) {
    debugger;
    this.http.get(this.baseApiUrl+'Users/SendEmail2/'+ email+"/"+status).subscribe((resp: any) => {
      this.toster.success('THe email sending!!');
    }, err => {
      this.toster.error(err.message, err.status);
    })
  }

  deleteGarage(id:number)
  {
    this.spinner.show();    
    this.http.delete(this.baseApiUrl+'Garage/Delete/'+id).subscribe((resp)=>{
        
        setTimeout(()=>{
          this.spinner.hide();
          this.toster.success('Deleted Successfully !!');
          },2500)
    },err=>{
      this.toster.error(err.message, err.status);
      this.spinner.hide(); 
    })
  }
  updateGarage(body:any)
  { if(this.display_image1 != null) {  
    body.image1 = this.display_image1;
    }
    if(this.display_image2 != null) {
    body.image2 = this.display_image2;}
    this.http.put(this.baseApiUrl+'Garage/Update',body).subscribe((resp)=>{
      this.toster.success('Updated The Garage Successfully !!');
    },err=>{
      this.toster.error(err.message, err.status);
    })
  }

  uploadAttachmentGarage(file: FormData) {
    this.http.post('https://localhost:44391/api/Home/UploadIMage/', file).subscribe((resp: any) => {
      this.display_image1 = resp.image1;
    }, err => {
      this.toster.error('Can not Upload Image');
      console.log(err);

    })
  }
  uploadAttachmentGarage2(file: FormData) {
    this.http.post('https://localhost:44391/api/Home/UploadIMage/', file).subscribe((resp: any) => {
      this.display_image2 = resp.image2;
    }, err => {
      this.toster.error('Can not Upload Image');
      console.log(err);

    })
  }
  //-------End Garage 

  //---------Rent
  getAllRents(){
    this.http.get('https://localhost:44391/api/Rent/GetAll').subscribe((Resp:any)=>{//السبسكرايب بتتكون من حالتين اول وحدة ترو والثانية اذا كانت ايرور ريسبونس
      this.rent=Resp;
      // this.toster.success('Data Retrieved')
    },err=>{      
      this.toster.error('something Wrong')
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
  //--------- End Rent
  

  //--------- Payment
  getAllPayment(){
    this.http.get(this.baseApiUrl+'Payment/GetAll').subscribe((Resp:any)=>{//السبسكرايب بتتكون من حالتين اول وحدة ترو والثانية اذا كانت ايرور ريسبونس
      this.payment=Resp;
      // this.toster.success('Data Retrieved')
    },err=>{
      this.toster.error('something Wrong')
    })
  }
  
  deletePayment(id:number)
  {
    this.http.delete(this.baseApiUrl+'Payment/Delete/'+id).subscribe((resp)=>{
        this.toster.success('Deleted Successfully !!');
    },err=>{
      this.toster.error(err.message, err.status);
    })
  }
  //--------- End Payment


  //--------- Visa
  getAllVisa(){    
    this.http.get('https://localhost:44391/api/Visa/GetAll').subscribe((Resp:any)=>{//السبسكرايب بتتكون من حالتين اول وحدة ترو والثانية اذا كانت ايرور ريسبونس
      this.visa=Resp;

      this.toster.success('Data Retrieved')
    },err=>{
      
      this.toster.error('something Wrong')
    })
  }
  //--------- End Visa
}
