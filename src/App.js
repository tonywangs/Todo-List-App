import React from 'react';
import Input from './components/Input'
import TodoList from './components/TodoList'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <Input />
      <TodoList />
    </div>
  );
}

export default App;
