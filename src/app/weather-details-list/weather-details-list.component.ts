import { Component,OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { HttpClient } from '@angular/common/http';
import { HttpEvent } from '@angular/common/http';


@Component({
  selector: 'app-weather-details-list',
  templateUrl: './weather-details-list.component.html',
  styleUrls: ['./weather-details-list.component.css']
})
export class WeatherDetailsListComponent implements OnInit{

  public weatherDetailsList :any =[];
  public errorMsg='';

  constructor(private weatherService:WeatherService,private httpClient:HttpClient){}
  
  ngOnInit(): void {
    // this.weatherService.getWeatherDetails()
    // .subscribe({
    //   next :data=>{this.weatherDetailsList=data},
    //   error: e=>{
    //     this.errorMsg=e.message;
    //   }
    // })
  }

}
