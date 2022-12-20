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
