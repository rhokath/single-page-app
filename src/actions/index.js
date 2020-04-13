//don't forget to export
//action creators
//actions
//dispatch
//action types
export const ADD_TODO = "ADD_TODO"
export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE"
export const CLEAR_COMPLETED = "CLEAR COMPLETED"

//action creators

//add todo
export const addTodo = newTodo => {
    return {
        type: ADD_TODO,
        payload: newTodo
    }
}
//remove todo

//toggle todo
export const toggleComplete = id => {
    return{
        type: TOGGLE_COMPLETE,
        payload: id
    }
}

//clear completed
export const clearCompleted = () => {
    return {
        type: CLEAR_COMPLETED
    }
}