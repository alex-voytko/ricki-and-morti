import { CharacterFilter } from "../ts-types/interfaces";
import buildParams from "./paramsBuild";

const URL = "https://rickandmortyapi.com/api";
const count = 20;

export const getCharacters = async (page: number, filter: CharacterFilter) =>
  await fetch(
    `${URL}/character?count=${count}&page=${page}${buildParams(filter)}`,
    {
      cache: "no-cache",
    }
  ).then((response) => response.json());

export const getEpisodes = async (page: number) =>
  await fetch(`${URL}/episode?count=${count}&page=${page}`, {
    cache: "no-cache",
  }).then((response) => response.json());

export const getLocations = async (page: number) =>
  await fetch(`${URL}/location?count=${count}&page=${page}`, {
    cache: "no-cache",
  }).then((response) => response.json());
