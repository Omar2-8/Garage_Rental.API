import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GarageModel } from '../Models/garage.model';

@Injectable({
  providedIn: 'root',
})
export class GarageService {
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient, private toster: ToastrService) {}

  getGarageList(): Observable<GarageModel[]> {
    return this.http.get<GarageModel[]>(this.baseApiUrl + 'Garage/GetAll');
  }

  getGarage(id: string): Observable<GarageModel> {
    return this.http.get<GarageModel>(
      this.baseApiUrl + 'Garage/GetById?id=' + id
    );
  }

  addGarage(addGarageReq: GarageModel): Observable<GarageModel> {
    debugger;
    return this.http.post<GarageModel>(
      this.baseApiUrl + 'Garage/Create',
      addGarageReq
    );
    this.toster.show('Create Successfully !!');
  }

  updateGarage(
    id: number,
    updateGaragereq: GarageModel
  ): Observable<GarageModel> {
    return this.http.post<GarageModel>(
      'https://localhost:44391/api/Garage/Update' + id,
      updateGaragereq
    );
  }
  deleteGarage(id: number): Observable<GarageModel> {
    return this.http.delete<GarageModel>(
      this.baseApiUrl + 'Garage/Delete?id=' + id
    );
  }
}
