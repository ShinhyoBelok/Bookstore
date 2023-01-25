import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const bookSlice = createSlice({
  name: 'book',
  initialState: {
    books: [
      {
        title: 'test1', author: 'author1', key: 'k1', id: '1',
      },
      {
        title: 'test2', author: 'author2', key: 'k2', id: '2',
      },
      {
        title: 'test3', author: 'author3', key: 'k3', id: '3',
      },
    ],
  },
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        key: uuidv4(),
        id: uuidv4(),
        title: action.payload.title,
        author: action.payload.author,
      };
      return { books: [...state.books, newBook] };
    },
    removeBook: (state, action) => {
      const index = state.books.map((book) => book.id).indexOf(action.payload.id);
      return { books: [...state.books.slice(0, index), ...state.books.slice(index + 1)] };
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
