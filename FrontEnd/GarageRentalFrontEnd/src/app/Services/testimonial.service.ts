import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Testimonial } from '../Models/testimonial.model';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {


 baseApiUrl:string = environment.baseApiUrl;

  constructor(private http:HttpClient) { }


  getTestimonialList(): Observable<Testimonial[]>{
    return this.http.get<Testimonial[]>(this.baseApiUrl +'Testimonial/GetAll');
  }

  getTestimonial(id:string):Observable<Testimonial>{
    return this.http.get<Testimonial>(this.baseApiUrl +'/api/Testimonial/GetById?id=' + id);
  }

  addTestimonial(addTestimonialReq:Testimonial):Observable<Testimonial>{
    return this.http.post<Testimonial>(this.baseApiUrl +'/api/Testimonial/Create',addTestimonialReq);
  }

  updateTestimonial(id:number,updateTestimonialreq:Testimonial):Observable<Testimonial>{
    return this.http.post<Testimonial>(this.baseApiUrl +'/api/Testimonial/Update?id='+ id ,updateTestimonialreq)
  }
  deleteTestimonial(id:number):Observable<Testimonial>{
    return this.http.delete<Testimonial>(this.baseApiUrl +'/api/Testimonial/Delete?id=' + id);
  }
}
