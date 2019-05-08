import React from 'react';

function Ball(props) {
  const ballStyle = {
    margin: '5px',
    backgroundColor: props.backgroundColor,
    borderRadius: props.radius + '%',
    height: props.size + 'px',
    width: props.size + 'px',
  };
  return <div style={ballStyle} />;
}

export default Ball;
