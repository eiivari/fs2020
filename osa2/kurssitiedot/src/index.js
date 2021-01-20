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
      },
      {
        name: 'Old fashioned Object Oriented Programming',
        exercises: 25,
        id: 4
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
      <Total total={props.course.parts} /> 
    </>
  )

}

const Header = (props) => {

  return (
    <>
      <h1>{props.course.name}</h1>
    </>
  )

}

const Content = (props) => {
  const courses = props.parts
 return (
  <ul>
    {courses.map(partti => <Part key={partti.id} part={partti} />)}
    

  </ul>


)
}

const Total = (props) => { 
  const allCourse = props.total

  const total= allCourse.reduce(function(accumulator,currentValue) {
    return accumulator + currentValue.exercises
  },0)



/*
  allCourse.forEach(kurssi => {
    total += kurssi.exercises
  }); */
  //console.log(total)
  return(
    <>
      <p>Number of exercises {total}</p>
    </>
  )
  }

const Part = (props) => {

  return(
   <>
    <p>{props.part.name} {props.part.exercises}</p>
  </>

)
}

ReactDOM.render(<App />, document.getElementById('root'))