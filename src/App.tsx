import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoInterface } from './interfaces/globalInterfaces';
import InputForm from './components/InputForm';

function App() {
  let [todo, setTodo] = useState<string>("");
  let [todos, setTodos] = useState<TodoInterface[]>([]);

  React.useEffect(() => {
    console.log(todos)
  }, [todos])

  return (
    <div className="App">
      <p>Test App</p>
      <InputForm 
        todos={todos} 
        setTodos={setTodos} 
        todo={todo} 
        setTodo={setTodo} 
      />
      {
        todos.map(el => <li>{el.todo}</li>)
      }
    </div>
  );
}

export default App;
