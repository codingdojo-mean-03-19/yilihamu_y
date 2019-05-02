import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { SeattleComponent } from './cities/seattle/seattle.component';
import { SanjoseComponent } from './cities/sanjose/sanjose.component';
import { BurbankComponent } from './cities/burbank/burbank.component';
import { DallasComponent } from './cities/dallas/dallas.component';
import { DcComponent } from './cities/dc/dc.component';
import { ChicagoComponent } from './cities/chicago/chicago.component';

import { WeatherService } from './weather.service';

@NgModule({
  declarations: [
    AppComponent,
    SeattleComponent,
    SanjoseComponent,
    BurbankComponent,
    DallasComponent,
    DcComponent,
    ChicagoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
