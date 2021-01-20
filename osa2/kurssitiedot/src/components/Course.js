import React from 'react'

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
    const parts = props.parts
   return (
    <ul>
      {parts.map(partti => <Part key={partti.id} part={partti} />)}
      
  
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

export default Course