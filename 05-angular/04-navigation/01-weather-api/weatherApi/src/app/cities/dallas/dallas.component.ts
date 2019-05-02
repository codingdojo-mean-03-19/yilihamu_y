import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../weather.service';
import { Weather } from '../../weather';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  weather: Weather;
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getWeather('dallas')
    .subscribe(weather => {
      this.weather = weather;
    });
  }

}
