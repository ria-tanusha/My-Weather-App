import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { throwError } from 'rxjs';
import {of} from 'rxjs';
// import { Http, Response, Headers, RequestOptions } from '@angular/http';
// import WeatherJson from './weather.json';


@Injectable({
  providedIn: 'root'
})
export class WeatherService{

  public url='./weather.json';
  

  public weather : any=[];

  constructor(private httpClient :HttpClient) { }

  getWeatherDetails(): Observable<any> {
    console.log("getWeatherDetails.....");
   return  this.weather=this.httpClient.get<any>(this.url)
           .pipe(catchError(this.errorHandler));
  }

  errorHandler(errorRes: HttpErrorResponse){
    return throwError(() => {
      return errorRes;
  });
    
  }


}
