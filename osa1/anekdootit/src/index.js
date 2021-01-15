import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Footer = (props) => {

  console.log(props.vote.length)

  var biggestIndex = 0
  for ( var i = 0; i < props.vote.length; i++) {
    if (props.vote[i] > props.vote[biggestIndex]) {
      biggestIndex = i
    }
  }
   
  
 

  return (
    <>
      <h2>Anecdote with most votes</h2>
      { props.anecdotes[biggestIndex] }
    </>
  )

} 

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0)) 
  // täytetään taulu nollasilla? 

  const randomizeNext = () => setSelected(Math.floor(Math.random() * anecdotes.length))

  const voteAnecdote = () => {
    const copied = [...vote]
    copied[selected] += 1
    setVote(copied)
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      {props.anecdotes[selected]}
      <br />
      has {vote[selected]} votes
      <br />
      <button onClick={voteAnecdote}>vote</button>
      <button onClick={randomizeNext}>
        next anecdote
      </button>
      <Footer anecdotes={props.anecdotes} vote={vote} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)