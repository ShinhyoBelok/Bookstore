import React from 'react';
import { useSelector } from 'react-redux';
import AddBook from '../components/AddBook';
import Book from '../components/Book';

export default function Books() {
  const books = useSelector((state) => state.booksStore.books);
  return (
    <main>
      <ul className="booksList">
        {
          books.map((book) => (
            <Book
              key={book.key}
              title={book.title}
              author={book.author}
            />
          ))
        }
      </ul>
      <AddBook />
    </main>
  );
}
