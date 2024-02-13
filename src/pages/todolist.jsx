import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
  setTodo,
  setNewTodo,
  setEditIndex,
} from './Store';

const Todolist = () => {
  const todo = useSelector((state) => state.todo);
  const newtodo = useSelector((state) => state.newtodo);
  const editIndex = useSelector((state) => state.editIndex);

  const dispatch = useDispatch();

  const updatetolist = (event) => {
    dispatch(setNewTodo(event.target.value));
  };

  const additems = () => {
    if (editIndex !== null) {
      const updatedTodo = [...todo];
      updatedTodo[editIndex] = newtodo;
      dispatch(setTodo(updatedTodo));
      dispatch(setEditIndex(null));
    } else {
      dispatch(setTodo([...todo, newtodo]));
    }
    dispatch(setNewTodo(''));
  };

  const editItem = (index) => {
    dispatch(setEditIndex(index));
    dispatch(setNewTodo(todo[index]));
  };

  const deleteItem = (index) => {
    const updatedTodo = [...todo];
    updatedTodo.splice(index, 1);
    dispatch(setTodo(updatedTodo));
    dispatch(setEditIndex(null));
  };

  const deleteallitems = () => {
    dispatch(setTodo([]));
    dispatch(setEditIndex(null));
  };

  return (
    <div className='container'>
      <h1>My todolist</h1>
      <input type="text" value={newtodo} onChange={updatetolist} />
      <button onClick={additems}>
        {editIndex !== null ? 'Update' : 'Add items'}
      </button>
      <button onClick={deleteallitems}>Delete All</button>

      <ul>
        {todo.map((currenttodos, index) => {
          return (
            <li key={index}>
              {currenttodos}
              <button onClick={() => editItem(index)}>Edit</button>
              <button onClick={() => deleteItem(index)}>
                <i className="bi bi-trash-fill"></i>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todolist;