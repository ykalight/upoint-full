import React, { Component } from 'react';
import FooterLinks from './FooterLinks';
import Social from './Social';
import LogoUpoint from './LogoUpoint';

class Footer extends Component {
  render() {

    return (
        <footer>
            <div className="container">
                <LogoUpoint />
                <FooterLinks />
                <Social />
                <div className="copyright border">&copy; 2019 Alight</div>
            </div>
        </footer>
    );
  }
}

export default Footer;
