import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class FooterLinks extends Component {
  render() {

    return (
        <div className="links">
            <ul>
                <li><Link to={"#"}>Legal Information</Link></li>
                <li><Link to={"#"}>Privacy Statement</Link></li>
                <li><Link to={"#"}>Cookie Notice</Link></li>
                <li><Link to={"#"}>Contact Us</Link></li>
                <li><Link to={"#"}>Feedback</Link></li>
            </ul>
        </div>
    );
  }
}

export default FooterLinks;
