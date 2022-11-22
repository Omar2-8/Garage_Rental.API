import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Garage } from '../Models/garage.model';

@Injectable({
  providedIn: 'root'
})
export class GarageService {


 baseApiUrl:string = environment.baseApiUrl;

  constructor(private http:HttpClient) { }


  getGarageList(): Observable<Garage[]>{
    return this.http.get<Garage[]>(this.baseApiUrl +'Garage/GetAll');
  }

  getGarage(id:string):Observable<Garage>{
    return this.http.get<Garage>(this.baseApiUrl +'Garage/GetById?id=' + id);
  }

  addGarage(addGarageReq:Garage):Observable<Garage>{
    return this.http.post<Garage>(this.baseApiUrl +'Garage/Create',addGarageReq);
  }

  updateGarage(id:number,updateGaragereq:Garage):Observable<Garage>{
    return this.http.post<Garage>(this.baseApiUrl +'Garage/Update?id='+ id ,updateGaragereq)
  }
  deleteGarage(id:number):Observable<Garage>{
    return this.http.delete<Garage>(this.baseApiUrl +'Garage/Delete?id=' + id);
  }
}
