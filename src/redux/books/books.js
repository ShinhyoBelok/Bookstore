import { v4 as uuidv4 } from 'uuid';
import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
  name: 'book',
  initialState: {books: []},
  reducers: {
    addBook: (state, action) => { 
      const newBook = {
        title: action.payload.title, 
        author: action.payload.author, 
        id: uuidv4
      };
      return state.push(newBook);
    },
    removeBook: (state, action) => {
      return state.filter((book) => book.id !== action.payload.id);
    },
  }
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;