import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BurbankComponent } from './cities/burbank/burbank.component';
import { ChicagoComponent } from './cities/chicago/chicago.component';
import { DallasComponent } from './cities/dallas/dallas.component';
import { DcComponent } from './cities/dc/dc.component';
import { SanjoseComponent } from './cities/sanjose/sanjose.component';
import { SeattleComponent } from './cities/seattle/seattle.component';


const routes: Routes = [
  {path: 'burbank', component: BurbankComponent},
  {path: 'chicago', component: ChicagoComponent},
  {path: 'dallas', component: DallasComponent},
  {path: 'dc', component: DcComponent},
  {path: 'sanjose', component: SanjoseComponent},
  {path: 'seattle', component: SeattleComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
