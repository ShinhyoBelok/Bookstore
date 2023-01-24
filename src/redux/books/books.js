import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const bookSlice = createSlice({
  name: 'book',
  initialState: {
    books: [
      { title: 'test1', author: 'author1', key: uuidv4() },
      { title: 'test2', author: 'author2', key: uuidv4() },
      { title: 'test3', author: 'author3', key: uuidv4() },
    ],
  },
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        title: action.payload.title,
        author: action.payload.author,
      };
      return [...state, newBook];
    },
    removeBook: (state, action) => {
      const index = state.map((book) => book.key).indexOf(action.payload.key);
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1),
      ];
    },
  },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
