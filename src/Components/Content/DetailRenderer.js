import React from 'react';

let DetailRenderer = function statelessFunctionComponentClass(props) {
  let title = props.title,
      visual = props.visual;

  return (
    <div>
      <h5>{title}</h5>
      <div className="tempGraph" id={visual}></div>
    </div>

  );
};

export default DetailRenderer;


