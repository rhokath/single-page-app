import React from 'react';
import './App.scss';
import TodoList from './components/todolist'
import TodoForm from './components/todoform'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      my app
      </header>
      <div className='container'>
      <TodoList/>
      <TodoForm/>
      </div>
    </div>
  );
}

export default App;
