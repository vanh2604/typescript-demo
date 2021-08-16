import axios from 'axios';
const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const result: Todo = response.data;
  const { id, title, completed } = result;
  logToDo(id, title, completed);
});

const logToDo = (id: number, title: string, completed: boolean) => {
  console.log(`
    the TODO id is: ${id},
    the TODO title is: ${title}
    Is it finished: ${completed}
  `);
};
