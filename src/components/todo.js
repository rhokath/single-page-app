import React from 'react';
import { useDispatch} from 'react-redux';
import { toggleComplete } from '../actions';
//dispatch hook should be used in components according to docs

const TodoItem = ({item, id, completed})=>{
    const dispatch = useDispatch();
    return(
        <div className='todo'>
    <h1>{item}</h1>
    {completed ? <h2>completed</h2>: <h2>not completed</h2>}
         <p onClick={()=> dispatch(toggleComplete(id))}>toggle</p>
        </div>
    )
}

export default TodoItem;