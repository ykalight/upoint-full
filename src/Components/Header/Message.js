import React, { Component } from 'react';
import iconart from '../../img/icon_art.svg';

let bellStyle ={
  width: 'auto',
  cursor: 'pointer',
  transition: '0.4s'
}, bellIconStlye={
  height:'54px', width: '54px',
  backgroundImage: `url(${iconart})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "870px",
  backgroundPosition: "-5px -7px"
}

class Message extends Component {
  render() {

    return (
        <div className="Head-message" style={bellStyle}>
            <div style={bellIconStlye}></div>
        </div>
    );
  }
}

export default Message;
