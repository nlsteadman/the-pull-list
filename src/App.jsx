import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from "./components/navigation/Navbar";
import Home from "./components/static/Home";
import ComicList from "./components/comics/ComicList";
import ComicForm from "./components/comics/ComicForm";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { baseUrl } from './Globals';
import ErrorList from './components/errors/ErrorList';

const App = () => {
  const [comics, setComics] = useState([]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    fetch(baseUrl + '/comics')
    .then(r => r.json())
    .then(data => setComics(data))
  }, [])

  const addComic = comic => {
    setComics([...comics, comic]);
  }

  const addErrors = errors => {
    setErrors(errors);
  }

  const clearErrors = () => {
    setErrors([]);
  }

  return (
    <Router>
      <Navbar />
      <ErrorList errors={ errors } /> 
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/comics" element={ <ComicList comics = { comics } />} />
        <Route path="/comics/new" element={ <ComicForm addComic={ addComic } addErrors={ addErrors } clearErrors={ clearErrors } />} />
      </Routes>
    </Router>
  );
}

export default App;
