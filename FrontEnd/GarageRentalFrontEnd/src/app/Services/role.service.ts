import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Role } from '../Models/role.model';

@Injectable({
  providedIn: 'root'
})
export class RoleService {


 baseApiUrl:string = environment.baseApiUrl;

  constructor(private http:HttpClient) { }


  getRoleList(): Observable<Role[]>{
    return this.http.get<Role[]>(this.baseApiUrl +'Role/GetAll');
  }

  getRole(id:string):Observable<Role>{
    return this.http.get<Role>(this.baseApiUrl +'Role/GetById?id=' + id);
  }

  addRole(addRoleReq:Role):Observable<Role>{
    return this.http.post<Role>(this.baseApiUrl +'Role/Create',addRoleReq);
  }

  updateRole(id:number,updateRolereq:Role):Observable<Role>{
    return this.http.post<Role>(this.baseApiUrl +'Role/Update?id='+ id ,updateRolereq)
  }
  deleteRole(id:number):Observable<Role>{
    return this.http.delete<Role>(this.baseApiUrl +'Role/Delete?id=' + id);
  }
}
