import { useState,useEffect } from "react";
function BoxComponent(){
   const [color,setColor]=useState('')
  
   useEffect(()=>
   setColor('red'))

    return(
        <div
        style={{width:'100px', height:'100px', backgroundColor:`${color}`}}
        >
        </div>
    )
}
export default BoxComponent