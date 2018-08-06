import React, { Component } from 'react';
import iconart from '../../img/icon_art.svg';
import SearchBox from './SearchBox';
import ReactDrawer from 'react-drawer';

let searchStyle ={
  width: 'auto',
  cursor: 'pointer',
  transition: '0.4s'
}, searchIconStlye={
  height:'54px', width: '54px',
  backgroundImage: `url(${iconart})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "870px",
  backgroundPosition: "-509px -74px"
}

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      position: 'top',
      noOverlay: false
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.onDrawerClose = this.onDrawerClose.bind(this);
    this.setPosition = this.setPosition.bind(this);
    this.setNoOverlay = this.setNoOverlay.bind(this);
  }

  setPosition(e) {
    this.setState({position: e.target.value});
  }
  setNoOverlay(e) {
    this.setState({noOverlay: e.target.checked});
  }
  toggleDrawer() {
    this.setState({open: !this.state.open});
  }
  closeDrawer() {
    this.setState({open: false});
  }
  onDrawerClose() {
    this.setState({open: false});
  }

  render() {

    return (
        <div className="Head-search" style={searchStyle}>
            <div style={searchIconStlye} onClick={this.toggleDrawer}></div>

            <ReactDrawer
                    open={this.state.open}
                    position={this.state.position}
                    onClose={this.onDrawerClose}
                    noOverlay={this.state.noOverlay}>
                    <i onClick={this.closeDrawer} className="icono-cross"></i>
              <SearchBox onClick={this.toggleDrawer} />
            </ReactDrawer>
        </div>
    );
  }
}

export default Search;
