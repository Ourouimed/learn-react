import { useState } from 'react'
export default function Button (){
    const [name , setName] = useState("Medamine")
    function ChangeName (){
        let inputField = document.getElementById("name").value
        inputField != '' ? setName(inputField) : alert("please fill the input")
    }
    return (
        <>
            <h1>{name}</h1>
            <input id="name" type={"text"} placeholder='Your name here'></input>
            <button onClick={ChangeName}>
            click Here 
            </button>
        </>
        
    )
}