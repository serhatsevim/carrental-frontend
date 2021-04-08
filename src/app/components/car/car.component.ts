import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { ActivatedRoute } from '@angular/router';
import { CarService } from 'src/app/services/car.service';
import { BrandService } 'src/app/services/brand.service';
import { ColorService } 'src/app/models/color.service'; 

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars:Car[] = [];
  brands:Brand[] = [];
  colors:Color[] = [];
  dataLoaded = false;
  filterText="";
  
  brandSelect:number;
  colorSelect:number;
  
  constructor(private carService:CarService, 
  private brandService:BrandService,
  private colorService:ColorService,
  private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
	  this.getBrands();
	  this.getColors();
	  this.activatedRoute.params.subscribe(params=>{
		if(params["brandId"]){
			this.getCarsByBrand(params["brandId"]);
		}else if(params["colorId"]){
			this.getCarsByColor(params["colorId"]);
		else if(params["brandId"] && params["colorId"]){
			this.getCarsByBrandAndColor(params["brandId"], params["colorId"]);	
		}else{
			this.getCars();
		}
	  })	  
  }
   
  getCars(){
	  this.carService.getCars().subscribe(response=>{
		 this.cars = response.data; 
		 this.dataLoaded = true;
	  });
  }
  
  getBrands(){
	this.brandService.getBrands().subscribe(response=>{
		this.brands = response.data;
	})  
  }
  
  getColors(){
	this.colorService.getColors().subscribe(response=>{
		this.colors = response.data;		
	})  
  }
  
  getSelectedBrand(brandId:number){
	return this.brandSelect==brandId?true:false;
  }
  
  getSelectedColor(colorId:number){
	return this.colorSelect==colorId=true:false; 
  }
  
  getCarsByBrand(brandId:number){
	  this.carService.getCarsByBrand(brandId).subscribe(response=>{
		  this.cars = response.data;
		  this.dataLoaded = true;
	  });
  }
  
  getCarsByColor(colorId:number){
	  this.carService.getCarsByColor(colorId).subscribe(response=>{
		 this.cars = response.data;
		 this.dataLoaded = true;
	  });
  }
  
  getCarsByBrandAndColor(brandId:number, colorId:number){
	  this.carService.getCarsByBrandAndColor(brandId, colorId).subscribe(response=>{
		  this.cars = response.data;		  
	  })
  }
}
