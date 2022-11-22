import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Rent } from '../Models/rent.model';

@Injectable({
  providedIn: 'root'
})
export class RentService {


 baseApiUrl:string = environment.baseApiUrl;

  constructor(private http:HttpClient) { }


  getRentList(): Observable<Rent[]>{
    return this.http.get<Rent[]>(this.baseApiUrl +'Rent/GetAll');
  }

  getRent(id:string):Observable<Rent>{
    return this.http.get<Rent>(this.baseApiUrl +'Rent/GetById?id=' + id);
  }

  addRent(addRentReq:Rent):Observable<Rent>{
    return this.http.post<Rent>(this.baseApiUrl +'Rent/Create',addRentReq);
  }

  updateRent(id:number,updateRentreq:Rent):Observable<Rent>{
    return this.http.post<Rent>(this.baseApiUrl +'Rent/Update?id='+ id ,updateRentreq)
  }
  deleteRent(id:number):Observable<Rent>{
    return this.http.delete<Rent>(this.baseApiUrl +'Rent/Delete?id=' + id);
  }
}
