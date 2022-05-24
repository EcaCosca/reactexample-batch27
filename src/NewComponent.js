import React from "react";

export default function NewComponent({prop, pushi}){

    const handleClick = () => alert("Hey, leave me alone!!!")

    return (
        <div>
            <h1>Hello Batch {prop}</h1>
            <p>{pushi}</p>
            <button onClick={handleClick} >Don't push me!</button>
        </div>
    )
}