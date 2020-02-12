import {
  Todo,
  FetchTodosAction,
  DeleteTodoAction,
  ActionTypes,
  TodoAction
} from "../actions";

export const todosReducer = (state: Todo[] = [], action: TodoAction) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    case ActionTypes.deleteTodo:
      return state.filter((todo: Todo) => todo.id !== action.payload);
    default:
      return state;
  }
};
