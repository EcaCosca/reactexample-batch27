import React from 'react'

export default function FunctionalComponent() {
  return (
    <div>
        <h3 onClick={()=>console.log("Yo!")}>Here's a functional component</h3>
    </div>
  )
}
