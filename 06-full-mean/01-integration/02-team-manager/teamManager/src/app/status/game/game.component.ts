import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { of, Observable } from 'rxjs';

import { PlayerService } from '../../services';
import { Player } from '../../models';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  sub: Subscription;
  players$: Observable<Player[]>;
  gameIndex: number;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly playerService: PlayerService,
  ) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(
        params => {
          this.gameIndex = parseInt(params.get('id'), 10) - 1;
        },
      );

    this.players$ = this.playerService.getPlayers();
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  playerStatus(player: Player): string {
    return player.games[this.gameIndex].playerStatus;
  }

  selectStatus(player: Player, status: string): void {
    if (player.games[this.gameIndex].playerStatus === status) {
      return;
    }

    player.games[this.gameIndex].playerStatus = status;

    // this.sub = this.playerService.updatePlayer(player)
    //               .subscribe(
    //                 updatedPlayer => console.log(updatedPlayer),
    //                 console.log
    //               );

  }

}
