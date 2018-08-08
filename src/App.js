import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'; 
import Route from 'react-router-dom/Route';
import Modal from 'react-modal';
import data from './data/card_home.json';
import './stylesheets/App.css';

import dataRelated from './data/related_home.json';
import dataRelated_Savings from './data/related_savings.json';
import dataRelated_Health from './data/related_health.json';
import dataRelated_Work from './data/related_work.json';

import Cards from './Components/Card/Cards';
import CardsNx from './Components/Card/CardsNx';
import Related from './Components/Related/Related';
import HeaderBar from './Components/Header/HeaderBar';
import Banner from './Components/Header/Banner';
import Footer from './Components/Footer/Footer';
import DynView from './Components/Views/DynView';
import ToolboxEditor from './Components/Utility/ToolboxEditor';

import {Link} from 'react-router-dom'; 


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
      relateddata_Work: [],
      toolboxedit_show: false
    };
    this.showToolEdit = this.showToolEdit.bind(this);
    this.hideToolEdit = this.hideToolEdit.bind(this);
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

  showToolEdit(e) {
    e.preventDefault();
    this.setState({toolboxedit_show: true});
  }

  hideToolEdit() {
    this.setState({toolboxedit_show: false});
   }

  render() {
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <div className="App" id="wrapper" ref={ref => this.el = ref}>

          <Route path='/' component={HeaderBar} />

          <Route path='/upoint-full' render={()=> {return(
            <div style={{padding: '140px 0', textAlign:'center'}}>
              <Link className="button" to="/dashboard" style={{fontSize:'2em', fontWeight:'bold', backgroundColor:'#2bafd7'}}>Click to start demo</Link>
            </div>
          )}} />
          
          <Route exact strict path='/dashboard' render={()=> {return(
            <main>
              <Banner />
              <div className="content" style={homeContentStyle}>
                <CardsNx cardsdata={this.state.cardsdata} onClick={this.showToolEdit} />
                <Related relateddata={this.state.relateddata} />
                <Footer />
              </div>
              {this.state.toolboxedit_show && (<ToolboxEditor show={this.state.toolboxedit_show} onClickClose={this.hideToolEdit} />)}
            </main>
          )}} />

          <Route exact strict path='/dashboard_xp' render={()=> {return(
            <main>
              <Banner />
              <div className="content" style={homeContentStyle}>
                <Cards cardsdata={this.state.cardsdata} onClick={this.showToolEdit} />
                <Related relateddata={this.state.relateddata} />
                <Footer />
              </div>
              {this.state.toolboxedit_show && (<ToolboxEditor show={this.state.toolboxedit_show} onClickClose={this.hideToolEdit} />)}
            </main>
          )}} />

          <Route exact strict path='/savings' render={()=> {return(
            <main>
              <DynView divstyle={contentStyle} pgtitle="Savings & Retirement" temptext="Savings & Retirement content" />
              <Related relateddata={this.state.relateddata_Savings} />
              <Footer />
            </main>
          )}} />

          <Route exact strict path='/savings/roth' render={()=> {return(
            <main>
              <DynView divstyle={contentStyle} pgtitle="Advantages of Roth Contributions" temptext="Advantages of Roth Contributions content" />
              <Footer />
            </main>
          )}} />

          <Route exact strict path='/health' render={()=> {return(
            <main>
              <DynView divstyle={contentStyle} pgtitle="Health & Insurance" temptext="Health & Insurance content" />
              <Related relateddata={this.state.relateddata_Health} />
              <Footer />
            </main>
          )}} />

          <Route exact strict path='/work' render={()=> {return(
            <main>
              <DynView divstyle={contentStyle} pgtitle="Work Management" temptext="Work Management content" />
              <Related relateddata={this.state.relateddata_Work} />
              <Footer />
            </main>
          )}} />

          <Route exact strict path='/life' render={()=> {return(
            <main>
              <DynView divstyle={contentStyle} pgtitle="Life Changes" temptext="Life Changes content" />
              <Related relateddata={this.state.relateddata_Work} />
              {/* TODO: Change related data call  */}
              <Footer />
            </main>
          )}} />

          <Route exact strict path='/wellbeing' render={()=> {return(
            <main>
              <DynView divstyle={contentStyle} pgtitle="Your Well-Being" temptext="Well-Being content" />
              <Related relateddata={this.state.relateddata_Work} />
              {/* TODO: Change related data call  */}
              <Footer />
            </main>
          )}} />

          <Route exact strict path='/perks' render={()=> {return(
            <main>
              <DynView divstyle={contentStyle} pgtitle="Perks & Discounts" temptext="Perks & Diiscounts content" />
              {/* <Related relateddata={this.state.relateddata_Work} /> */}
              <Footer />
            </main>
          )}} />

          <Route exact strict path='/reimbursement' render={()=> {return(
            <main>
              <DynView divstyle={contentStyle} pgtitle="Reimbursement Accounts" temptext="Reimbursement Account content" />
              {/* <Related relateddata={this.state.relateddata_Work} /> */}
              <Footer />
            </main>
          )}} />

          <Route exact strict path='/other' render={()=> {return(
            <main>
              <DynView divstyle={contentStyle} pgtitle="Other Benefits" temptext="Other Benefits content" />
              <Related relateddata={this.state.relateddata_Work} />
              {/* TODO: Change related data call  */}
              <Footer />
            </main>
          )}} />

          <Route exact strict path='/savings/boost' render={()=> {return(
            <main>
              <DynView divstyle={contentStyle} pgtitle="Boost Your Retirement Wealth" temptext="Boost Your Retirement Wealth content" />
              {/* <Related relateddata={this.state.relateddata_Work} /> */}
              <Footer />
            </main>
          )}} />

          <Route exact strict path='/savings/more' render={()=> {return(
            <main>
              <DynView divstyle={contentStyle} pgtitle="Get more from your 401(k) account" temptext="Tips and advice to boost your retirement savings.... content goes here." />
              {/* <Related relateddata={this.state.relateddata_Work} /> */}
              <Footer />
            </main>
          )}} />

          <Route exact strict path='/work/pto' render={()=> {return(
            <main>
              <DynView divstyle={contentStyle} pgtitle="What to do with unused PTO?" temptext="Explore more exciting ways to use your PTO.... content goes here." />
              {/* <Related relateddata={this.state.relateddata_Work} /> */}
              <Footer />
            </main>
          )}} />

          <Route exact strict path='/searchresults' render={()=> {return(
            <main>
              <DynView divstyle={contentStyle} pgtitle="Search Results" temptext="Lorem ipsum..." />
              {/* <Related relateddata={this.state.relateddata_Work} /> */}
              <Footer />
            </main>
          )}} />

          <Route exact strict path='/manager' render={()=> {return(
            <main>
              <DynView divstyle={contentStyle} pgtitle="Manager View" temptext="Lorem ipsum..." />
              {/* <Related relateddata={this.state.relateddata_Work} /> */}
              <Footer />
            </main>
          )}} />
          
        </div>
      </Router>
    );
  }
}

export default App;
