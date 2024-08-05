import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo } from '../features/todoSlice';
import './Todo.css'; 

export const Todo = () => {
  const [input, setInput] = useState('');
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  return (
    <div className="main-div">
      <div className="child-div">
        <figure>
          <figcaption>Todo List in Redux toolkit</figcaption>
        </figure>
        <div className="additems">
          <input
            type="text"
            placeholder="Add Items..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="add-btn" onClick={handleAddTodo}>Add</button>
        </div>
        <div className="showitems">
          {todos.map((todo, index) => (
            <div key={index} className="eachItem">
              <h3>{todo}</h3>
              <div className="todo-btn">
                <button className="delete-btn" onClick={() => dispatch(deleteTodo(index))}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
