import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'; 
import Route from 'react-router-dom/Route';
// import ReactDrawer from 'react-drawer';
import Subnav from '../Subnav/Subnav';
import FadeIn from 'react-fade-in';
import 'react-drawer/lib/react-drawer.css';
import subnav_Savings from '../../data/subnav_savings.json';
import subnav_Health from '../../data/subnav_health.json';
import subnav_Work from '../../data/subnav_work.json';


class DynView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      position: 'top',
      noOverlay: true,
      data_savings: [],
      data_health: [],
      data_work: []
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.onDrawerClose = this.onDrawerClose.bind(this);
    this.setPosition = this.setPosition.bind(this);
    this.setNoOverlay = this.setNoOverlay.bind(this);
  }

  getData(){
    this.setState({
      data_savings: subnav_Savings,
      data_health: subnav_Health,
      data_work: subnav_Work
    })
  }

  componentWillMount(){
    this.getData();
  }

  setPosition(e) {
    this.setState({position: e.target.value});
  }
  setNoOverlay(e) {
    this.setState({noOverlay: e.target.checked});
  }
  toggleDrawer() {
    this.setState({open: !this.state.open});
  }
  closeDrawer() {
    this.setState({open: false});
  }
  onDrawerClose() {
    this.setState({open: false});
  }

  componentDidMount(){
    this.toggleDrawer()
  }


  render() {
    return (
      <FadeIn>
        <div className="dviewWrapper">
          <Router onUpdate={() => window.scrollTo(0, 0)}>
            <div className="container subnav-container">
              <h1>{this.props.pgtitle}</h1>
              
              <Route exact strict path='/savings' render={()=> {return(
                <Subnav subnavdata={this.state.data_savings} />
              )}} />

              <Route exact strict path='/health' render={()=> {return(
                <Subnav subnavdata={this.state.data_health} />
              )}} />

              <Route exact strict path='/work' render={()=> {return(
                <Subnav subnavdata={this.state.data_work} />
              )}} />
            </div>
          </Router>

            <div className="dviewContentContainer">
                <div className="container" style={this.props.divstyle}>
                  <div className="tempCards">
                    <p>{this.props.temptext}</p>
                    <p style={{fontSize: '.9em', fontStyle: 'italic', paddingTop:'28px'}}>Prototype placeholder</p>
                  </div>
                </div>
            </div>
            
          </div>
      </FadeIn>
    );
  }
}

export default DynView;
