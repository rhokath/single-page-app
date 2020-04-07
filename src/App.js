import React from 'react';
import './App.css';
import TodoList from './components/todolist'
import TodoForm from './components/todoform'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      my app
      <TodoList/>
      <TodoForm/>
      </header>
    </div>
  );
}

export default App;
