import { PersonController } from "../personController"

export const Persons = ({persons, setPersons})=>{
    return <ul>
    {persons.map(person=><li key={person.id}>
      <span>{person.name} </span>{person.number}
      <button onClick={()=>{
        if(window.confirm(`Delete ${person.name}?`))
        PersonController.deletePerson({persons, id:person.id}).then(data=>{
            setPersons(data)
        })
      }}>Delete</button>
    </li>) 
    }
  </ul>
}