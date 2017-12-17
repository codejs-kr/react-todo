import React, {Component} from 'react';
import { TodoItem } from '../components';

class TodoItemList extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps.todos, this.props.todos);

    // 목록 추가시에만 RE render
    return nextProps.todos !== this.props.todos;
  }

  render() {
    const { todos, onToggle, onRemove } = this.props;
    const todoList = todos.map(
      ({id, text, color, checked}) => (
        <TodoItem
          id={id}
          key={id}
          text={text}
          color={color}
          checked={checked}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      )
    );

    return (
      <div>
        {todoList}
      </div>
    );
  }
}

export default TodoItemList;

