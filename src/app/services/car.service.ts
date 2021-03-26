import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
	
  apiUrl = "https://localhost:44134/api/cars/getcardetails";
  constructor(private httpClient:HttpClient) { }
  
  getCars():Observable<ListResponseModel<Car>>{
	  return this.httpClient.get<LisResponseModel<Car>>(this.apiUrl);
  }
}
