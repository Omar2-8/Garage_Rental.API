import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ContactUs } from '../Models/contactUs.model';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {


 baseApiUrl:string = environment.baseApiUrl;

  constructor(private http:HttpClient) { }


  getContactUsList(): Observable<ContactUs[]>{
    return this.http.get<ContactUs[]>(this.baseApiUrl +'ContactU/GetAll');
  }

  getContactUs(id:string):Observable<ContactUs>{
    return this.http.get<ContactUs>(this.baseApiUrl +'ContactU/GetById?id=' + id);
  }

  addContactUs(addContactUsReq:ContactUs):Observable<ContactUs>{
    return this.http.post<ContactUs>(this.baseApiUrl +'ContactU/Create',addContactUsReq);
  }

  updateContactUs(id:number,updateContactUsreq:ContactUs):Observable<ContactUs>{
    return this.http.post<ContactUs>(this.baseApiUrl +'ContactU/Update?id='+ id ,updateContactUsreq)
  }
  deleteContactUs(id:number):Observable<ContactUs>{
    return this.http.delete<ContactUs>(this.baseApiUrl +'ContactU/Delete?id=' + id);
  }
}
