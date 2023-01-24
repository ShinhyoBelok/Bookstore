import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const store = configureStore({
  reducer: {
    booksStore: booksReducer,
    categoriesStore: categoriesReducer,
  },
});

export default store;
