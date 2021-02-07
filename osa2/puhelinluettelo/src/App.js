import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addNumber = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already in the list!`)
    } else {
      const personObject = {
        name: newName,
      }
      
      setPersons(persons.concat(personObject))
      setNewName('')
    }
  } 

  const handleNameChange = (event) => { 
    setNewName(event.target.value)  
  }

   

  return (

    <div>
     
      <h2>Phonebook</h2>
      <form onSubmit={addNumber}>
        <div>
          <input value={newName} onChange={handleNameChange}></input> 
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <ul key={person.name}> {person.name} </ul>)}
      ...
    </div>
  )

}

export default App