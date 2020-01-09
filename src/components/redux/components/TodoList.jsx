import React from 'react';
import Todo from './Todo'
import PropTypes from 'prop-types';

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
};

function TodoList({todos, toggleTodo}) {
  return (
    <ul>
      {
        todos.map((todo) => (
          <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)}></Todo>
        ))
      }
    </ul>
  );
}

export default TodoList