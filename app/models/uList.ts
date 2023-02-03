import { Character } from "./character";

export interface UList {
  id: string | undefined;
  character: Character;
  isFavorite: boolean;
}
