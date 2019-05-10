import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

import { Player } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private readonly base = '/api/players';

  constructor(private readonly http: HttpClient) { }

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.base)
  }

  showPlayer(id: string): Observable<Player> {
    return this.http.get<Player>(this.base + id)
  }

  createPlayer(player: Player): Observable<Player> {
    return this.http.post<Player>(this.base, player)
  }

  // updatePlayer(player: Player): Observable<Player> {
  //   return this.http.put<Player>(this.base + player._id, player)
  // }

  destroyPlayer(id: string): Observable<Player> {
    return this.http.delete<Player>(this.base + id)
  }
}
