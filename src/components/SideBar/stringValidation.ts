const validateString = (str: string): string => {
  if (!str.includes("_")) return str;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "_") {
      str = str.slice(0, i) + " " + str.slice(i + 1);
    }
  }
  return str;
};

export default validateString;
