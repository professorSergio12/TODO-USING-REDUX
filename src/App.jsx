import AddTodo from './components/Addtodo'
import Todos from './components/Todos'


function App() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4 bg-[url('./assets/todo-bg.avif')] bg-cover bg-center w-full rounded border">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">TODO APPLICATION</h1>
      <div className="flex flex-col items-center w-full max-w-md">
        <AddTodo />
        <Todos />
      </div>
    </div>
  );
}

export default App;
