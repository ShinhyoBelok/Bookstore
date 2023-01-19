import React from 'react'
import AddBook from '../components/AddBook'
import Book from '../components/Book'

export default function Books() {
  const testData = [
    {
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
    },

    {
      title: 'Dune',
      author: 'Frank Herbert',
    }
  ];
  return (
    <main>
      <ul className="booksList">
        {
          testData.map((book) => (
            <Book 
              title={book.title}
              author={book.author}
            />
          ))
        }
      </ul>
      <AddBook />
    </main>
  )
}
