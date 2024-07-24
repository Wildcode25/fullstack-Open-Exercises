import { Persons } from "./Persons";
export const Filter = ({ persons, search, handleSearch }) => {
  const filtedPersons = persons.filter(
    (person) => person.name.split(" ")[0].toLowerCase() === search.toLowerCase()
  );
  return (
  <>
  filter show with: <input value={search} onChange={handleSearch} />
  <Persons persons={filtedPersons} />
  </>
  )
};
