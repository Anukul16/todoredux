// todoSlice.js
import { createSlice, nanoid } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    tasks: [],
  },
  reducers: {
    addTask(state, action) {
      state.tasks.push({
        id: nanoid(),
        text: action.payload
      });
    },
    removeTask(state, action) {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    updateTask(state, action) {
      const { id, text } = action.payload;
      const existingTask = state.tasks.find(task => task.id === id);
      if (existingTask) {
        existingTask.text = text;
      }
    },
  },
});

export const { addTask, removeTask, updateTask } = todoSlice.actions;
export default todoSlice.reducer;
