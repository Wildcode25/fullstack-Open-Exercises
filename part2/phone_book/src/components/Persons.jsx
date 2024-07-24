export const Persons = ({persons})=>{
    return <ul>
    {persons.map(person=><li key={person.id}>
      <span>{person.name} </span>{person.number}
    </li>) 
    }
  </ul>
}