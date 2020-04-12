import React from 'react';
import { useState} from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../actions/index'

const TodoForm = () => {
    const dispatch = useDispatch()
    const [newTodo, setNewTodo] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addTodo(newTodo))
        setNewTodo('')

    }
    const handleChange = e => {
        console.log('value', e.target.value)
        setNewTodo(e.target.value)
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
            <button>add todo</button>
            <button>clear completed todos</button>
        </form>
    )
}
export default TodoForm;