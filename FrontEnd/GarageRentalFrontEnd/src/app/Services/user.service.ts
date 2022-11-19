import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {


 baseApiUrl:string = environment.baseApiUrl;

  constructor(private http:HttpClient) { }


  getUserList(): Observable<User[]>{
    return this.http.get<User[]>(this.baseApiUrl +'User/GetAll');
  }

  getUser(id:string):Observable<User>{
    return this.http.get<User>(this.baseApiUrl +'/api/User/GetById?id=' + id);
  }

  addUser(addUserReq:User):Observable<User>{
    return this.http.post<User>(this.baseApiUrl +'/api/User/Create',addUserReq);
  }

  updateUser(id:number,updateUserreq:User):Observable<User>{
    return this.http.post<User>(this.baseApiUrl +'/api/User/Update?id='+ id ,updateUserreq)
  }
  deleteUser(id:number):Observable<User>{
    return this.http.delete<User>(this.baseApiUrl +'/api/User/Delete?id=' + id);
  }
}
