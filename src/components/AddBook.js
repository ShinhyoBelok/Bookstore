import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

export default function AddBook() {
  const dispatch = useDispatch();
  const submit = (event) => {
    event.preventDefault();
    const title = event.target.querySelector('#inTitle');
    const author = event.target.querySelector('#inAuthor');
    dispatch(addBook({
      item_id: uuidv4(),
      title: title.value,
      author: author.value,
      category: 'unknow',
    }));
    title.value = '';
    author.value = '';
  };
  return (
    <section>
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={submit}>
        <input id="inTitle" type="text" placeholder="Book title" />
        <input id="inAuthor" type="text" placeholder="Author" />
        <button type="submit">ADD BOOK</button>
      </form>
    </section>
  );
}
