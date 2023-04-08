import React, { useState} from "react";
import './style.scss'

const TextColor=()=>{

    const [input1Value, setInput1Value] = useState('')
    const [inputView1Value, setInputView1Value] = useState('')
    
    const [input2Value, setInput2Value] = useState('')
    const [inputView2Value, setInputView2Value] = useState('')


    // const handleChange = (e) => {
    //     setInput1Value(e.target.value)
    //     setInput2Value(e.target.value)
    
    //   }
    
      const showText = () => {
        setInputView1Value(input1Value)
        setInputView2Value(input2Value)
      }

          return <div>
        <input type="text" onChange={(e) => setInput1Value(e.target.value)} value={input1Value}/>
        <input type="color" onChange={(e) => setInput2Value(e.target.value)}  value={input2Value} />
        <button onClick={showText}> Click me</button>
         <p style={{color:inputView2Value}}>{inputView1Value}</p > 
    </div>
}
export  default TextColor