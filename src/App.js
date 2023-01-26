import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Books from './pages/Books';
import Categories from './pages/Categories';
import Navbar from './components/Navbar';
import { getBooks } from './redux/books/books';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}
