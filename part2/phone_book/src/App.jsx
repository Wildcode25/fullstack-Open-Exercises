import { useEffect, useState } from "react";
import { Filter } from "./components/Filter";
import { Persons } from "./components/Persons";
import { PersonForm } from "./components/PersonForm";
import { PersonDetails } from "./components/PersonDetails";
import { PersonController } from "./personController";
import { Notification } from "./components/Notification";
const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNumber] = useState("");
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(null);
  useEffect(() => {
    PersonController.getAll().then((persons) => {
      setPersons(persons);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <h2>Phonebook</h2>
      <Filter persons={persons} />
      <h2>Add new Phone</h2>
      <PersonForm
        setter={setPersons}
        handle={{
          handleNewNameChange: (e) => setNewName(e.target.value),
          handleNewNumberChange: (e) => setNumber(e.target.value),
          handleSubmit: (e) => {
            e.preventDefault();
            PersonController.sendPerson({
              persons,
              person: { name: newName, number: newNumber },
            }).then((returnedPersons) => {
              
              setPersons(returnedPersons);
              setMessage({
                content: `${returnedPersons[returnedPersons.length-1].name} is added successfuly`,
                isError: false
              })
              
              setTimeout(()=>setMessage(null), 3000)
              setLoading(false);
            }).catch((e)=>{
              setMessage({
                content: e.response.data.error,
                isError: true
              })
              setTimeout(()=>setMessage(null), 3000)
              setLoading(false);
              console.log(e)
            })
            setNumber("");
            setNewName("");
            setLoading(true);
          },
        }}
        newName={newName}
        newNumber={newNumber}
      />
      <h2>Numbers</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Persons persons={persons} setPersons={setPersons} setMessage={setMessage}/>
      )}
      <PersonDetails person={{ name: newName, number: newNumber }} />
      <Notification message={message} />
    </>
  );
};

export default App;
