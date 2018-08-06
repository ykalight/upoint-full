import React, { Component } from 'react';
import FooterLinks from './FooterLinks';
import Social from './Social';
import LogoUpoint from './LogoUpoint';
import FooterDirectory from './FooterDirectory';

class Footer extends Component {

  render() {

    return (
        <footer>
            <div className="container">
                <FooterDirectory />
                <Social />
                <div className="fhr"></div>
                <LogoUpoint />
                <div className="copyright">&copy; 2019 Alight</div>
                <FooterLinks />
            </div>
        </footer>
    );
  }
}

export default Footer;
