import React, {Component} from 'react';
import './TodoItem.css';

class TodoItem extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // 항목이 업데이트 될때만 RE render
    return this.props.checked !== nextProps.checked;
  }

  render() {
    const { text, color, checked, id, onToggle, onRemove } = this.props;
    const checkedEl = ( checked ? <span className="check">✓</span> : '');
    const removeEl = (
      <button
        className="remove"
        onClick={(e) => {
          e.stopPropagation();
          onRemove(id);
        }
      }>
      X
      </button>
    );
    console.log(id);

    return (
      <div
        id={"n" + id}
        className={`todo-item ${checked ? 'checked' : ''}`}
        onClick={() => onToggle(id)}
      >
        {removeEl}
        <span className="text" style={{color: color}}>{text}</span>
        {checkedEl}
      </div>
    );
  }
}

export default TodoItem;

