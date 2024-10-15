import React, { useState } from "react"
import Header from "./header.js"


export default function App(){
    let [calso,calsonm] = useState('')
    function HandleClick(value){
        calsonm(calso+value)
    }
    function OpClear(){
        calsonm("")
    }
    function resultOp(){
        let op = eval(calso)
        calsonm(op)
    }
    return(
        <>
        <div>
        <h1>Krish Calculator:</h1>
        <input className="inpop" value={calso}></input>
        <Header HandleClick={HandleClick} OpClear={OpClear} resultOp={resultOp}/>
        </div>
        </>
    )
}