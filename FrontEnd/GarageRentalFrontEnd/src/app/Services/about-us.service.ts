import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AboutUs } from '../Models/aboutUs.model';

@Injectable({
  providedIn: 'root'
})
export class AboutUsService {

 baseApiUrl:string = environment.baseApiUrl;

  constructor(private http:HttpClient) { }


  getAboutUsList(): Observable<AboutUs[]>{
    return this.http.get<AboutUs[]>(this.baseApiUrl +'AboutU/GetAll');
  }

  getAboutUs(id:string):Observable<AboutUs>{
    return this.http.get<AboutUs>(this.baseApiUrl +'/api/AboutU/GetById?id=' + id);
  }

  addAboutUs(addAboutUsReq:AboutUs):Observable<AboutUs>{
    return this.http.post<AboutUs>(this.baseApiUrl +'/api/AboutU/Create',addAboutUsReq);
  }

  updateAboutUs(id:number,updateAboutUsreq:AboutUs):Observable<AboutUs>{
    return this.http.post<AboutUs>(this.baseApiUrl +'/api/AboutU/Update?id='+ id ,updateAboutUsreq)
  }
  deleteAboutUs(id:number):Observable<AboutUs>{
    return this.http.delete<AboutUs>(this.baseApiUrl +'/api/AboutU/Delete?id=' + id);
  }
}
