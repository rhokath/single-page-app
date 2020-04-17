import React from 'react'

import TodoItem from './todo';
import { useSelector} from 'react-redux';
//useSelector is equivalent to mapStateToProps argument to connect conceptually
//selector will be called with the entire Redux store state as its only argument
//may call multiple times within a single function component
//differences between mapStateToProps and useSelector
/*
The selector may return any value as a result, not just an object. The return value of the selector will be used as the return value of the useSelector() hook.
When an action is dispatched, useSelector() will do a reference comparison of the previous selector result value and the current result value. If they are different, the component will be forced to re-render. If they are the same, the component will not re-render.
The selector function does not receive an ownProps argument. However, props can be used through closure (see the examples below) or by using a curried selector.
Extra care must be taken when using memoizing selectors (see examples below for more details).
useSelector() uses strict === reference equality checks by default, not shallow equality (see the following section for more details)

*/
const TodoList = () => {
    //basic usage could also use props via closure to determine what to extract
    const todos = useSelector(state => state.todos)
    return(
        <div className="list">
            TodoList
            {todos.map(todo => {
                console.log(todo)
                return <TodoItem 
                key={todo.id}
                id={todo.id}
                item={todo.item}
                completed={todo.completed}
                />
            })}
        </div>
    )
}

export default TodoList;