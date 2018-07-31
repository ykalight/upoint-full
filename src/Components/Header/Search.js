import React, { Component } from 'react';
import iconart from '../../img/icon_art.svg';

let searchStyle ={
  width: 'auto',
  cursor: 'pointer',
  transition: '0.4s'
}, searchIconStlye={
  height:'54px', width: '54px',
  backgroundImage: `url(${iconart})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "870px",
  backgroundPosition: "-509px -74px"
}

class Search extends Component {
  render() {

    return (
        <div className="Head-search" style={searchStyle}>
            <div style={searchIconStlye}></div>
        </div>
    );
  }
}

export default Search;
