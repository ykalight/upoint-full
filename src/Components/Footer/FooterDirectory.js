import React, { Component } from 'react';
import uuid from 'uuid';
import FooterDirItems from './FooterDirItems';
import footer_directory from '../../data/footer_directory';

class FooterDirectory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            footerdir_data: []
        };
    }

    getData(){
        this.setState({
        footerdir_data: footer_directory
        })
      }
    
    componentWillMount(){
        this.getData();
    }

  render() {
    
    let footerItems;
    footerItems = this.state.footerdir_data.map(fdata => {
        return (
            <FooterDirItems key={uuid.v4()} fdata={fdata} />
        )
    });
    
    return (
        <div className="footer-directory">
            {footerItems}
        </div>
    );
  }
}

export default FooterDirectory;
