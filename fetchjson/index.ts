import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {
  // This is basically what typescirpt is doing ->
  // Response.data has properties of :
  // id
  // title
  // completed

  const todo = response.data as Todo;

  // So the bug was that we wrote wrong property declarations which are now fixed
  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
      The Todo with ID: ${id}
      Has a title of: ${title}
      Is it completed? ${completed}
    `);
};
