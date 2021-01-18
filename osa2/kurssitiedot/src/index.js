import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

const Course = (props) => {

  return (
    <>
      <Header course={props.course} />
      <Content parts={props.course.parts} />
    </>
  )

}

const Header = (props) => {
  console.log(props)
  return (
    <>
      <h1>{props.course.name}</h1>
    </>
  )

}

const Content = (props) => {
  const courses = props.parts
  console.log(courses)
 return (
  <ul>
    {courses.map(partti => <Part key={partti.id} part={partti} />)}
    

  </ul>


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