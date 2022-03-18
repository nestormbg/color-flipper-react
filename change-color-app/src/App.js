import React from 'react';
import './index.css';
import { useState } from 'react';
import getRandomHexColor from './getRandomHexColor';
import Button from './Button';

function App() {
  const [color, setColor] = useState({ backgroundColor: '#CAF0F8' });

  const changeColor = () => {
    const hexColor = getRandomHexColor();
    setColor({ backgroundColor: hexColor });
  };

  const resetColor = () => {
    setColor({ backgroundColor: '#CAF0F8' });
  };

  return (
    <div className='app' style={color}>
      <div className='menu'>
        <h2>Color Flipper</h2>
        <p>Hex color : {color.backgroundColor}</p>
        <Button handleClick={changeColor} value='Change Color' />
        <Button handleClick={resetColor} value='Reset Color' />
      </div>
    </div>
  );
}

export default App;
