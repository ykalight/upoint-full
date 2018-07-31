import React, { Component } from 'react';
import logoUpoint from '../../img/logoUpoint.svg';

class LogoUpoint extends Component {
  render() {

    return (
        <div className="flogo">
            <img src={logoUpoint} alt="UPoint" />
            Delivered by Alight Solutions
        </div>
    );
  }
}

export default LogoUpoint;