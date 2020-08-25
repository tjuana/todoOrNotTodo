import { createStore } from 'redux'
import { todoReducer } from '../redux/todoReducers'

export const initialState = {
	tasks : JSON.parse(localStorage.getItem('todo')) === null ?
 [] :  JSON.parse(localStorage.getItem('todo'))
}

export const store = createStore(todoReducer, initialState);