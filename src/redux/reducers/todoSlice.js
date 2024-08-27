import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';


const initialState = {
  todos: [],
};

// Create the todo slice
export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    // Reducer to add a new todo
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        title: action.payload.title,
        completed: false,
      };
      state.todos.push(newTodo);
    },

    // Reducer to delete a todo by ID
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload); // Filters out the todo to be deleted
    },

    // Reducer to update a todo by ID
    updateTodo: (state, action) => {
      const { id, title, completed } = action.payload;
      const existingTodo = state.todos.find(todo => todo.id === id); // Find the todo to update

      if (existingTodo) {
        existingTodo.title = title; // Update the title of the found todo
        existingTodo.completed = completed; // Update the completed status of the found todo
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;

// Export the reducer to be used in the store
export default todoSlice.reducer;
