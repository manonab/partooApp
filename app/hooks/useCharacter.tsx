import useSWR from "swr";
import { houses } from "@/api/houses";
import { fetcher } from "@/helpers/fetcher";
import { Character } from "@/models/character";

export const useGetCharacter = (value: string) => {
  const { data: data } = useSWR<Character>(houses.getAll(value), fetcher);

  return {
    data,
  };
};
