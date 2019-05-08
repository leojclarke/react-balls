import React, { Component } from 'react';
import '../styles.scss';

class Ball extends Component {
  state = {
    active: false,
  };

  handleBallClick = () => {
    this.setState({
      active: !this.state.active,
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
    const className = this.state.active ? 'Ball active' : 'Ball';

    return (
      <div style={style} className={className} onClick={this.handleBallClick} />
    );
  }
}

export default Ball;
