import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../Features/Todos/todoSlice';

export const store = configureStore({
    reducer: {
        todo: todoReducer,
    },
});
