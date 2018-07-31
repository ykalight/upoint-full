import React, { Component } from 'react';

import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';

class SlidePane extends Component {
    constructor(){
        super();
        this.state = {
          isPaneOpen: false,
          isPaneOpenLeft: false
        }
      }

    render() {
        return (
            <div>
                <div style={{ marginTop: '72px' }}>
                    <button onClick={ () => this.setState({ isPaneOpenLeft: true }) }>
                        Click me to open left pane with 20% width!
                    </button>
                </div>
                
                <SlidingPane
                    className='navSlider'
                    overlayClassName='navSliderMask'
                    isOpen={ this.state.isPaneOpenLeft }
                    title=''
                    from='left'
                    width='90%'
                    onRequestClose={ () => this.setState({ isPaneOpenLeft: false }) }>
                    <div>And I am pane content on left.</div>
                </SlidingPane>
            </div>
        );      
    }
}

export default SlidePane;
