import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  const addValue = () => {
    if(count< 20){
      setCount(count + 1)
    }
    
  }

  const removeValue = () => {
    if(count>0){
      setCount(count - 1)
    }
    
  }

  return (
    <>
      <h1> This is React </h1>
      <h2>Project </h2>
      <button onClick={addValue}>Add Value</button> 
      <button onClick={removeValue}>Remove Value</button>
      <br />
      <p>Count: {count}</p> 
      <p>Vyan</p>
    </>
  )
}

export default App
