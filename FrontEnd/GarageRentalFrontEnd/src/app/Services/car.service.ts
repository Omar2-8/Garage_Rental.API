import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Car } from '../Models/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {


 baseApiUrl:string = environment.baseApiUrl;

  constructor(private http:HttpClient) { }


  getCarList(): Observable<Car[]>{
    return this.http.get<Car[]>(this.baseApiUrl +'Car/GetAll');
  }

  getCar(id:string):Observable<Car>{
    return this.http.get<Car>(this.baseApiUrl +'Car/GetById?id=' + id);
  }

  addCar(addCarReq:Car):Observable<Car>{
    return this.http.post<Car>(this.baseApiUrl +'Car/Create',addCarReq);
  }

  updateCar(id:number,updateCarreq:Car):Observable<Car>{
    return this.http.post<Car>(this.baseApiUrl +'Car/Update?id='+ id ,updateCarreq)
  }
  deleteCar(id:number):Observable<Car>{
    return this.http.delete<Car>(this.baseApiUrl +'Car/Delete?id=' + id);
  }
}
