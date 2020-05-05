//import actions
import { ADD_TODO, TOGGLE_COMPLETE, CLEAR_COMPLETED} from '../actions/index'
//initialize state

const initialState = {
    todos: [
        {
            item: 'learn redux hooks',
            completed: false,
            id: Date.now()+Math.random()

        },
        {
            item: 'coding challenges',
            completed: false,
            id: Date.now()+Math.random()

        },
        {
            item: 'perform code reviews',
            completed: false,
            id: Date.now()+Math.random()
        }
    ]
}

//export reducer
export const rootReducer = (state = initialState, action)=>{
    switch (action.type){
        case ADD_TODO:
            return {
                ...state,
                todos: state.todos.concat(
                    {
                        item: action.payload,
                        completed: false,
                        id: Date.now()+Math.random()
                    }
                )
               
            }
            case TOGGLE_COMPLETE:
                return {
                    ...state,
                    todos: state.todos.map(todo =>
                        todo.id === action.payload ?{...todo, completed: !todo.completed}:todo)
                }
            case CLEAR_COMPLETED:
                return{
                    ...state,
                    todos: state.todos.filter(({completed})=> !completed)
                }
        default:
            return state;
    }
}
// switch case action type
//default return state