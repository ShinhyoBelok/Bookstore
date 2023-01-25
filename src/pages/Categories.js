import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus, CHECK_STATUS } from '../redux/categories/categories';

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
    <div>
      <h2>{categories}</h2>
      <button type="submit" onClick={clickHandler}>Check status</button>
    </div>
  );
}
