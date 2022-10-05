import Archetypes from './Archetype';
import { EnergyType } from '../Energy';

export default class Ranger extends Archetypes {
  static instances = 0;
  private _energyType:EnergyType;
  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger.instances += 1;
  }

  get energyType():EnergyType { return this._energyType; }

  static createdArchetypeInstances():number {
    return Ranger.instances;
  }
}