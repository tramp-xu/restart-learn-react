import React from 'react';
import PropTypes from 'prop-types';

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

function Link({active, children, onClick}) {
  return (
    <button
    onClick={onClick}
    disabled={active}
    style={{
      marginLeft: '4px'
    }}
  >
    {children}
  </button>
  )
}

export default Link;