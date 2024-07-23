import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: 8099211456
     }
  ]) 
  const [newName, setNewName] = useState('');
  const [newNumber, setNumber] = useState('')
  const handleSubmit = (e)=>{
    e.preventDefault()
    if(persons.some(person=>person.name===newName)) 
      return alert(`${newName} es already added to phoneBook`)
    setPersons(persons.concat({
      name: newName,
      number: newNumber
    }))
    setNewName('')
    setNumber('')
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={(e)=>setNewName(e.target.value)}/>
          <br />
          number: <input value={newNumber} onChange={(e)=>setNumber(e.target.value)}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person=><li key={person.name}>
          <span>{person.name} </span>{person.number}
        </li>)}
      </ul>
      <div>{newName}</div>
      <div>{newNumber}</div>
    </div>
  )
}

export default App