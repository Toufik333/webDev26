import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push({id: Date.now(), text: action.payload, completed: false});
        },
        removeTodo: (state, action) => {
            return state.filter(todo => todo.id !== action.payload);
        },
        toggleTodo: (state, action) => {
            const todo = state.find(todo => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        clearCompleted: (state) => {
            return state.filter(todo => !todo.completed);
        },
    },
});

export const { addTodo, removeTodo, toggleTodo, clearCompleted } = todoSlice.actions;
export default todoSlice.reducer;