export interface Character {
  id: string;
  name: string;
  alternate_names: [];
  species: string;
  gender: string;
  house: string;
  dateOfBirth: string;
  yearOfBirth: Date;
  wizard: boolean;
  ancestry: string;
  eyeColour: string;
  hairColour: string;
  wand: Wand;
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  actor: string;
  alternate_actors: [];
  alive: boolean;
  image: string;
}
interface Wand {
  wood: string;
  core: string;
  length: number;
}
