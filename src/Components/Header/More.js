import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'; 

class More extends Component {

    scrollToTop() {
        window.scrollTo(0,0);
    }

  render() {

    return (
        <li><NavLink to={this.props.morelink.destination} onClick={this.scrollToTop}>{this.props.morelink.label}</NavLink></li>
    );
  }
}

export default More;
