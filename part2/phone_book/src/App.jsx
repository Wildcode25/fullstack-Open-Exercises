import { useEffect, useState } from "react";
import { Filter } from "./components/Filter";
import { Persons } from "./components/Persons";
import { PersonForm } from "./components/PersonForm";
import { PersonDetails } from "./components/PersonDetails";
import axios from 'axios'
const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNumber] = useState("");
  const [search, setSearch] = useState("");
  
  useEffect(()=>{
    const newPersons = axios.get('http://localhost:3001/persons')
    .then(response=>{
      setPersons(response.data)
    })
    
  }, [])

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
