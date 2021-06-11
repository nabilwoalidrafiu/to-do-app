import React, { useState } from 'react';
import TodoForm from './TodoForm';
// import Button from '@material-ui/core/button';

// import { RiCloseCircleLine } from 'react-icons/ri';
// import { TiEdit } from 'react-icons/ti';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'>
        <button type="button" className="btn button btn-primary"
          onClick={() => removeTodo(todo.id)}
        >Close</button> 
        
        <button type="button" className="btn button btn-primary"
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
        >Edit</button>
      </div>
    </div>
  ));
};

export default Todo;