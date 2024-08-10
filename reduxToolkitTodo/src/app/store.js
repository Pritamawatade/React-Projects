 import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

 export const store = configureStore({
    reducer: todoReducer,
 })
// This code is used to create an store instance