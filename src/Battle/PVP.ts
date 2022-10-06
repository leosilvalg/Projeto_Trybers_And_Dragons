import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private player2: Fighter;
  constructor(
    player: Fighter,
    player2: Fighter,
  ) {
    super(player);
    this.player2 = player2;
  }

  fight(): number {
    const { player, player2 } = this;
    while (player.lifePoints > 0 && player2.lifePoints > 0) {
      player.attack(this.player2);
      player2.attack(this.player);
    }
    return super.fight();
  }
}