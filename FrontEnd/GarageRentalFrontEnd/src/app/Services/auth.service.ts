import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from './home.service';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private home :HomeService, 
    
    private toastr:ToastrService,private router:Router,private http:HttpClient,
    ) { }
  login(email:any, password:any)
  {
    var body ={
      email:email.value.toString(),
      password: password.value.toString()
    }
    const headerDic={
      'Content-Type' :'application/json',
      'Accept':'application/json'
    }
    const requestOptions={
      headers: new HttpHeaders(headerDic)
    }
    this.http.post('https://localhost:44391/api/Auth/AuthLogin/',body,requestOptions).subscribe((resp:any)=>{
      const responce={
        token :resp.toString()
      }
      localStorage.setItem('token',responce.token);//save local in token
      let data :any=jwt_decode(responce.token);
      localStorage.setItem('user',JSON.stringify({...data}));
      debugger
      if(data.Role==1)
      this.router.navigate(['Admin/dashboard']);
      else if (data.Role==2)
      this.router.navigate(['home']); 
    },err=>{
      this.toastr.error(err.message,err.status);
    })
  }
}

