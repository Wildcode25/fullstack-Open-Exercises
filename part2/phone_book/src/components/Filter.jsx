import { Persons } from "./Persons";
import { useState } from "react";
export const Filter = ({  persons }) => {
    const [search, setSearch] = useState("");

  const filtedPersons = persons.filter(
    (person) => person.name.split(" ")[0].toLowerCase() === search.toLowerCase()
  );
  return (
    <>
      filter show with: <input value={search} onChange={(e)=>setSearch(e.target.value)} />
      <Persons persons={filtedPersons} />
    </>
  );
};
