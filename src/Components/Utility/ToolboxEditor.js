import React, { Component } from 'react';
import ReactDrawer from 'react-drawer';
import ToolboxItem from './ToolboxItem';
import toolbox_item_data from '../../data/toolbox_item';
import uuid from 'uuid';
import {MdClose} from 'react-icons/lib/md';

let xStyle = {
  position:'absolute', 
  right:'22px', 
  top:'22px', 
  width:'42px', 
  height:'42px', 
  cursor:'pointer'
}

class ToolboxEditor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            position: 'bottom',
            noOverlay: false,
            toolItem_data: []
        };
        this.toggleDrawer = this.toggleDrawer.bind(this);
        this.closeDrawer = this.closeDrawer.bind(this);
        this.onDrawerClose = this.onDrawerClose.bind(this);
        this.setPosition = this.setPosition.bind(this);
        this.setNoOverlay = this.setNoOverlay.bind(this);
    }

      getData(){
        this.setState({
          toolItem_data: toolbox_item_data
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
        this.props.onClickClose()
      }
    
      componentDidMount(){
        this.toggleDrawer();
        this.setState({open: this.props.show});
      }

  render() {

    let toolItems;
    toolItems = this.state.toolItem_data.map(tool => {
        return (
            <ToolboxItem key={uuid.v4()} tool={tool} />
        )
    });

    return (
        <div className="toolbox-editor-wrapper">
          <ReactDrawer
              open={this.state.open}
              position={this.state.position}
              onClose={this.onDrawerClose}
              noOverlay={this.state.noOverlay}>
              <i onClick={this.closeDrawer} className="icono-cross"></i>
              
              <div className="container">
                  <div className="toolbox-editor">
                    <div><MdClose onClick={this.toggleDrawer} style={xStyle} /></div>
                    <div className="scroll">{toolItems}</div>
                  </div>
              </div>

        </ReactDrawer>
        </div>
        
    );
  }
}

export default ToolboxEditor;
