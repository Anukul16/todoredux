// todoSlice.js
import { createSlice, nanoid } from '@reduxjs/toolkit';

const loadTasksFromLocalStorage = () => {
  const storedTasks = localStorage.getItem('tasks');
  return storedTasks ? JSON.parse(storedTasks) : [];
};

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    tasks: loadTasksFromLocalStorage(),
  },
  reducers: {
    addTask(state, action) {
      const newTask = {
        id: nanoid(),
        text: action.payload,
      };
      state.tasks.push(newTask);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    removeTask(state, action) {
      const taskIdToRemove = action.payload;
      state.tasks = state.tasks.filter(task => task.id !== taskIdToRemove);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    updateTask(state, action) {
      const { id, text } = action.payload;
      const existingTask = state.tasks.find(task => task.id === id);
      if (existingTask) {
        existingTask.text = text;
        localStorage.setItem('tasks', JSON.stringify(state.tasks));
      }
    },
  },
});

export const { addTask, removeTask, updateTask } = todoSlice.actions;
export default todoSlice.reducer;
