import React from 'react';

const TodoForm = props => {
  return (
    <form onSubmit={props.onSubmit}>
      <input
        name='formEntry'
        value={props.task}
        onChange={props.onInputChange}
        placeholder='...todo'
      />
      <input type='submit'
        value='Add'
      />
      <input type='button'
        value='Clear'
        onClick={props.onClickClear}
      />
    </form>
  )
}

export default TodoForm;