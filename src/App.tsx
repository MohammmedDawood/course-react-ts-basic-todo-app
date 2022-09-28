import { useState } from "react";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import "./App.css";
import NewTodo from "./components/NewTodo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  // const todos = [new Todo("Learn React"), new Todo("Learn TypeScript")];

  const addTodoHandler = (todoText: string) => {
    console.log(todoText);

    const newTodo = new Todo(todoText);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };
  const removeTodoHandler = (todoid: string) => {
    console.log(todoid);

    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoid);
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
