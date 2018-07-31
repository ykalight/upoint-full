import React, { Component } from 'react';
import uuid from 'uuid';
import CardItem from './CardItem';
import Button from '../Common/Button';

class Cards extends Component {

  render() {
    
    let cardItems;
    if(this.props.cardsdata){
      cardItems = this.props.cardsdata.map(card => {
        return (
          <CardItem key={uuid.v4()} card={card} />
        )
      });
    }

    return (
        <div className="container card-container">
          {cardItems}
          
          <div className="more">
            <Button addclass="button" destination="#" label="More..." />
          </div>
        </div>
    );
  }
}

export default Cards;
