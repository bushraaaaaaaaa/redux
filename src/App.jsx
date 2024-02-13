import './App.css'
import React from 'react';
import { Provider } from 'react-redux';
import store from './pages/Store';
import Todolist from './pages/todolist';

function App() {
 

  return (
    <>
    <Provider store={store}>
      <Todolist />
    </Provider>
    </>
  )
}

export default App
