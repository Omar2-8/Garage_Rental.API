import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Visa } from '../Models/visa.model';

@Injectable({
  providedIn: 'root'
})
export class VisaService {


 baseApiUrl:string = environment.baseApiUrl;

  constructor(private http:HttpClient) { }


  getVisaList(): Observable<Visa[]>{
    return this.http.get<Visa[]>(this.baseApiUrl +'Visa/GetAll');
  }

  getVisa(id:string):Observable<Visa>{
    return this.http.get<Visa>(this.baseApiUrl +'Visa/GetById?id=' + id);
  }

  addVisa(addVisaReq:Visa):Observable<Visa>{
    return this.http.post<Visa>(this.baseApiUrl +'Visa/Create',addVisaReq);
  }

  updateVisa(id:number,updateVisareq:Visa):Observable<Visa>{
    return this.http.post<Visa>(this.baseApiUrl +'Visa/Update?id='+ id ,updateVisareq)
  }
  deleteVisa(id:number):Observable<Visa>{
    return this.http.delete<Visa>(this.baseApiUrl +'Visa/Delete?id=' + id);
  }
}
