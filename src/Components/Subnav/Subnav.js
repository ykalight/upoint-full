import React, { Component } from 'react';
import SubnavItem from './SubnavItem';
import uuid from 'uuid';


class Subnav extends Component {

  render() {
    
    let subnavItems;
    if(this.props.subnavdata){
        subnavItems = this.props.subnavdata.map(subnav => {
        return (
          <SubnavItem key={uuid.v4()} subnav={subnav} />
        )
      });
    }

    return (
      <div className="subNav">
          {subnavItems}
        </div>
    );
  }
}

export default Subnav;
