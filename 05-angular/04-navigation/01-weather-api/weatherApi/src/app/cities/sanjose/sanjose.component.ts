import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../weather.service';
import { Weather } from '../../weather';

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {
  weather: Weather;
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getWeather('san jose')
    .subscribe(weather => {
      this.weather = weather;
    });
  }

}
