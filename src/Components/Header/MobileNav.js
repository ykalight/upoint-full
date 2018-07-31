import React, { Component } from 'react';
import {MdKeyboardArrowDown, MdKeyboardArrowLeft} from 'react-icons/lib/md';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import Nav from './Nav';

let menuStyle = {
    fontSize: '.6em',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    cursor: 'pointer'
},
arrowDownStyle = {width: '18px', height: '18px', display: 'block', margin: 'auto'},
arrowLeftStyle = {width: '36px', height: '36px', display: 'block', margin: 'auto', marginTop: '-6px'},
arrowType = 'down',
drawArrow = <MdKeyboardArrowDown style={arrowDownStyle} />;

class MobileNav extends Component {
    constructor(){
        super();
        this.state = {
            displayclass: '',
            isPaneOpenLeft: false
        }
        this._toggler = this._toggler.bind(this);
        this.removemenu = this.removemenu.bind(this);
        this.toggleArrow = this.toggleArrow.bind(this);
        this.resetarrow = this.resetarrow.bind(this);
      }

        _toggler() {
            this.setState(
                {isPaneOpenLeft: this.state.isPaneOpenLeft ? false : true}
            );
            this.toggleArrow()
        }

        toggleArrow() {
            // this.state.isPaneOpenLeft ? arrowType = <MdKeyboardArrowLeft style={arrowLeftStyle} /> : arrowType = <MdKeyboardArrowDown style={arrowDownStyle} />;
            
            this.setState(
                {displayclass: this.state.displayclass === '' ? 'hide' : ''}
            );

            arrowType === 'down' ? arrowType = 'left' : arrowType = 'down';
            arrowType === 'left' ? drawArrow = <MdKeyboardArrowLeft style={arrowLeftStyle} /> : drawArrow = <MdKeyboardArrowDown style={arrowDownStyle} />;
        }

        componentDidMount() {
            window.addEventListener('resize', this.removemenu);
            //this.toggleArrow()
        }
        
        componentWillUnmount() {
            window.removeEventListener('resize', this.removemenu);
        }
        
        resetarrow() {
            this.setState({displayclass: ''});
            arrowType = 'down';
            drawArrow = <MdKeyboardArrowDown style={arrowDownStyle} />;
        }
        removemenu() {
            // Hide menu on resize
            this.setState({isPaneOpenLeft: false});
            this.resetarrow()
        }

    render() {

        return (
            <div id="mnav" style={menuStyle} onClick={this._toggler}>
                <div className={this.state.displayclass} style={{textALign:'center'}}>Menu</div>
                {drawArrow}

                <SlidingPane
                    className='navSlider'
                    overlayClassName='navSliderMask'
                    isOpen={ this.state.isPaneOpenLeft }
                    title=''
                    from='left'
                    width='90%'
                    onRequestClose={ () => this.setState({ isPaneOpenLeft: false }) }>
                    <Nav />
                </SlidingPane>
            </div>
        );
    }
}

export default MobileNav;