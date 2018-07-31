import React, { Component } from 'react';
import Logo from './Logo';
import Nav from './Nav';
import Message from './Message';
import Profile from './Profile';
import Search from './Search';
import MobileNav from './MobileNav';

let activeCardStyle;

class HeaderBar extends Component {

    constructor(props){
        super(props);
        this.state = {
            scrolling: false,
            active: "",
            width: 0,
            navshowclass: "",
            showheadclass: "",
            xclass: "hide"
        }
        this.handleScroll = this.handleScroll.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this._toggleDiv = this._toggleDiv.bind(this);
    }

    componentWillMount() {
        this.updateWindowDimensions();
        activeCardStyle = {position: this.state.scrolling ? 'fixed' : 'fixed', top: 0, width: '100vw', zIndex: 1}
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
      
    updateWindowDimensions() {
        this.setState({ width: window.innerWidth });
        this.mNavSwithch();
    }

    mNavSwithch() {
        this.state.width > 740 ? this.setState({navshowclass: '', xclass: 'hide'}) : this.setState({navshowclass: 'hide', xclass: ''});
    }

    handleScroll() {
        if (window.scrollY === 0 && this.state.scrolling === true) {
            this.setState({scrolling: false, active: ""})
        }
        else if (window.scrollY !== 0 && this.state.scrolling !== true) {
            this.setState({scrolling: true, active: "active"})
        }
    }

    _toggleDiv() {
        this.setState(
            {navshowclass: this.state.navshowclass === '' ? 'hide' : ''}
        );
    }

    render() {
        return (

            <header className={this.state.active} style={activeCardStyle}>
                <div>
                    <MobileNav />
                    <Logo />
                    <Nav className={this.state.navshowclass} />
                    <Message />
                    <Profile />
                    <Search />
                </div>
            </header>
        );
    }

}

export default HeaderBar;