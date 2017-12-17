import React from 'react';
import './Form.css';

const Form = ({value, color, onChange, onCreate, onKeyPress}) => {
  const style = {
    color: color
  };
  return (
    <div id="form-wrap">
      <input value={value} onChange={onChange} onKeyPress={onKeyPress} style={style} />
      <button onClick={onCreate}>추가</button>
    </div>
  );
};

export default Form;
