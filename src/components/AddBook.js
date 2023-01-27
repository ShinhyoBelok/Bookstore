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
    const category = event.target.querySelector('#category');
    dispatch(addBook({
      item_id: uuidv4(),
      title: title.value,
      author: author.value,
      category: category.value,
    }));
    title.value = '';
    author.value = '';
    category.value = 'select category';
  };
  return (
    <section>
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={submit}>
        <input id="inTitle" type="text" placeholder="Book title" />
        <input id="inAuthor" type="text" placeholder="Author" />
        <select id="category" defaultValue="Select category">
          <option value="Select category" selected disabled>Select category</option>
          <option value="Adventure">Adventure</option>
          <option value="Horror">Horror</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Fiction">Fiction</option>
          <option value="Accion">Accion</option>
          <option value="Comedy">Comedy</option>
          <option value="Romance">Romance</option>
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
    </section>
  );
}
