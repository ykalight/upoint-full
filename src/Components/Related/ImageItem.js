import React from 'react';

let ImageItem = function statelessFunctionComponentClass(props) {
  let source = '../../img/' + props.source;

  let style = {
    width: '200px',
    margin: '10px 5px 0px 5px'
  };

  return (
    <img src={source} style={style} />
  );
};

export default ImageItem;