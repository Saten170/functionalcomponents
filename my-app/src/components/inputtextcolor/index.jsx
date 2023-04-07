import React, { useState} from "react";
import './style.scss'

const TextColor=()=>{

    const [input1Value, setInput1Value] = useState('')
    const [inputView1Value, setInputView1Value] = useState('')
    
    const [input2Value, setInput2Value] = useState('')
    const [inputView2Value, setInputView2Value] = useState('')


    const handleChange = (e) => {
        setInput1Value(e.target.value)
        setInput2Value(e.target.value)
    
      }
    
      const showText = () => {
        setInputView1Value(input1Value)
        setInputView2Value(input2Value)
      }

      c
    return <div>
        <input type="text" onChange={handleChange} value={input1Value}/>
        <input type="color"  onChange={handleChange}   />
        <button onClick={showText}> Click me</button>
        {inputView1Value ? <p>{inputView1Value}</p> : null}
    </div>
}
export  default TextColor