import React from 'react';
import '../styles.css';

function RangeSlider(props) {
  return (
    <div className="App">
      <input
        name={props.name}
        type="range"
        min={props.min}
        max={props.max}
        value={props.value}
        onChange={props.onChange}
      />
      {props.name}: {props.value}
    </div>
  );
}

export default RangeSlider;
