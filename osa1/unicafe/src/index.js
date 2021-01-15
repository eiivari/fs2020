import React,{useState} from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => {

  return (
    <>
    <button onClick={props.handleClick}>
      {props.text}
    </button>
    </>
  ) 
}

const StatisticsLine = (props) => {
  return (
    <>
      <td>{props.text}</td><td>{props.value}</td> 
    </>
  )

}

const Statistics = (props) => {
  const good = props.good
  const neutral = props.neutral
  const negative = props.negative
  const total = good + neutral + negative
  const positive = good/(good+neutral+negative) *100
  
  if (total !== 0) {
  return  (
    <>
    <h2>
      Statistics
    </h2>
    <table>
      <tbody>
    <tr><StatisticsLine value={good} text={"Good"}/></tr>
    <tr><StatisticsLine value={neutral} text={"Neutral"} /></tr>
    <tr><StatisticsLine value={negative} text={"Negative"} /></tr>
    <tr><StatisticsLine value={total} text={"Total"} /></tr>
    <tr><StatisticsLine value={(good-neutral) / (good+neutral+negative)} text={"Average"} /></tr>
    <tr><StatisticsLine value={positive+"%"} text={"Positive"} /></tr>
    </tbody>
    </table>
    </>
  ) } 
  else {
    return (
      <p>
        No feedback given
      </p>
    )
  }
} 

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [negative, setNegative] = useState(0)

  const increaseGood = () => setGood(good+1)
  const increaseNeutral = () => setNeutral(neutral+1)
  const increaseNegative = () => setNegative(negative+1)

  

  return (
    <div>
      <h2>
      Give a feedback
      </h2>
      <br></br>
      <Button handleClick={increaseGood} text="Good" />
      <Button handleClick={increaseNeutral} text="Neutral" />
      <Button handleClick={increaseNegative} text="Negative" />

      <Statistics good = {good} neutral={neutral} negative={negative} />
    </div>
  ) 

}
 

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

