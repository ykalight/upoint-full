import React, { Component } from 'react';
import uuid from 'uuid';
import {NavLink} from 'react-router-dom';
import {MdKeyboardArrowDown} from 'react-icons/lib/md';
import More from './More';

let divStyle={
    width: '100%',
    left: '0',
    position: 'absolute'
}

class NavItems extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            show: false
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

        let more_links;
        
        if(this.props.nav.title === "More"){

            more_links = this.props.nav.links.map(morelink => {
                return (
                    <More key={uuid.v4()} morelink={morelink} />
                )
            });

            return (
                <li>
                    <NavLink exact activeClassName={"active"} to={this.props.nav.destination} onClick={this.toggleShow} onBlur={this.hide}>{this.props.nav.title} <MdKeyboardArrowDown style={{width: '18px', height: '18px'}} /></NavLink>
                    <div style={divStyle}>
                        <ul>
                            {this.state.show && (more_links)}
                        </ul>
                    </div>
                </li>
            ) 
        } else {
            return (
                <li><NavLink exact activeClassName={"active"} to={this.props.nav.destination} onClick={this.scrollToTop}>{this.props.nav.title}</NavLink></li>
            );
        }
    }
}

export default NavItems;