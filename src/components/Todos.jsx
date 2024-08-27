import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTodo, deleteTodo } from "../redux/reducers/todoSlice"; // Adjust path if necessary

function Todos() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleUpdate = (todo) => {
    const newTitle = prompt("Enter new title:", todo.title);
    if (newTitle !== null) {
      dispatch(
        updateTodo({
          id: todo.id,
          title: newTitle,
          completed: todo.completed, // Preserving the completed state
        })
      );
    }
  };

  return (
    <>
      <div className="text-2xl font-bold mb-4 text-center">Todos List</div>
      <ul className="list-none space-y-4 mx-auto max-w-md">
        {todos.map((todo) => (
          <li
            className="flex items-center bg-zinc-800 px-4 py-2 rounded w-full overflow-hidden"
            key={todo.id}
          >
            <div className="text-white flex-grow text-lg truncate">
              {todo.title}
            </div>
            <div className="flex space-x-2 ml-4">
              <button
                onClick={() => handleUpdate(todo)}
                className="text-white bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded text-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 13.5L12 4.5l7.5 7.5-7.5 7.5L3 13.5z"
                  />
                </svg>
              </button>
              <button
                onClick={() => dispatch(deleteTodo(todo.id))}
                className="text-white bg-red-500 border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded text-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
