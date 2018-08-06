import React, { Component } from 'react';
import {MdClose} from 'react-icons/lib/md';

let iconStyle={
    width: '28px',
    height: '28px'
}

class SearchBox extends Component {

  render() {

    return (
        <div className="Head-searchBox"> 
            <form action={"searchresults"}>
                <div><input name="search" className="search" placeholder="What are you looking for?" /><MdClose style={iconStyle} onClick={this.props.onClick} /></div>
            </form>
        </div>
    );
  }
}

export default SearchBox;
