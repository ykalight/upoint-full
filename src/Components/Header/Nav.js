import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'; 
import {MdArrowDropDown} from 'react-icons/lib/md';

class Nav extends Component {

  scrollToTop() {
    window.scrollTo(0,0);
  }

  render() {

    return (
        <nav style={{textAlign:'left'}} className={this.props.className}>
          {/* <div className={this.props.xclass} onClick={this.props.onClick}>X</div> */}
            <ul onClick={this.scrollToTop}>
              <li><NavLink exact activeClassName={"active"} to='/savings'>Savings & Retirement</NavLink></li>
              <li><NavLink exact activeClassName={"active"} to='/health'>Health & Insurance</NavLink></li>
              <li><NavLink exact activeClassName={"active"} to='/work'>Work Management</NavLink></li>
              <li><NavLink exact className="Nav-More" activeClassName={"active"} to='/more'>More <MdArrowDropDown style={{width: '18px', height: '18px'}} /></NavLink></li>
            </ul>
        </nav>
    );
  }
}

export default Nav;
