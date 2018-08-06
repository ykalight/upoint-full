import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import FadeIn from 'react-fade-in';

class FooterDirSubItem extends Component {

    scrollToTop() {
        window.scrollTo(0,0);
    }

    render() { 
        return (
            <FadeIn transitionDuration="500">
            <li>
                <Link onClick={this.scrollToTop} to={this.props.link.destination}>{this.props.link.label}</Link>
            </li>
            </FadeIn>
        );
    }
}

export default FooterDirSubItem;