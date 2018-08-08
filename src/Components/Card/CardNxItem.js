import React, { Component } from 'react';
import {MdKeyboardArrowRight} from 'react-icons/lib/md';
import FadeIn from 'react-fade-in';
import {Link} from 'react-router-dom';

let arrowDirection = <MdKeyboardArrowRight />;

class CardNxItem extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            active: 'Card'
        };
        this.scrollToTop=this.scrollToTop.bind(this);
    }

    scrollToTop() {
        window.scrollTo(0,0);
    }

    render() {
        return (
        <FadeIn>
            <Link to={this.props.card.nxlink} onClick={this.scrollToTop}>
                <div className={this.state.active} > 
                    <div className="cardTop nonexpand">
                        <div className="icon">
                            <div className={this.props.card.icon !== '' ?  this.props.card.icon : ''}></div>
                        </div>
                        <h3>{this.props.card.title}</h3>
                        <div className="visual">
                            <div id={this.props.card.visual !== '' ?  this.props.card.visual : ''}></div>
                        </div>
                        <div className="arrow">
                            <span>{arrowDirection}</span>
                        </div>
                    </div>
                </div>
            </Link>
        </FadeIn>
        );
    }
}

export default CardNxItem;