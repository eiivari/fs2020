import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]


  return (
    <div>
      <Header hederi={course}/>
      <Content parts={parts}  />
      <Total parts = {parts} /> 

    </div>
  )
}

const Header = (props) => {

  return (
    <>
      <h1>{props.hederi}</h1>
    </>
  )

}

const Content = (props) => {
  console.log(props)
 return (

  <>
    <Part part={props.parts[0]}/>
    <Part part={props.parts[1]}  />
    <Part part={props.parts[2]} />
  </>

)
}

const Total = (props) => { 

  let total = props.parts[0].exercises + props.parts[1].exercises +props.parts[2].exercises  
  //console.log(total)
  return(
    <>
      <p>Number of exercises {total}</p>
    </>
  )
  }

const Part = (props) => {
  console.log(props)
  return(
   <>
    <p>{props.part.name} {props.part.exercises}</p>
  </>

)
}

ReactDOM.render(<App />, document.getElementById('root'))