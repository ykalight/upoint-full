import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../../img/logo_client.svg';

class Logo extends Component {
  
  render() {

    return (
        <Link to='/'>
          <div className="Head-logo" style={{cursor: 'pointer'}}>
            <img src={logo} alt="Logo" />
          </div>
        </Link>
    );
  }
}

export default Logo;
