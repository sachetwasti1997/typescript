import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/22';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(res => {
  const todo = res.data as Todo;
  
  console.log(todo);
  
  const ID = todo.id;
  const title = todo.title;
  const finished = todo.completed;

  logToDo(ID, title, finished);
  
});

const logToDo = (id: number, title: string, isCompleted: boolean) => {

  console.log(`
    The Todo is with ID: ${id}
    Has a Title of: ${title}
    Is it finished? ${!isCompleted ? 'NO' : 'YES'} 
  `);

}