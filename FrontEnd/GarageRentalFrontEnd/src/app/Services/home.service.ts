
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
//   garage :any[]=[];//عرفنا اريي عشان رح ترجعلي الداتا جيسون اوبجكت فبحتاج ارريي لحتى اخزن فيها الداتا الي جبتها من الإي بي اّي
//   constructor(private http:HttpClient ,private spinner:NgxSpinnerService , private toster:ToastrService ) { }


// getAll(){
//   //هذه الخطوات اللازمة اتباعها عند انشاء اي فنكشن عشان اعمل هيت وهذا الفنكشن بقدر استخدمه في اي مكان زي شييرد بضل ما اضل اكتبه في كل كلاس
//   //عن طريق الماب بس اشتقبل البيانات في ارييي بقدر اتجكم فيها واشكلها وشو بدي ارجع منها عن طريق الماب زي ما اخذنا بالتايب سكريبنت لكن بعدلها هون بالسيرفيس دير بالك
//   //1-show spinar
//   //2-Hits API
//   //3-Hide Spinner
//   //4-resp=> Toster
//   this.spinner.show();
//   this.http.get('حط هون رابط اللوكل هوست').subscribe((Resp:any)=>{//السبسكرايب بتتكون من حالتين اول وحدة ترو والثانية اذا كانت ايرور ريسبونس
//     this.garage=Resp;
//     this.spinner.hide();
//      this.toster.success('Data Retrieved')
//   },err=>{
//     this.spinner.hide();
//     this.toster.error('something Wrong')
//   })//شكل الداتا الي رح ترجع من الهيت على ال api (اريي اوف اوبجكتس)
// }



 baseApiUrl:string = environment.baseApiUrl;

  constructor(private http:HttpClient) { }


  getHomeList(): Observable<Home[]>{
    return this.http.get<Home[]>(this.baseApiUrl +'Home/GetAll');
  }

  getHome(id:string):Observable<Home>{
    return this.http.get<Home>(this.baseApiUrl +'Home/GetById?id=' + id);
  }

  addHome(addHomeReq:Home):Observable<Home>{
    return this.http.post<Home>(this.baseApiUrl +'Home/Create',addHomeReq);
  }

  updateHome(id:number,updateHomereq:Home):Observable<Home>{
    return this.http.put<Home>(this.baseApiUrl +'Home/Update?id='+ id ,updateHomereq)
  }
  deleteHome(id:number):Observable<Home>{
    return this.http.delete<Home>(this.baseApiUrl +'Home/Delete?id=' + id);
  }

}
