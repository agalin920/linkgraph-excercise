import React, { useState } from 'react';
import axios from 'axios';

function NameInput() {
  const [name, setName] = useState('');

  const saveName = () => {
    axios.post('http://mockbin.org/bin/08e5560b-befa-41f3-9397-9a774b8397a9', {
      position: "reactJS",
      devName: name,
    })
  }

  return (
    <div>
      <label htmlFor="name">Name</label>
      <input 
        name="name"
        type="text"
        placeholder="Hi Developer Enter your Name Here"
        onChange={(e) => setName(e.target.value)}>
      </input>
      <button onClick={saveName}>Save</button>
    </div>
  );
}

export default NameInput;
