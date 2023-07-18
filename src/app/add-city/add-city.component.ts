import { Component,OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import {CityWeatherDetails} from '../module/CityWeatherDetails';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.css']
})
export class AddCityComponent implements OnInit {

  public cityList : CityWeatherDetails[];
  public cityWeatherDetails:CityWeatherDetails;

  public id: number;
  public city:any;
  public temparature:string;
  public weather:string;
  public errorMsg:string;

 
  public location:any;


  constructor(private weatherService:WeatherService){}

  ngOnInit(): void {
    this.cityList = [
      {
        id: 1,
        city:"Newyork",
        temparature:"string",
        weather:"Cloudy"
      }
    ];
  }

  addNewCity(){
    console.log("location=="+this.location);
     this.fetchWeatherDetails(this.location);

     const newCity : CityWeatherDetails={
      id: 2,
      city:this.location,
      temparature:"string",
      weather:" "

     };

    this.cityList.push(newCity);

  }

  fetchWeatherDetails (location:string){
    let lat=location.split(",")[0];
    let lon=location.split(",")[1];

    this.weatherService.getWeatherDetails()
    .subscribe({
      next: (data)=>{
         
        console.log("data==>"+data);
      //   this.city= data['city'],
      //   textfile:  data['textfile']
      //   CityWeatherDetails cityWeatherDetails=new CityWeatherDetails();
      //  (this.cityList).push(cityWeatherDetails);
      return data;
      },
      error:e=>{
        this.errorMsg=e;
      }
    })
  }



}
