import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayersComponent } from './players/players.component';
import { AddComponent } from './players/add/add.component';
import { ListComponent } from './players/list/list.component';

import { GameComponent } from './status/game/game.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'players',
    pathMatch: 'full',
  },
  {
    path: 'players',
    component: PlayersComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: ListComponent,
      },
      {
        path: 'addplayer',
        component: AddComponent,
      },
    ],
  },
  // handy trick that allows the parent and children to share url parameters
  {
    path: 'status/game/:id',
    component: StatusComponent,
    children: [
      {
        path: '',
        component: GameComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
