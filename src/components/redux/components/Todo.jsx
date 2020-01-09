import React from 'react';
import PropTypes from 'prop-types'

function Todo(props) {
  const { text, completed, onClick } = props
  return (
    <li style={{
      textDecoration: completed ? 'line-through' : 'none'
    }} onClick={onClick}>
      {text}
    </li>
  );
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo;