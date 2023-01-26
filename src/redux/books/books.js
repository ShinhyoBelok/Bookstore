import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { baseUrl, endPoints } from '../../API';

export const getBooks = createAsyncThunk(
  'books/getBooks',
  async () => {
    const books = await axios.get(baseUrl + endPoints.books);
    return books.data;
  },
);

export const addBook = createAsyncThunk(
  'books/addBook',
  async (newBook) => {
    const books = await axios.post(baseUrl + endPoints.books, newBook);
    return { respond: books.data, newBook };
  },
);

export const removeBook = createAsyncThunk(
  'book/removeBook',
  async (item) => {
    const respond = await axios.delete(baseUrl + endPoints.books + item.item_id);
    return { respond, item_id: item.item_id};
  },
);

const bookSlice = createSlice({
  name: 'book',
  initialState: {
    books: [],
  },
  reducers: {
    // removeBook: (state, action) => {
    //   const index = state.books.map((book) => book.id).indexOf(action.payload.id);
    //   return { books: [...state.books.slice(0, index), ...state.books.slice(index + 1)] };
    // },
    // booksInit: (state, action) => ({ books: [...state.books, ...action.payload] }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(addBook.fulfilled, (state, action) => {
        return { books: [...state.books, action.payload.newBook] };
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        const index = state.books.map((book) => book.item_id).indexOf(action.payload.item_id);
        return { books: [...state.books.slice(0, index), ...state.books.slice(index + 1)] };
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        const books = Object.entries(action.payload).map(([item_id, book]) => ({ item_id, ...book[0] }));
        return { books: [...books] };
      })
  },
});

export default bookSlice.reducer;
