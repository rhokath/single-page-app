import React from 'react';
import { useState} from 'react'
import {useDispatch} from 'react-redux'
import { addTodo, clearCompleted } from '../actions/index'
//need to check input the there's a valid string and not an empty string
const TodoForm = () => {
    const dispatch = useDispatch()
    const [newTodo, setNewTodo] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        console.log('newTodo', newTodo)
        dispatch(addTodo(newTodo))
        setNewTodo('')

    }
    const handleChange = e => {
        console.log('value', e.target.value)
        let inputValue = e.target.value
        inputValue = inputValue.trim()
        console.log('input', inputValue)
        setNewTodo(inputValue)
        console.log('input below', inputValue)
    }
    const handleClear = e => {
        e.preventDefault()
        dispatch(clearCompleted())
        
    }
    return(
        <form onSubmit={e => handleSubmit(e)}>
            <input
            type='text'
            placeholder='add a new todo'
            name='item'
            value={newTodo}
            onChange={handleChange}
            />
            <button className="addButton">add todo</button>
            <button className="clearButton" onClick={(e)=> handleClear(e)}>clear completed todos</button>
        </form>
    )
}
export default TodoForm;