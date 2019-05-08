import React from 'react';
import Ball from './Ball';
import '../styles.css';

function BallList(props) {
  const { balls, size, borderRadius } = props;

  return (
    <div>
      {balls.map(ball => (
        <Ball
          size={size}
          radius={borderRadius}
          backgroundColor={ball.colorFill}
        />
      ))}
    </div>
  );
}

export default BallList;
