import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'; 
import {MdKeyboardArrowDown} from 'react-icons/lib/md';
import More from './More';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        show: false,
        txt: "className={this.state.txt} "
    };
    this.toggleShow = this.toggleShow.bind(this);
    this.hide = this.hide.bind(this);
  }

  toggleShow(e){
    this.setState({show: !this.state.show, txt: this.state.txt === "anim" ? "" : "anim"});
    e.preventDefault();
  }

  hide(e){
    if(this.state.show){
      if(e && e.relatedTarget){
        e.relatedTarget.click();
      }
      this.setState({show: false, txt: ""});
      e.preventDefault();
    }
  }

  scrollToTop() {
    window.scrollTo(0,0);
  }

  render() {

    return (
        <nav style={{textAlign:'left'}} className={this.props.className}>
            <ul>
              <li><NavLink exact className={this.state.txt} activeClassName={"active"} to='/savings' onClick={this.scrollToTop}>Savings & Retirement</NavLink></li>
              <li><NavLink exact className={this.state.txt} activeClassName={"active"} to='/health' onClick={this.scrollToTop}>Health & Insurance</NavLink></li>
              <li><NavLink exact className={this.state.txt} activeClassName={"active"} to='/work' onClick={this.scrollToTop}>Work Management</NavLink></li>
              <li>
                <NavLink exact className="Nav-More" activeClassName={"active"} to='#' onClick={this.toggleShow} onBlur={this.hide}>More <MdKeyboardArrowDown style={{width: '18px', height: '18px'}} /></NavLink>
                
                {this.state.show && (<More className="dropdown" />)}
              </li>
            </ul>
        </nav>
    );
  }
}

export default Nav;
