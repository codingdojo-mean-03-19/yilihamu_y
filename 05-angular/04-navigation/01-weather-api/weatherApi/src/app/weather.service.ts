import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

import { Weather } from './weather';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
  getWeather(location: string) {
    const apiKey = '0ce9560a9867fac73da8c7712fc37084';
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`)
    .pipe(map(data => {
      console.log(data);
      const { temp, pressure, temp_min, temp_max} = (data as any).main;
      const { all } = (data as any).clouds;
      // const { speed: wind } = (data as any).wind;
      return new Weather(temp, pressure, temp_max, temp_min, all);

    }));
  }
}
