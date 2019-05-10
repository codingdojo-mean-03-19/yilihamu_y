import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { PlayerService } from '../../services';

import { Player } from '../../models';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  player: Player = new Player();
  errors: string[] = [];
  sub: Subscription;

  constructor(private readonly playerService: PlayerService, private readonly router: Router) { }

  ngOnInit() {
  }


  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  addPlayer(player: Player): void {
    this.sub = this.playerService
      .createPlayer(player)
      .subscribe(
        () => this.router.navigate(['players/list']),
        response => this.handleErrors(response.json())
      );
  }

  private handleErrors(errors: Error | string[]): void {
    this.errors = Array.isArray(errors) ? errors : [errors.message];
  }
}
