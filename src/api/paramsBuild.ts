import { CharacterFilter } from "../ts-types/interfaces";

const buildParams = (params: CharacterFilter): string => {
  const entries = Object.entries(params);
  let str = "";
  for (const entry of entries) {
    if (entry[1] !== "") {
      str += `&${entry[0].toLowerCase()}=${entry[1]}`;
    }
  }
  return str;
};

export default buildParams;
