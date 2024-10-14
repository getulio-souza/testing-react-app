import './App.css';
import TodoList from './components/todo';

function App() {

  const todos = [
    { id: 1, title: "wash dishes", completed: false },
    { id: 2, title: "clean the floor", completed: true }
  ]

  return (
    <div className="App">
      {todos.map((todo) => {
        return (
          <div>
            <TodoList todo={todo}/>
          </div>
        )
      })}
    </div>
  );
}

export default App;
