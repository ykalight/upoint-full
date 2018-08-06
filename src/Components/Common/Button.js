import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Button extends Component {

  render() {

    return (
        <Link className={this.props.addclass} to={this.props.destination} onClick={this.props.onClick}>{this.props.label}</Link>
    );
  }
}

export default Button;
