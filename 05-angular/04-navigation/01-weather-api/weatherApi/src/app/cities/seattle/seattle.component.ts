import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../weather.service';
import { Weather } from '../../weather';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  weather: Weather;
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getWeather('seattle')
    .subscribe(weather => {
      this.weather = weather;
    });
  }

}
