import React, { Component } from 'react';
import FooterDirectory from './FooterDirectory';

class MobileFooterDirectory extends Component {
  render() {

    return (
        <FooterDirectory mobile={true} className={this.props.className} />
    );
  }
}

export default MobileFooterDirectory;
