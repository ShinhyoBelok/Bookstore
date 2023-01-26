import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
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
  async (bookRequest) => {
    const books = await axios.post(baseUrl + endPoints.books, bookRequest);
    return { respond: books.data, bookRequest };
  },
);

export const removeBook = createAsyncThunk(
  'book/removeBook',
  async (item) => {
    const respond = await axios.delete(baseUrl + endPoints.books + item.id);
    return { respond: respond.data, id: item.id };
  },
);

const bookSlice = createSlice({
  name: 'book',
  initialState: {
    books: [],
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(addBook.fulfilled, (state, action) => {
        const newBook = {
          id: action.payload.bookRequest.item_id,
          title: action.payload.bookRequest.title,
          author: action.payload.bookRequest.author,
          category: action.payload.bookRequest.category,
        };
        return { books: [...state.books, newBook] };
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        const index = state.books.map((book) => book.id).indexOf(action.payload.id);
        return { books: [...state.books.slice(0, index), ...state.books.slice(index + 1)] };
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        let books = Object.entries(action.payload).map(([id, book]) => ({
          id, ...book[0],
        }));
        books = books.sort((a, b) => {
          if (a.title > b.title) {
            return 1;
          }
          if (a.title < b.title) {
            return -1;
          }
          return 0;
        });
        return { books: [...books] };
      });
  },
});

export default bookSlice.reducer;
