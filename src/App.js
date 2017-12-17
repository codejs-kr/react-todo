import React, { Component } from 'react';
import { TodoListTemplate, Palette, Form, TodoItemList } from './components';

class App extends Component {
  id = 5;
  colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];

  state = {
    input: '',
    color: '#343a40',
    todos: [
      { id: 0, text: '출근 하기', checked: true, color: '#343a40' },
      { id: 1, text: '스터디 가기', checked: true, color: '#f03e3e'  },
      { id: 2, text: '저녁 모임 가기', checked: false, color: '#343a40'  },
      { id: 3, text: '집 전구 교체 하기', checked: false, color: '#343a40'  },
      { id: 4, text: '이불 교체 하기', checked: false, color: '#343a40'  },
    ]
  };

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  };

  handleCreate = () => {
    const { input, todos } = this.state;

    this.setState({
      input: '',
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false,
        color: this.state.color
      })
    });
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  };

  handleToggle = (id) => {
    const { todos } = this.state;
    let currentState = [];

    todos.forEach((item) => {
      if (item.id === id) {
        item.checked = !item.checked;
      }
      currentState.push(item);
    });

    this.setState({
      todos: currentState
    });
  };

  handleRemove = (id) => {
    const { todos } = this.state;
    let currentState = [];

    todos.forEach((item) => {
      if (item.id !== id) {
        currentState.push(item)
      }
    });

    this.setState({
      todos: currentState
    });
  };

  handleColor = (color) => {
    this.setState({
      color: color
    });
  };

  render() {
    const { handleKeyPress, handleChange, handleCreate, handleColor } = this;

    return (
      <TodoListTemplate
        palette={
          <Palette
            colors={this.colors}
            onColor={handleColor}
          />
        }
        form={
          <Form
            value={this.state.input}
            color={this.state.color}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            onCreate={handleCreate}
          />
        }>
        <TodoItemList
          todos={this.state.todos}
          onToggle={this.handleToggle}
          onRemove={this.handleRemove}
        />
      </TodoListTemplate>
    );
  }
}

export default App;
