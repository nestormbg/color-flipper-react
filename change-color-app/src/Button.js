import React from 'react';
import './index';

const Button = (props) => {
  const { handleClick, value } = props;
  return (
    <button className='btn' onClick={handleClick}>
      {value}
    </button>
  );
};

export default Button;
