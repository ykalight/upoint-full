import React, { Component } from 'react';
import {MdAddLocation} from 'react-icons/lib/md';

class ToolboxItem extends Component {

    render() {

        return (
            <div className="toolItem">
                <div className="visual">{this.props.tool.img}</div>
                <label>{this.props.tool.title}</label>
                <div className="desc">{this.props.tool.desc}</div>
                <div className="pin"><MdAddLocation style={{width:'26px', height:'26px', color:'#ccc', cursor:'pointer'}} /></div>
            </div>
        );
    }
}

export default ToolboxItem;