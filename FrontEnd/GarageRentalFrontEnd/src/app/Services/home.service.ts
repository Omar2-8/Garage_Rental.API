
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
  display_image: any;
  home :any[]=[];
  testimonial :any[]=[];
  Contactus :any[]=[];
  Aboutus :any[]=[];//عرفنا اريي عشان رح ترجعلي الداتا جيسون اوبجكت فبحتاج ارريي لحتى اخزن فيها الداتا الي جبتها من الإي بي اّي
  constructor(private http:HttpClient ,private spinner:NgxSpinnerService , private toster:ToastrService ) { }
 baseApiUrl:string = environment.baseApiUrl;
<<<<<<< HEAD

  constructor(private http:HttpClient) { }



  getHomeList(): Observable<Home[]>{
    return this.http.get<Home[]>(this.baseApiUrl +'Home/GetAll');
  }

  getHome(id:string):Observable<Home>{
    return this.http.get<Home>(this.baseApiUrl +'Home/GetById?id=' + id);
  }

=======
>>>>>>> 557d5158e1abdc2ec797bd6ba8df4d7d0de22ef5
  addHome(addHomeReq:Home):Observable<Home>{
    return this.http.post<Home>(this.baseApiUrl +'Home/Create',addHomeReq);
  }

getAll(){
  //هذه الخطوات اللازمة اتباعها عند انشاء اي فنكشن عشان اعمل هيت وهذا الفنكشن بقدر استخدمه في اي مكان زي شييرد بضل ما اضل اكتبه في كل كلاس
  //عن طريق الماب بس اشتقبل البيانات في ارييي بقدر اتجكم فيها واشكلها وشو بدي ارجع منها عن طريق الماب زي ما اخذنا بالتايب سكريبنت لكن بعدلها هون بالسيرفيس دير بالك
  //1-show spinar
  //2-Hits API
  //3-Hide Spinner
  //4-resp=> Toster
  this.spinner.show();
  this.http.get('https://localhost:44391/api/AboutU/GetAll').subscribe((Resp:any)=>{//السبسكرايب بتتكون من حالتين اول وحدة ترو والثانية اذا كانت ايرور ريسبونس
    this.Aboutus=Resp;
    this.spinner.hide();
     this.toster.success('Data Retrieved')
  },err=>{
    this.spinner.hide();
    this.toster.error('something Wrong')
  })//شكل الداتا الي رح ترجع من الهيت على ال api (اريي اوف اوبجكتس)
}
//About Us
getAboutUs(){


  this.http.get('https://localhost:44391/api/AboutU/GetAll').subscribe((Resp:any)=>{//السبسكرايب بتتكون من حالتين اول وحدة ترو والثانية اذا كانت ايرور ريسبونس
    this.Aboutus=Resp;

     this.toster.success('Data Retrieved')
  },err=>{

    this.toster.error('something Wrong')
  })
}

updateAboutus(body:any)
  {

    this.spinner.show();
    this.http.put('https://localhost:44391/api/AboutU/Update',body).subscribe((resp)=>{
      this.spinner.hide();
      this.toster.success('Updated Successfully !!');
    },err=>{
      this.spinner.hide();
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

     this.toster.success('Data Retrieved')
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

    this.spinner.show();

    this.http.post('https://localhost:44391/api/Testimonial/Create', body).subscribe((resp) => {
      console.log(resp);
      this.spinner.hide();
      this.toster.success('Created Successfuly!!');
    }, err => {
      this.spinner.hide();
      this.toster.error(err.message, err.status);
    }
    )
  }

  getAllTestimonial(){


    this.http.get('https://localhost:44391/api/Testimonial/GetAll').subscribe((Resp:any)=>{//السبسكرايب بتتكون من حالتين اول وحدة ترو والثانية اذا كانت ايرور ريسبونس
      this.testimonial=Resp;

       this.toster.success('Data Retrieved')
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

         this.toster.success('Data Retrieved')
      },err=>{

        this.toster.error('something Wrong')
      })
    }


    updateHome(body:any)
      {
        body.image = this.display_image;
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
          this.display_image = resp.image;
        }, err => {
          this.toster.error('Can not Upload Image');
          console.log(err);

        })
      }

      //End Home



}



