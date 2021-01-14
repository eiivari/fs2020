import React,{useState} from 'react';
import ReactDOM from 'react-dom';

const Statistics = (props) => {
  const good = props.good
  const neutral = props.neutral
  const negative = props.negative
  const total = good + neutral + negative
  
  return  (
    <>
      <p>
        good {good}
      <br />
        neutral {neutral}
      <br />
        negative {negative}
      <br/>
        all {good+neutral+negative}
      <br />
        average {(good-neutral) / (good+neutral+negative) }
      <br />
        positive {good/(good+neutral+negative) *100} %
    </p>
    </>
  )
} 

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [negative, setNegative] = useState(0)

  return (
    <div>
      <h2>
      Give a feedback
      </h2>
      <br></br>
      <button onClick={()=> {setGood(good+1)}}>
        good
      </button>
      <button onClick={()=> {setNeutral(neutral+1)}}>
        neutral
      </button>
      <button onClick={() => {setNegative(neutral +1)}}>
        negative
      </button>
      <h2>
        Statistics
      </h2>

      <Statistics good = {good} neutral={neutral} negative={negative} />
    </div>
  ) 

}
 

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

