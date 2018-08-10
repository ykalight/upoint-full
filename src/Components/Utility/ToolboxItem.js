import React, { Component } from 'react';

class ToolboxItem extends Component {

    render() {

        return (
            <div className="toolItem">
                <div className="visual">{this.props.tool.img}</div>
                <label>{this.props.tool.title}</label>
                <div className="desc">{this.props.tool.desc}</div>
                <div className="pin upoint-ficon icon-pushpin"></div>
            </div>
        );
    }
}

export default ToolboxItem;