import React from 'react';
import { string } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

export default function Book(props) {
  const { title, author, id } = props;
  const dispatch = useDispatch();
  const clickHandler = (event) => {
    const { id } = event.target;
    dispatch(
      removeBook({
        id,
      }),
    );
  };
  return (
    <li className="book">
      <section>
        <div>
          <h3>{title}</h3>
          <h4>{author}</h4>
          <button type="submit" id={id} onClick={clickHandler}>Remove</button>
        </div>
      </section>
    </li>
  );
}

Book.propTypes = {
  title: string.isRequired,
  author: string.isRequired,
  id: string.isRequired,
};
