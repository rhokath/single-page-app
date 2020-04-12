//don't forget to export
//action creators
//actions
//dispatch
//action types
export const ADD_TODO = "ADD_TODO"

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

//clear completed