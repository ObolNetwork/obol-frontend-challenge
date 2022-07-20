export interface IPokemon {
  name: string;
  hp: number;
  dexIndex: number;
  artworkUrl: string;
  attack: number;
  defense: number;
  speed: number;
  specialAttack: number;
  specialDefense: number;
  types: string[];
  abilities: string[];
  height: number;
  weight: number;
  genderRatioFemale: number;
  genderRatioMale: number;
  captureRate: number;
  isLegendary: boolean;
  isMythical: boolean;
  hatchCounter: number;
  baseHappiness: number;
  baseExperience: number;
  habitat: string;
}