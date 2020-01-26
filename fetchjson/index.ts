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

  // So the bug was that we wrote wrong property declarations
  const ID = todo.ID;
  const title = todo.Title;
  const finished = todo.finished;

  console.log(`
    The Todo wiht ID: ${ID}
    Has a title of: ${title}
    Is it finished? ${finished}
  `);
});
