import { combineReducers } from "redux";
import { todosReducer } from "./todos";
import { Todo, FetchTodosAction } from "../actions";

export interface StoreState {
  todos: Todo[];
}

export const reducers = combineReducers<StoreState>({ todos: todosReducer });

/*
How state will look like
state: {
  _todos: [{TODO}, {TODO}]
}
*/
