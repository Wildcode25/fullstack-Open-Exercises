import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('');
  const [newNumber, setNumber] = useState('');
  const [search, setSearch] = useState('');
  const handleSubmit = (e)=>{
    e.preventDefault()
    if(persons.some(person=>person.name===newName)) 
      return alert(`${newName} es already added to phoneBook`)
    setPersons(persons.concat({
      name: newName,
      number: newNumber,
      id: persons.length+1
    }))
    setNewName('')
    setNumber('')
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter show with: <input value={search} onChange={(e)=>setSearch(e.target.value)} />
      </div>
      <h2>Add new Phone</h2>
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
        {!search ?  persons.map(person=><li key={person.id}>
          <span>{person.name} </span>{person.number}
        </li>) : persons.filter(person=>person.name.split(' ')[0].toLowerCase()===search.toLowerCase()).map(
          person=><li key={person.id}>
          <span>{person.name} </span>{person.number}
        </li>
        )}
      </ul>
      <div>{newName}</div>
      <div>{newNumber}</div>
    </div>
  )
}

export default App