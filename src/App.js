import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'; 
import Route from 'react-router-dom/Route';
import Modal from 'react-modal';
import data from './data/cardContent.json';

import dataRelated from './data/relatedHome.json';
import dataRelated_Savings from './data/relatedSavings.json';
import dataRelated_Health from './data/relatedHealth.json';
import dataRelated_Work from './data/relatedWork.json';

// import dataRelated from './data/relatedHomeDeploy.json';
// import dataRelatedSavings from './data/relatedSavingsDeploy.json';

import Cards from './Components/Card/Cards';
import CardsNx from './Components/Card/CardsNx';
import Related from './Components/Related/Related';
import HeaderBar from './Components/Header/HeaderBar';
import Banner from './Components/Header/Banner';
import Footer from './Components/Footer/Footer';
import DynView from './Components/Views/DynView';
import './stylesheets/App.css';

let homeContentStyle = {position: 'absolute', margin: 'auto', width: '100%', transform: 'translate(0%, -3.4%)'},
contentStyle = {marginTop: '28px', width: '90%'};

class App extends Component {

  constructor(){
    super();
    this.state = {
      cards: [],
      cardsdata: [],
      relateddata: [],
      relateddata_Savings: [],
      relateddata_Health: [],
      relateddata_Work: []
    }
  }


  getData(){
    this.setState({
      cardsdata: data, 
      relateddata: dataRelated,
      relateddata_Savings: dataRelated_Savings,
      relateddata_Health: dataRelated_Health,
      relateddata_Work: dataRelated_Work
    })
  }

  componentWillMount(){
    this.getData();
  }

  componentDidMount() {
    Modal.setAppElement(this.el);
  }

  render() {
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <div className="App" id="wrapper" ref={ref => this.el = ref}>

          <Route path='/' component={HeaderBar} />
          
          <Route exact strict path='/dashboard' render={()=> {return(
            <main>
              <Banner />
              <div className="content" style={homeContentStyle}>
                <Cards cardsdata={this.state.cardsdata} />
                <Related relateddata={this.state.relateddata} />
                <Footer />
              </div>
            </main>
          )}} />

          <Route exact strict path='/dashboardnx' render={()=> {return(
            <main>
              <Banner />
              <div className="content" style={homeContentStyle}>
                <CardsNx cardsdata={this.state.cardsdata} />
                <Related relateddata={this.state.relateddata} />
                <Footer />
              </div>
            </main>
          )}} />

          <Route exact strict path='/savings' render={()=> {return(
            <main>
              <DynView divstyle={contentStyle} pgtitle="Savings & Retirement" />
              <Related relateddata={this.state.relateddata_Savings} />
              <Footer />
            </main>
          )}} />

          <Route exact strict path='/health' render={()=> {return(
            <main>
              <DynView divstyle={contentStyle} pgtitle="Health & Insurance" />
              <Related relateddata={this.state.relateddata_Health} />
              <Footer />
            </main>
          )}} />

          <Route exact strict path='/work' render={()=> {return(
            <main>
              <DynView divstyle={contentStyle} pgtitle="Work Management" />
              <Related relateddata={this.state.relateddata_Work} />
              <Footer />
            </main>
          )}} />
          
        </div>
      </Router>
    );
  }
}

export default App;
