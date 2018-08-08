import React, { Component } from 'react';
import Button from '../Common/Button';
import uuid from 'uuid';
import RelatedItem from './RelatedItem';

class Related extends Component {
  constructor(){
    super();
    this._showAll = this._showAll.bind(this);
    this._showDefault = this._showDefault.bind(this);
    this.state = {
      show: 3,
      showall: false,
      btlabel: "More..."
    }
  }

  _showAll() {
    let cnt = this.props.relateddata.length;
      this.setState(
          { 
            show: cnt, showall: true, btlabel: "Less..."
          }
      );
  }

  _showDefault() {
      this.setState(
          { 
            show: 3, showall: false, btlabel: "More..."
          }
      );
  }

  scrollToTop() {
      window.scrollTo(0,0);
  }


  render() {

    let relatedItems;

    if(this.props.relateddata){
      relatedItems = this.props.relateddata.slice(0, `${this.state.show}`).map(related => {
        return (
          <RelatedItem key={uuid.v4()} related={related} onClick={this.scrollToTop} />
        )
      });
    }

    return (
        <div className="Related-block">
          <div className="container">

            
            <div className="relatedItems">
              {relatedItems}
            </div>
            

            <div className="more">
              <span onClick={this.state.showall ? this._showDefault : this._showAll}>
                <Button addclass="button bt-outline" destination="#" label={this.state.btlabel} />
              </span>
            </div>

          </div>
        </div>
    );
  }
}

export default Related;


// static propTypes = {
//   in: PropTypes.bool,
//   interval: PropTypes.number,
//   delay: PropTypes.number,
//   children: PropTypes.node
// }
// static defaultProps = {
//   in: false,
//   interval: 50,
//   delay: 6000
// }
