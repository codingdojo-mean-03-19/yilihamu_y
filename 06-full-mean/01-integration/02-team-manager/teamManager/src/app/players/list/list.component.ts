import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { of, Observable } from 'rxjs';

import { PlayerService } from '../../services';

import { Player } from '../../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  sub: Subscription;
  playerSub: Subscription;
  selectedPlayer: Player;
  players: Array<Player> = [];

  constructor(private readonly playerService: PlayerService) { }

  ngOnInit() {
    this.playerSub = this.playerService
      .getPlayers()
      .subscribe(players => this.players = players);
  }

  ngOnDestroy() {
    this.playerSub.unsubscribe();

    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  remove(player: Player) {
    if (confirm(`Are you sure you want to remove ${ player.name }`)) {
      this.sub = this.playerService
                    .destroyPlayer(player._id)
                    .subscribe(() => {
                      this.replacePlayer(player);
                    });
    }
  }

  selectPlayer(player: Player): void {
    this.selectedPlayer = this.selectedPlayer === player ? null : player;
  }

  updatePlayer(updatedPlayer: Player): void {

    const oldPlayer = this.players.find(player => player._id === updatedPlayer._id);

    this.replacePlayer(oldPlayer, updatedPlayer);
  }

  private replacePlayer(player: Player, replacement?: Player): void {
    if (this.selectedPlayer === player) {
      this.selectPlayer(replacement ? replacement : player);
    }

    const index = this.playerIndex(player);

    if (replacement) {
      this.players.splice(index, 1, replacement);
    } else {
      this.players.splice(index, 1);
    }
  }

  private playerIndex(player: Player): number {
    return this.players.indexOf(player);
  }

}
