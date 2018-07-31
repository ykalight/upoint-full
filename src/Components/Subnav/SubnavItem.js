import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class SubnavItem extends Component {

    render() {
        return (
            <Link to={this.props.subnav.destination} className={`subicon-${this.props.subnav.img}`}>{this.props.subnav.title}</Link> 
        );
    }
}

export default SubnavItem;