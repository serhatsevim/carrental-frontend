import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
	
  apiUrl = "https://localhost:44134/api/";
  constructor(private httpClient:HttpClient) { }
  
  getCars():Observable<ListResponseModel<Car>>{
	  let newPath = this.apiUrl + "cars/getcardetails";
	  return this.httpClient.get<LisResponseModel<Car>>(newPath);
  }
  
  getCarsByBrand(brandId:number):Observable<LisResponseModel<Car>>{
	  let newPath = this.apiUrl + "cars/getcarsbybrandid?brandId=" + brandId;
	  return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  
  getCarsByColor(colorId:number):Observable<ListResponseModel<Car>>{
	  let newPath = this.apiUrl + "cars/getcarsbycolorid?colorId=" + colorId;
	  return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  
  getCarDetails(carId:number):Observable<SingleResponseModel<Car>>{
	  let newPath = this.apiUrl + "cars/getcardetailsbycarid?carId=" + carId;
	  return this.httpClient.get<SingleResponseModel<Car>>(newPath);
  }
  
  getCarsByBrandAndColor(brandId:number, colorId:number):Observable<ListResponseModel<Car>>{
	  let newPath = this.apiUrl + "cars/getcarsbybrandandcolor?brandId=" + brandId + "&colorId=" + colorId;
	  return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
}
