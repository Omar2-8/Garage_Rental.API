import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Payment } from '../Models/payment.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {


 baseApiUrl:string = environment.baseApiUrl;

  constructor(private http:HttpClient) { }


  getPaymentList(): Observable<Payment[]>{
    return this.http.get<Payment[]>(this.baseApiUrl +'Payment/GetAll');
  }

  getPayment(id:string):Observable<Payment>{
    return this.http.get<Payment>(this.baseApiUrl +'Payment/GetById?id=' + id);
  }

  addPayment(addPaymentReq:Payment):Observable<Payment>{
    return this.http.post<Payment>(this.baseApiUrl +'Payment/Create',addPaymentReq);
  }

  updatePayment(id:number,updatePaymentreq:Payment):Observable<Payment>{
    return this.http.post<Payment>(this.baseApiUrl +'Payment/Update?id='+ id ,updatePaymentreq)
  }
  deletePayment(id:number):Observable<Payment>{
    return this.http.delete<Payment>(this.baseApiUrl +'Payment/Delete?id=' + id);
  }
}
