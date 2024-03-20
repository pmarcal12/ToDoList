// import logo from './logo.svg';
// import './App.css';
import TodoList from './TodoList';

function App() {
  return (
    <>
      <TodoList />
      <input type="text"/>
      <button>Add Task</button>
      <button>Clear Completed</button>
      <p>x tasks left</p>
    </>
  );
}

export default App;
