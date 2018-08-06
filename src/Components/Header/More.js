import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'; 

// let divStyle={
//     width: '200px',
//     padding: '20px',
//     backgroundColor: '#fff',
//     border: 'solid 1px #ccc',
//     color: '#555',
//     borderRadius: '4px',
//     position: 'absolute', left:'-50%', top:'44px'
// }
class More extends Component {

    scrollToTop() {
        window.scrollTo(0,0);
    }

  render() {

    return (
        <div className={this.props.className}>
            <ul>
                <li><NavLink to='/life' onClick={this.scrollToTop}>Life Changes</NavLink></li>
                <li><NavLink to='/wellbeing' onClick={this.scrollToTop}>Your Well-Being</NavLink></li>
                <li><NavLink to='/perks' onClick={this.scrollToTop}>Perks & Discounts</NavLink></li>
                <li><NavLink to='/reimbursement' onClick={this.scrollToTop}>Reimbursement Account</NavLink></li>
                <li><NavLink to='/other' onClick={this.scrollToTop}>Other Benefits</NavLink></li>
            </ul>
        </div>
    );
  }
}

export default More;
