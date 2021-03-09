import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return (
    // returns an identical key warning on first render likely due to the default state set
    props.todoList.map(todo => (
      <Todo key={todo.id} task={todo} todo={todo} onClickTask={props.onClickTask} />
    ))
  )
}

export default TodoList;