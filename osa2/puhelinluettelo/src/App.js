import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '050514887799'},
      { name: 'Johanna Tukiainen',
      number: '0400123123'},
      { name: 'Sandra',
      number: '0760544510'},
      { name: 'Kimi Räikkönen',
      number: '09102232151'}
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const addNumber = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already in the list!`)
    } else {
      const personObject = {
        name: newName,
        number: newNumber
      }
      
      setPersons(persons.concat(personObject))
      setNewName('')
    }
  } 

  const handleNameChange = (event) => { 
    setNewName(event.target.value)  
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const searchWithFilter = (event) => {

    // sinänsä, riittäisikö se, että filtteröidään vain tuossa alla nuo tiedot? 
    // heitetäänkö ulos ja vähän siistimmäksi? 
    setFilter(event.target.value)
  }

  const showFilteredPersons = 
    persons.filter(person => person.name.includes(filter) )
  
   

  return (

    <div>
     
      <h2>Phonebook</h2>

      filter shown with<input value={filter} onChange={searchWithFilter}></input>

      <h2>add a new</h2>
      <form onSubmit={addNumber}>
        <div>
          name: <input value={newName} onChange={handleNameChange}></input> 
          <br />
          number: <input value={newNumber} onChange={handleNumberChange}></input>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {console.log(filter)}
      {showFilteredPersons.map(person => <ul key={person.name}> {person.name} :  
      { person.number} </ul>) }


      ...
    </div>
  )

}

export default App
