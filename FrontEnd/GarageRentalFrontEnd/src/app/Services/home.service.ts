
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Home } from '../Models/home.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  message: string = "Welcome :) ";
  display_image1: any;
  display_image2: any;
  display_image3: any;
  home :any[]=[];
  testimonial :any[]=[];
  testimonial_1:any[]=[];
  Contactus :any[]=[];
  Aboutus :any[]=[];//عرفنا اريي عشان رح ترجعلي الداتا جيسون اوبجكت فبحتاج ارريي لحتى اخزن فيها الداتا الي جبتها من الإي بي اّي
  constructor(private http:HttpClient ,private spinner:NgxSpinnerService , private toster:ToastrService ) { }
 baseApiUrl:string = environment.baseApiUrl;
  addHome(addHomeReq:Home):Observable<Home>{
    return this.http.post<Home>(this.baseApiUrl +'Home/Create',addHomeReq);
  }

//About Us
getAboutUs(){
  this.http.get(this.baseApiUrl+'AboutU/GetAll').subscribe((resp: any) => {//السبسكرايب بتتكون من حالتين اول وحدة ترو والثانية اذا كانت ايرور ريسبونس
    this.Aboutus = resp;
    //this.spinner.hide();
  }, err => {
    this.toster.error('something Wrong')
  })
}
updateAboutus(body:any)
  {
    // this.spinner.show();
    this.http.put('https://localhost:44391/api/AboutU/Update',body).subscribe((resp)=>{
      // this.spinner.hide();
      this.toster.success('Updated Successfully !!');
    },err=>{
      // this.spinner.hide();
      this.toster.error(err.message, err.status);
    })
  }
 //End About Us



 //Contact Us
 createContactus(body: any) {
  this.spinner.show();
  debugger
  this.http.post('https://localhost:44391/api/ContactU/Create', body).subscribe((resp) => {
    console.log(resp);
    this.spinner.hide();
    this.toster.success('Created Successfuly!!');
  }, err => {
    this.spinner.hide();
    this.toster.error(err.message, err.status);
  }
  )
}

getAllContactus(){
  this.http.get('https://localhost:44391/api/ContactU/GetAll').subscribe((Resp:any)=>{//السبسكرايب بتتكون من حالتين اول وحدة ترو والثانية اذا كانت ايرور ريسبونس
    this.Contactus=Resp;
    //  this.toster.success('Data Retrieved')
  },err=>{
    this.toster.error('something Wrong')
  })
}

deleteContactus(id:number)
{
  this.spinner.show();

  this.http.delete('https://localhost:44391/api/ContactU/Delete/'+id).subscribe((resp)=>{
    this.spinner.hide();
      this.toster.success('Deleted Successfully !!');
  },err=>{
    this.spinner.hide();
   this.toster.error(err.message, err.status);
  })
}
   //End Contact Us

   //Testimonial
   createTestimonial(body: any) {
debugger
    this.spinner.show();

    this.http.post('https://localhost:44391/api/Testimonial/Create', body).subscribe((resp) => {
      console.log(resp);
      this.spinner.hide();
    this.spinner.show();

      this.toster.success('Created Successfuly!!');
    }, err => {
    this.spinner.show();
    this.spinner.hide();
      this.toster.error(err.message, err.status);
    }
    )
  }

  getAllTestimonial(){


    this.http.get('https://localhost:44391/api/Testimonial/GetAll').subscribe((Resp:any)=>{//السبسكرايب بتتكون من حالتين اول وحدة ترو والثانية اذا كانت ايرور ريسبونس
    this.testimonial=Resp;
      
    this.testimonial_1=Resp;
    this.testimonial_1=this.testimonial.filter(x=>x.status=="Accept");
    debugger;
      //  this.toster.success('Data Retrieved')
    },err=>{

      this.toster.error('something Wrong')
    })
  }



  deleteTestimonial(id:number)
  {
    this.spinner.show();

    this.http.delete('https://localhost:44391/api/Testimonial/Delete/'+id).subscribe((resp)=>{

        this.toster.success('Deleted Successfully !!');
    },err=>{

     this.toster.error(err.message, err.status);
    })
  }

  updateTestimonial(body:any)
    {

      this.spinner.show();
      this.http.put('https://localhost:44391/api/Testimonial/Update',body).subscribe((resp)=>{
        this.spinner.hide();
        this.toster.success('Updated Successfully !!');
      },err=>{
        this.spinner.hide();
        this.toster.error(err.message, err.status);
      })
    }
    //End Testimonial

    //Home


    getHome(){


      this.http.get('https://localhost:44391/api/Home/GetAll').subscribe((Resp:any)=>{//السبسكرايب بتتكون من حالتين اول وحدة ترو والثانية اذا كانت ايرور ريسبونس
        this.home=Resp;

        
      },err=>{

        this.toster.error('something Wrong')
      })
    }


    updateHome(body:any)
      {
        if(this.display_image1 != null) {  
        body.imagE_1 = this.display_image1;
        }
        if(this.display_image2 != null) {
        body.imagE_2 = this.display_image2;}
        if(this.display_image3 != null) {
        body.imagE_3 = this.display_image3;}
        
        this.spinner.show();
        this.http.put('https://localhost:44391/api/Home/Update',body).subscribe((resp)=>{
          this.spinner.hide();
          this.toster.success('Updated Successfully !!');
        },err=>{
          this.spinner.hide();
          this.toster.error(err.message, err.status);
        })
      }

      uploadAttachmentHome(file: FormData) {
        this.http.post('https://localhost:44391/api/Home/UploadIMage/', file).subscribe((resp: any) => {
          this.display_image1 = resp.imagE_1;
          
        }, err => {
          this.toster.error('Can not Upload Image');
          console.log(err);

        })
      }
      uploadAttachmentHome1(file: FormData) {
        this.http.post('https://localhost:44391/api/Home/UploadIMage/', file).subscribe((resp: any) => {
          this.display_image2 = resp.imagE_2;
        }, err => {
          this.toster.error('Can not Upload Image');
          console.log(err);

        })
      }
      uploadAttachmentHome2(file: FormData) {
        this.http.post('https://localhost:44391/api/Home/UploadIMage/', file).subscribe((resp: any) => {
          this.display_image3 = resp.imagE_3;
        }, err => {
          this.toster.error('Can not Upload Image');
          console.log(err);

        })
      }


      //End Home


// getAll(){
//   //هذه الخطوات اللازمة اتباعها عند انشاء اي فنكشن عشان اعمل هيت وهذا الفنكشن بقدر استخدمه في اي مكان زي شييرد بضل ما اضل اكتبه في كل كلاس
//   //عن طريق الماب بس اشتقبل البيانات في ارييي بقدر اتجكم فيها واشكلها وشو بدي ارجع منها عن طريق الماب زي ما اخذنا بالتايب سكريبنت لكن بعدلها هون بالسيرفيس دير بالك
//   //1-show spinar
//   //2-Hits API
//   //3-Hide Spinner
//   //4-resp=> Toster
//   this.spinner.show();
//   this.http.get('https://localhost:44391/api/AboutU/GetAll').subscribe((Resp:any)=>{//السبسكرايب بتتكون من حالتين اول وحدة ترو والثانية اذا كانت ايرور ريسبونس
//     this.Aboutus=Resp;
//     this.spinner.hide();
//      this.toster.success('Data Retrieved')
//   },err=>{
//     this.spinner.hide();
//     this.toster.error('something Wrong')
//   })//شكل الداتا الي رح ترجع من الهيت على ال api (اريي اوف اوبجكتس)
// }
}



