import React from 'react';

const TodoForm = () => {
    return(
        <form>
            <input
            type='text'
            placeholder='add a new todo'
            name='item'
            />
            <button>add todo</button>
            <button>clear completed todos</button>
        </form>
    )
}
export default TodoForm;