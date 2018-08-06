import React, { Component } from 'react';
import ReactDrawer from 'react-drawer';

class ToolboxEditor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            position: 'bottom',
            noOverlay: false
        };
        this.toggleDrawer = this.toggleDrawer.bind(this);
        this.closeDrawer = this.closeDrawer.bind(this);
        this.onDrawerClose = this.onDrawerClose.bind(this);
        this.setPosition = this.setPosition.bind(this);
        this.setNoOverlay = this.setNoOverlay.bind(this);
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

    return (
        <div>
            {/* {this.state.open && ( */}
                <ReactDrawer
                    open={this.state.open}
                    position={this.state.position}
                    onClose={this.onDrawerClose}
                    noOverlay={this.state.noOverlay}>
                    <i onClick={this.closeDrawer} className="icono-cross"></i>
                    
                    <div className="container">
                        <div className="toolbox-editor">
                          xxx
                        </div>
                    </div>
    
              </ReactDrawer>
            {/* )} */}
        </div>
        
    );
  }
}

export default ToolboxEditor;
