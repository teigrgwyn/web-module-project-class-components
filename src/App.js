import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class App extends React.Component {
  state = {
    todoList: [],
    task: ''
  }

  onInputChange = e => {
    this.setState({ task: e.target.value });
  }

  onClickTask = (clickedTask) => {
    console.log(clickedTask);
    //clickedTask.toggleClass('done');

    let test = this.state.todoList.map(todo => {
      if (todo.id === clickedTask.id) {
        todo.completed = !todo.completed;
      }

      return todo;
    })
    this.setState({ todoList: test });
  }

  onSubmit = e => {
    e.preventDefault();
    
    // rewrite to use setState instead of push
    this.state.todoList.push({
      task: this.state.task,
      id: Date.now(),
      completed: false
    });
    this.setState({ task: '' });
  }

  onClickClear = e => {
    this.setState({ todoList: [] });
  }

  render() {
    return (
      <div id='app'>
        <h1>Todo List: MVP</h1>
        <TodoList todoList={this.state.todoList} onClickTask={this.onClickTask} />
        <TodoForm task={this.state.task} onInputChange={this.onInputChange} onSubmit={this.onSubmit} onClickClear={this.onClickClear} />
      </div>
    );
  }
}

export default App;
