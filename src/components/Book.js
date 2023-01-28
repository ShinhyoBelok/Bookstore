import React from 'react';
import { string } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import '../css/book.css';

export default function Book(props) {
  const {
    title, author, id, category,
  } = props;
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
    <li className="book flex">
      <section className="bookInfo">
        <h5 className="RobotoFont">{category}</h5>
        <h3>{title}</h3>
        <h4>{author}</h4>
        <section className="btnBook flex">
          <button type="submit">Comments</button>
          <div className="btnDiv" />
          <button type="submit" id={id} onClick={clickHandler}>Remove</button>
          <div className="btnDiv" />
          <button type="submit">Edit</button>
        </section>
      </section>
      <section className="bookProgress flex">
        <div className="progress flex">
          <div className="progressCircle" />
          <div className="progressText">
            <p className="text">
              75%
            </p>
            <p className="progressStatus">Completed</p>
          </div>
        </div>
        <div className="currentChapter flex">
          <p className="currentChapterTitle">CURRENT CHAPTER</p>
          <p>Chapter X</p>
          <button type="submit">UPDATE PROGRESS</button>
        </div>
      </section>
    </li>
  );
}

Book.propTypes = {
  title: string.isRequired,
  author: string.isRequired,
  id: string.isRequired,
  category: string.isRequired,
};
