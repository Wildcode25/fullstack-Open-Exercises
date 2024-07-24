export const PersonForm = ({handle, newName, newNumber})=>{
    return <form onSubmit={handle.handleSubmit}>
    <div>
      name: <input value={newName} onChange={handle.handleNewNameChange}/>
      <br />
      number: <input value={newNumber} onChange={handle.handleNewNumberChange}/>
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
}