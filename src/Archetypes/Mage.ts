import Archetypes from './Archetype';
import { EnergyType } from '../Energy';

export default class Mage extends Archetypes {
  static instances = 0;
  private _energyType:EnergyType;
  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage.instances += 1;
  }

  get energyType():EnergyType { return this._energyType; }

  static createdArchetypeInstances():number {
    return Mage.instances;
  }
}