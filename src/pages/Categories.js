import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus, CHECK_STATUS } from '../redux/categories/categories';
import '../css/category.css';

export default function Categories() {
  const categories = useSelector((state) => state.categoriesStore.categories);
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(
      checkStatus({
        type: CHECK_STATUS,
      }),
    );
  };
  return (
    <section className="categorySection flex">
      <h2>{categories}</h2>
      <button type="submit" onClick={clickHandler}>Check status</button>
    </section>
  );
}
