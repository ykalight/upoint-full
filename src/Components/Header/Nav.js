import React, { Component } from 'react';
import uuid from 'uuid';
import nav_directory from '../../data/nav_directory';
import NavItems from './NavItems';


class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        navdata: []
    }
  }

  getData(){
    this.setState({
      navdata: nav_directory
    })
  }

  componentWillMount(){
      this.getData();
  }

  render() {

    let navItems;
    navItems = this.state.navdata.map(nav => {
        return (
            <NavItems key={uuid.v4()} nav={nav} />
        )
    });

    return (
        <nav style={{textAlign:'left'}} className={this.props.className}>
            <ul>{navItems}</ul>
        </nav>
    );
  }
}

export default Nav;
