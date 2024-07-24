import { useState } from "react";
import { Filter } from "./components/Filter";
import { Persons } from "./components/Persons";
import { PersonForm } from "./components/PersonForm";
import { PersonDetails } from "./components/PersonDetails";
const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNumber] = useState("");
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (persons.some((person) => person.name === newName))
      return alert(`${newName} es already added to phoneBook`);
    setPersons(
      persons.concat({
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      })
    );
    setNewName("");
    setNumber("");
  };
  const handleSearch = (e) => setSearch(e.target.value);
  const handleNewNameChange = (e)=>setNewName(e.target.value)
  const handleNewNumberChange = (e)=>setNumber(e.target.value)
  return (
    <>
      <h2>Phonebook</h2>
      <Filter search={search} persons={persons} handleSearch={handleSearch} />
      <h2>Add new Phone</h2>
      <PersonForm handle={{handleNewNameChange, handleNewNumberChange, handleSubmit}} newName={newName} newNumber={newNumber} />
      <h2>Numbers</h2>
      <Persons persons={persons} />
      <PersonDetails person={{name: newName, number: newNumber}}/>
    </>
  );
};

export default App;
