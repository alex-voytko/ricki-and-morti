import { useState } from "react";
import { useContext } from "react";
import { CharacterContext } from "../../views/CharactersView/";

interface SelectInputProps {
  name: string;
  options: string[];
}
function SelectInput({ name, options }: SelectInputProps) {
  const [option, setOption] = useState("Not chosen");
  const { handleChangeFilter, characterFilter } = useContext(CharacterContext);

  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setOption(value);
    handleChangeFilter({
      ...characterFilter(),
      [name]: value === "Not chosen" ? "" : value,
    });
  };
  return (
    <select name={name} onChange={handleChange} value={option}>
      {options.map((option: string) => (
        <option key={option}>{option ? option : "Not chosen"}</option>
      ))}
    </select>
  );
}
export default SelectInput;
