import { FetchTodosAction, DeleteTodoAction } from "./todos";

/**
 * Instead of creating an object
 * we create enum which basically assigns value = number as a unique var
 * 
 * Its a list of action types.
 */
export enum ActionTypes {
  fetchTodos,
  deleteTodo
}

// Custom Type Union of all action types for each type.
export type TodoAction = FetchTodosAction | DeleteTodoAction;