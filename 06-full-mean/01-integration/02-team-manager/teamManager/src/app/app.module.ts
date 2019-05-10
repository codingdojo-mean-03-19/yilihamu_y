import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavComponent } from './nav/nav.component';
import { PlayersComponent } from './players/players.component';
import { StatusComponent } from './status/status.component';
import { AddComponent } from './players/add/add.component';
import { ListComponent } from './players/list/list.component';
import { PlayersNavComponent } from './players/nav/nav.component';
import { GameComponent } from './status/game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    StatusComponent,
    NavComponent,
    AddComponent,
    ListComponent,
    PlayersNavComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
