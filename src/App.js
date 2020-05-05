import React from 'react';
import './App.scss';
import TodoList from './components/todolist'
import TodoForm from './components/todoform'
import Form from './components/form'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      my redux hooks todo app
      </header>
      <div className='container'>
      <Form/>
      <TodoList/>
      <TodoForm/>
      </div>
    </div>
  );
}

export default App;
