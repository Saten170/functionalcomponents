import React, { useState} from "react";
import './style.scss'

const Box = ({title, description}) => {  // {title, description} = props
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [inputViewValue, setInputViewValue] = useState('')

  const toggleDarkMode = () => {
    console.log(isDarkMode)
    setIsDarkMode(!isDarkMode)
  }

  const handleChange = (e) => {
    setInputValue(e.target.value)

  }

  const showText = () => {
    setInputViewValue(inputValue)
  }



  return <div className={`P-box ${isDarkMode ?
    'P-dark-mode' : ''}`}>
    <h3>{title} </h3>
    {description ? <p>{description}</p> : null}
    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, odit.</span>
    <label className='P-checkbox G-flex G-align-center'>
      <input
        type="checkbox"
        onChange={toggleDarkMode}
        value={isDarkMode}
      />
      <p>Dark mode</p>
    </label>
  </div>
}
export default Box