import React, {useState} from 'react'

export default function FunctionalComponent() {
    const [counter, setCounter] = useState(0)

  return (
    <div>
        <h3 onClick={()=>console.log("Yo!")}>Here's a functional component</h3>
        <h2>{counter}</h2>
        <button onClick={()=>setCounter(counter+1)}>+1</button>
        <button onClick={()=>setCounter(counter+10)}>+10</button>
        <button onClick={()=>setCounter(counter-1)}>-1</button>
        <button onClick={()=>setCounter(0)}>RESET</button>
    </div>
  )
}
