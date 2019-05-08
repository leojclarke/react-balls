import React, { Component } from 'react';
import '../styles.scss';

class Ball extends Component {
  state = {
    className: 'Ball',
  };

  handleBallClick = () => {
    this.state.className === 'Ball'
      ? this.setState({
          className: 'Ball active',
        })
      : this.setState({
          className: 'Ball',
        });
  };

  render() {
    const { backgroundColor, size, borderRadius } = this.props;
    const style = {
      margin: '5px',
      backgroundColor: backgroundColor,
      borderRadius: borderRadius + '%',
      height: size + 'px',
      width: size + 'px',
    };
    return (
      <div
        style={style}
        className={this.state.className}
        onClick={this.handleBallClick}
      />
    );
  }
}

export default Ball;
