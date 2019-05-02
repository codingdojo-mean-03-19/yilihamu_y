import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../weather.service';
import { Weather } from '../../weather';

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})
export class DcComponent implements OnInit {
  weather: Weather;
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getWeather('washington')
    .subscribe(weather => {
      this.weather = weather;
    });
  }
}
