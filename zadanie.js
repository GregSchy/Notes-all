import { useState } from "react";

const ToDoList = () => {
  const [newToDo, setNewToDo] = useState("");

  const todoList = [
    {
      id: 1,
      isDone: false,
      description: "Walk out with dog"
    },
    {
      id: 2,
      isDone: false,
      description: "Eat breakfest"
    },
    {
      id: 3,
      isDone: false,
      description: "Go to work"
    }
  ];

  const handleNewToDo = () => {
    todoList.push({
      id: todoList[todoList.length - 1].id + 1,
      isDone: false,
      description: newToDo
    });
  };

  const handleToDoChecked = (id) => {
    const toDoItem = todoList.find((item) => item.id === id);
    toDoItem.isDone = !toDoItem.isDone;
  };

  return (
    <>
      <label>
        Add new todo:{" "}
        <input value={newToDo} onChange={(e) => setNewToDo(e.target.value)} />
      </label>
      <button onClick={handleNewToDo}>ADD</button>
      <ul style={{ listStyle: "none", textAlign: "left", paddingLeft: "35%" }}>
        {todoList.map((item, index) => (
          <li>
            <input
              type={"checkbox"}
              checked={item.isDone}
              onChange={() => handleToDoChecked(item.id)}
            />
            <label>{item.description}</label>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ToDoList;



========================





import ToDoList from "../components/TodoList";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1 className="title">Welcome to To-Do List App</h1>
      <h2 className="subtitle">Add new todos or check they are done. Enjoy!</h2>
      <ToDoList />
    </div>
  );
}
