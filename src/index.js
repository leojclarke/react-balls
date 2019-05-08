import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './styles.css';
import Ball from './Ball';

class App extends Component {
  state = {
    size: 80,
    borderRadius: 50,
    balls: [],
  };

  handleAddBall = event => {
    event.preventDefault();
    const { balls } = this.state;
    const degree = Math.round(Math.random() * 360);
    const color = `hsl(${degree}deg, 60%, 80%)`;
    this.setState({
      balls: [...balls, { colorFill: color }],
    });
  };

  renderBall = (ball, index) => {
    return (
      <Ball
        key={index}
        size={this.state.size}
        radius={this.state.borderRadius}
        backgroundColor={ball.colorFill}
      />
    );
  };

  handleSizeChange = event => {
    this.setState({
      size: event.target.value,
    });
  };

  handleRadiusChange = event => {
    this.setState({
      borderRadius: event.target.value,
    });
  };

  render() {
    const { size, borderRadius, balls } = this.state;

    return (
      <>
        <div className="App">
          <h1>Balls!</h1>
          <h2>A simple react App for creating and handling... BALLS!</h2>
        </div>

        <form onSubmit={this.handleAddBall}>
          <div className="App">
            <button>ADD BALL</button>
          </div>

          <div className="App">
            <input
              name="ballSize"
              type="range"
              min="20"
              max="200"
              value={size}
              onChange={this.handleSizeChange}
            />
            Size: {this.state.size}
          </div>

          <div className="App">
            <input
              name="ballShape"
              type="range"
              min="0"
              max="50"
              value={borderRadius}
              onChange={this.handleRadiusChange}
            />
            Radius: {this.state.borderRadius}
          </div>
        </form>

        <section>{balls.map(this.renderBall)}</section>
      </>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
