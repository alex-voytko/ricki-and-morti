import { CharacterFilter, CharacterData } from "../../ts-types/interfaces";

export const initialCharacter: CharacterData = {
  id: 0,
  name: "",
  status: "",
  species: "",
  type: "",
  gender: "",
  origin: {
    name: "",
    url: "",
  },
  location: {
    name: "",
    url: "",
  },
  image: "",
  episode: [],
  url: "",
  created: "",
};
export const initialFilterData: CharacterFilter = {
  Species: "",
  Gender: "",
  Status: "",
};
