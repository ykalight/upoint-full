import React, { Component } from 'react';
import {Link} from 'react-router-dom'; 
import {MdNotifications, MdPortrait, MdPeopleOutline, MdDashboard, MdAccountBalance} from 'react-icons/lib/md';

let iconStyle={
    marginRight: '18px',
    width: '20px',
    height: '20px'
}
class ProfileMenu extends Component {


  render() {

    return (
        <div className={this.props.className}>
            <ul>
                <li><Link to='#'><MdPortrait style={iconStyle} />Personal Information</Link></li>
                <li><Link to='#'><MdNotifications style={iconStyle} />Manage Communications</Link></li>
                <li><Link to='#'><MdPeopleOutline style={iconStyle} />Beneficiaries</Link></li>
                <li><Link to='#'><MdAccountBalance style={iconStyle} />Financial Institutions</Link></li>
                <li><Link to='#' className="roleview"><MdDashboard style={iconStyle} />Manager View</Link></li>
            </ul>
        </div>
    );
  }
}

export default ProfileMenu;
