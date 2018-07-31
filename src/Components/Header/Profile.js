import React, { Component } from 'react';
import iconart from '../../img/icon_art.svg';

let profileStyle ={
  width: 'auto',
  cursor: 'pointer',
  transition: '0.4s'
}, profileIconStlye={
  height:'54px', width: '54px',
  backgroundImage: `url(${iconart})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "870px",
  backgroundPosition: "-508px -9px"
}

class Profile extends Component {
  render() {

    return (
        <div className="Head-profile" style={profileStyle}>
            <div style={profileIconStlye}></div>
        </div>
    );
  }
}

export default Profile;
