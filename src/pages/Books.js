import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import AddBook from '../components/AddBook';
import Book from '../components/Book';
import '../css/books.css';

export default function Books() {
  const books = useSelector((state) => state.booksStore.books);
  return (
    <main>
      <ul className="booksList">
        {
          books.map((book) => (
            <Book
              key={uuidv4()}
              id={book.id}
              title={book.title}
              author={book.author}
              category={book.category}
            />
          ))
        }
      </ul>
      <AddBook />
    </main>
  );
}
