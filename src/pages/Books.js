import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddBook from '../components/AddBook';
import Book from '../components/Book';

export default function Books() {
  const testData = [
    {
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
    },

    {
      title: 'Dune',
      author: 'Frank Herbert',
    },
  ];
  return (
    <main>
      <ul className="booksList">
        {
          testData.map((book) => (
            <Book
              key={uuidv4}
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
