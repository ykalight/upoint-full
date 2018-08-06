import React, { Component } from 'react';
import uuid from 'uuid';
import CardNxItem from './CardNxItem';
import Button from '../Common/Button';

class CardsNx extends Component {

  render() {
    
    let cardItems;
    if(this.props.cardsdata){
      cardItems = this.props.cardsdata.map(card => {
        return (
          <CardNxItem key={uuid.v4()} card={card} />
        )
      });
    }

    return (
        <div className="container card-container">
          {cardItems}
          
          <div className="more">
            <Button addclass="button" destination="#" label="More..." onClick={this.props.onClick} />
          </div>

        </div>
    );
  }
}

export default CardsNx;
