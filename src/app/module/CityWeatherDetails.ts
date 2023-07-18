export class CityWeatherDetails{

    id: number;
    city:string;
    temparature:string;
    weather:string;

    constructor(id:number,city:string, temparature:string,weather:string){
        this.id=id;
        this.city=city;
        this.temparature=temparature;
        this.weather=weather;
        
    }
}