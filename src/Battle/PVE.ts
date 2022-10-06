import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';

export default class PVE extends Battle {
  private _player1: Fighter;
  private _monster: SimpleFighter[];
  constructor(player1:Fighter, monster:SimpleFighter[]) {
    super(player1);
    this._player1 = player1;
    this._monster = monster;
  }

  fight(): number {
    this._monster.forEach((m) => {
      while (this._player1.lifePoints > 0 && m.lifePoints > 0) {
        this._player1.attack(m);
        m.attack(this._player1);
      }
    });
    return super.fight();
  }
}