import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../weather.service';
import { Weather } from '../../weather';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  weather: Weather;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getWeather('chicago')
    .subscribe(weather => {
      this.weather = weather;
    });
  }

}
