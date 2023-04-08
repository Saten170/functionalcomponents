
import React, { useState } from 'react';

const Names=()=> {
  const [inputValue, setInputValue] = useState([]);
  const [inputViewValue, setInputViewValue] = useState('');

  const handleChange = () => {
    setInputValue([...inputValue, inputViewValue]);
    setInputViewValue('');
  };

  return (
    <div>
      <input value={inputViewValue} onChange={(e) => setInputViewValue(e.target.value)} />
      <button onClick={handleChange}>Add</button>
      <ol>
        {inputValue.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
}

export default Names;