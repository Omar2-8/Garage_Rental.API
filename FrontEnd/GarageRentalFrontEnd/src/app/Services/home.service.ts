
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  garage :any[]=[];//عرفنا اريي عشان رح ترجعلي الداتا جيسون اوبجكت فبحتاج ارريي لحتى اخزن فيها الداتا الي جبتها من الإي بي اّي
  constructor(private http:HttpClient ,private spinner:NgxSpinnerService , private toster:ToastrService ) { }


getAll(){
  //هذه الخطوات اللازمة اتباعها عند انشاء اي فنكشن عشان اعمل هيت وهذا الفنكشن بقدر استخدمه في اي مكان زي شييرد بضل ما اضل اكتبه في كل كلاس
  //عن طريق الماب بس اشتقبل البيانات في ارييي بقدر اتجكم فيها واشكلها وشو بدي ارجع منها عن طريق الماب زي ما اخذنا بالتايب سكريبنت لكن بعدلها هون بالسيرفيس دير بالك
  //1-show spinar 
  //2-Hits API
  //3-Hide Spinner 
  //4-resp=> Toster
  this.spinner.show();
  this.http.get('https://localhost:44391/api/LongLetGrages/GetLongitudeLatitude').subscribe((Resp:any)=>{//السبسكرايب بتتكون من حالتين اول وحدة ترو والثانية اذا كانت ايرور ريسبونس
    this.garage=Resp;
    this.spinner.hide();
     this.toster.success('Data Retrieved')
  },err=>{
    this.spinner.hide();
    this.toster.error('something Wrong')
  })//شكل الداتا الي رح ترجع من الهيت على ال api (اريي اوف اوبجكتس)
}

}