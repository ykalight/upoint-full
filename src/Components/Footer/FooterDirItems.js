import React, { Component } from 'react';
import uuid from 'uuid';
import {MdAdd} from 'react-icons/lib/md';
import MediaQuery from 'react-responsive';
import FooterDirSubItem from './FooterDirSubItem';

class FooterDirItems extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            flinks: this.props.fdata.links,
            ulshow: 'none',
            labelClass: ""
        };
    }

    toggleShow(e){
        this.setState({
            ulshow: this.state.ulshow === "none" ? "" : "none",
            labelClass: this.state.labelClass === "" ? "active" : "",
        });
        e.preventDefault();
      }

  render() {
    // Iterate links
    let foot_links;
    foot_links = this.state.flinks.map(link => {
        return (
            <FooterDirSubItem key={uuid.v4()} link={link} />
        )
    });

    return (
        <div>

            <MediaQuery minWidth={741}>
                <label>{this.props.fdata.title}</label>
                <ul>
                    {foot_links}
                </ul>
            </MediaQuery>

            <MediaQuery maxWidth={740}>
                <label className={this.state.labelClass} onClick={this.toggleShow.bind(this)} style={{cursor:'pointer'}}>{this.props.fdata.title}<MdAdd className="expand"/></label>
                <ul style={{display: this.state.ulshow}}>
                    {foot_links}
                </ul>
            </MediaQuery>
            
        </div>
    );
  }
}

export default FooterDirItems;