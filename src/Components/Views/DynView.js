import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'; 
import Route from 'react-router-dom/Route';
import ReactDrawer from 'react-drawer';
import Subnav from '../Subnav/Subnav';
import 'react-drawer/lib/react-drawer.css';
import subnav_Savings from '../../data/subnavSavings.json';
import subnav_Health from '../../data/subnavHealth.json';
import subnav_Work from '../../data/subnavWork.json';

class DynView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      position: 'bottom',
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
      <Router>
        <div>
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
          <ReactDrawer
            open={this.state.open}
            position={this.state.position}
            onClose={this.onDrawerClose}
            noOverlay={this.state.noOverlay}>
            <i onClick={this.closeDrawer} className="icono-cross"></i>
            
            <div>
                <div className="container" style={this.props.divstyle}>
                      ...Card / Content<br />
                      ...Card / Content<br />
                      ...Card / Content<br />
                      ...Card / Content<br />
                      ...Card / Content<br />
                      ...Card / Content<br />
                      ...Card / Content<br />
                </div>
            </div>

          </ReactDrawer>
          </div>
      </Router>
    );
  }
}

export default DynView;
