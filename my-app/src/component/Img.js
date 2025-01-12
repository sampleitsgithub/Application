import React, { useState } from 'react';
import './Img.css';

function Picture() {
  const [inputText, setInputText] = useState('');
  const [elements, setElements] = useState([]); // Store multiple elements

  // Handle input text change
  function handleInputChange(event) {
    setInputText(event.target.value);
  }

  // Add new element
  function addHandler(event) {
    event.preventDefault();
    if (inputText.trim() !== '') {
      setElements([...elements, inputText]);
      setInputText('');
    }
  }

  // Remove an element by index
  function removeHandler(indexToRemove) {
    setElements(elements.filter((element, index) => index !== indexToRemove));
  }

  return (
    <div>
      <form>
        <label htmlFor="enterName">Enter Name</label>
        <input
          id="enterName"
          type="text"
          value={inputText} // Controlled input
          onChange={handleInputChange}
        />
        <button type="button" onClick={addHandler}>Add Element</button>
      </form>

      <div>
        {elements.map((element, index) => (
          <div key={index}>
            <p>{element}</p>
            <button onClick={() => removeHandler(index)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Picture;
