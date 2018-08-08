import React, { Component } from 'react';
import bannerimg from '../../img/banner1.jpg';
import data from '../../data/banner_home.json';
import Button from '../Common/Button';

let contentStyle = {position: 'absolute'},
imgStyle = {width: '100%', objectFit: 'cover'}

class Banner extends Component {

  render() {
    
    return (
        <div className="App-banner" style={{overflow: 'hidden'}}>
            <div className="container">
              <div className="banner-content" style={contentStyle}>
                <h1>{data[0].headline1}</h1>
                <p>{data[0].headline2}</p>
                <Button addclass="button" destination={data[0].destination} label={data[0].button} />
              </div>
            </div>
            <img src={bannerimg} alt="banner" style={imgStyle} />
        </div>
    );
  }
}

export default Banner;
