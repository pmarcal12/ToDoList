// import logo from './logo.svg';
// import './App.css';
import TodoList from './TodoList';

function App() {
  return (
    // <div className="App">
    //   {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */}
    //   <TodoList />
    //   <input type="text"/>
    //   <button>Add Task</button>
    //   <button>Clear Completed</button>
    //   <p>x tasks left</p>
    // </div>
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
