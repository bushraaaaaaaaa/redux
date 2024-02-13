import { configureStore, createSlice } from '@reduxjs/toolkit';
const initialState = {
  todo: [''],
  newtodo: '',
  editIndex: null,
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setTodo: (state, action) => {
      state.todo = action.payload;
    },
    setNewTodo: (state, action) => {
      state.newtodo = action.payload;
    },
    setEditIndex: (state, action) => {
      state.editIndex = action.payload;
    },
  },
});
export const { setTodo, setNewTodo, setEditIndex } = todoSlice.actions;

const store = configureStore({
  reducer: todoSlice.reducer,
});

export default store;