import React from 'react';
import Ball from './Ball';
import '../styles.scss';

function BallList(props) {
  const { balls, size, borderRadius } = props;

  return (
    <section className="App">
      {balls.map(ball => (
        <Ball
          size={size}
          borderRadius={borderRadius}
          backgroundColor={ball.colorFill}
        />
      ))}
    </section>
  );
}

export default BallList;
