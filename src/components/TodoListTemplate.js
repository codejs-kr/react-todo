import React from 'react';
import './TodoListTemplate.css';

const TodoListTemplate = ({form, palette, children}) => {
  return (
    <main>
      <header>오늘 할 일</header>
      <section id="palette-section">
        {palette}
      </section>
      <section id="form-section">
        {form}
      </section>
      <section id="list-section">
        {children}
      </section>
    </main>
  );
};

export default TodoListTemplate;
