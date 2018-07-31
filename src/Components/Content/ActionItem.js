import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ActionItem extends Component {

    render() { 
        return (
            <Link className={"icon-" + this.props.action.classname} to={this.props.action.destination}>{this.props.action.label}</Link>
        );
    }
}

export default ActionItem;