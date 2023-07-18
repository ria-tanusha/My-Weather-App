import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { WeatherDetailsListComponent } from './weather-details-list/weather-details-list.component';
import {HttpClientModule} from '@angular/common/http';
import { AddCityComponent } from './add-city/add-city.component';
import { WeatherListComponent } from './weather-list/weather-list.component';
import { FormsModule } from '@angular/forms';

FormsModule

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WeatherDetailsListComponent,
    AddCityComponent,
    WeatherListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
