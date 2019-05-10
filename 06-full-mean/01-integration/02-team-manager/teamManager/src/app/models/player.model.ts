import { Game } from './game.model';

export class Player {
  _id: string;
  name: string;
  preferredPosition: string;
  games: Game[];
}
