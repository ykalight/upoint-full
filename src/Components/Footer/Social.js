import React, { Component } from 'react';
import tempSocial from '../../img/tempSocial.svg';
import {Link} from 'react-router-dom';

class Social extends Component {
  render() {

    return (
        <div className="social">
        Follow us
        <Link to={"#"}><img src={tempSocial} alt="Social" style={{width: '120px', marginTop: '8px'}} /></Link>
        </div>
    );
  }
}

export default Social;