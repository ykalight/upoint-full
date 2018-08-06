import React, { Component } from 'react';
import iconart from '../../img/icon_art.svg';
import ProfileMenu from './ProfileMenu';
import {Link} from 'react-router-dom'; 

let profileStyle ={
  width: 'auto',
  cursor: 'pointer',
  transition: '0.4s'
}, profileIconStlye={
  display:'block',
  height:'54px', width: '54px',
  backgroundImage: `url(${iconart})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "870px",
  backgroundPosition: "-508px -9px"
}

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        show: false,
    };
    this.toggleShow = this.toggleShow.bind(this);
    this.hide = this.hide.bind(this);
  }

  toggleShow(e){
    this.setState({show: !this.state.show});
    e.preventDefault();
  }

  hide(e){
    if(this.state.show){
      if(e && e.relatedTarget){
        e.relatedTarget.click();
      }
      this.setState({show: false});
      e.preventDefault();
    }
  }

  render() {

    return (
        <div className="Head-profile" style={profileStyle}>
            <Link to="#" style={profileIconStlye} onClick={this.toggleShow} onBlur={this.hide}></Link>
            {this.state.show && (<ProfileMenu className="profile-dropdown" />)}
        </div>
    );
  }
}

export default Profile;
