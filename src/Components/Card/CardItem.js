import React, { Component } from 'react';
import $ from 'jquery';
import {MdKeyboardArrowUp, MdKeyboardArrowDown} from 'react-icons/lib/md';
import DetailRenderer from '../Content/DetailRenderer';
import ActionItem from '../Content/ActionItem';
import uuid from 'uuid';
import FadeIn from 'react-fade-in';

let arrowDirection = <MdKeyboardArrowDown />,
cardtopStyle = {
    cursor: 'pointer'
}

class CardItem extends Component {
    constructor(props) {
        super(props);
        this._toggleDiv = this._toggleDiv.bind(this);
        this.state = { 
            visible: 'panel',
            active: 'Card',
            detailpieces: this.props.card.expand
        };
    }

    _toggleDiv() {
        $(this.refs['toggle-div']).slideToggle();
        this.setState(
            { 
                active: this.state.active === 'Card'? 'Card active' : 'Card'
            }
        );
        this.state.active === 'Card' ? arrowDirection = <MdKeyboardArrowUp /> : arrowDirection = <MdKeyboardArrowDown/>
    }

    componentWillMount(){
        this.state.active === 'Card active' ? arrowDirection = <MdKeyboardArrowUp /> : arrowDirection = <MdKeyboardArrowDown/>
    }

    render() {
        // Iterate action itmes
        let actionItems;
            if(this.state.detailpieces){
                actionItems = this.state.detailpieces.actions.map(action => {
                    return (
                    <ActionItem key={uuid.v4()} action={action} />
                    )
                });
            }

        return (
        <FadeIn>
        <div className={this.state.active} > 
            <div className="cardTop" onClick={this._toggleDiv} style={cardtopStyle}>
                <div className="icon">
                    <div className={this.props.card.icon !== '' ?  this.props.card.icon : ''}></div>
                </div>
                <h3>{this.props.card.title}</h3>
                <div className="visual">
                    <div id={this.props.card.visual !== '' ?  this.props.card.visual : ''}></div>
                </div>
                <div className="arrow">
                    {arrowDirection}
                </div>
            </div>
            
            <div className="panel" ref="toggle-div">
                <DetailRenderer 
                    title={this.state.detailpieces.title}
                    visual={this.state.detailpieces.visual}
                />
                <div className="relatedAction" >{actionItems}</div>
            </div>

        </div>
        </FadeIn>
        );
    }
}

export default CardItem;