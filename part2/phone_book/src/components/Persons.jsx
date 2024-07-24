import { PersonController } from "../personController"

export const Persons = ({persons, setPersons, setMessage})=>{
    return <ul>
    {persons.map(person=><li key={person.id}>
      <span>{person.name} </span>{person.number}
      <button onClick={()=>{
        if(window.confirm(`Delete ${person.name}?`))
        PersonController.deletePerson({persons, id:person.id}).then(data=>{
            setPersons(data)
            setMessage({content: "Person deleted successfuly", isError: false})
            setTimeout(()=>setMessage(null), 2000)
        }).catch(()=>{
            setMessage({content: `${person.name} is already deleted`, isError:true})
            setTimeout(()=>setMessage(null), 2000)
        });
      }}>Delete</button>
    </li>) 
    }
  </ul>
}