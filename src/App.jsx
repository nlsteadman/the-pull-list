import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from "./components/navigation/Navbar";
import Home from "./components/static/Home";
import ComicList from "./components/comics/ComicList";
import ComicForm from "./components/comics/ComicForm";
import UserList from "./components/users/UserList";
import UserForm from "./components/users/UserForm";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { baseUrl } from './Globals';
import ErrorList from './components/errors/ErrorList';
import Users from './components/users/Users';
import Comics from './components/comics/Comics';
import UserUpdate from './components/users/UserUpdate';

const App = () => {
  const [comics, setComics] = useState([]);
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState(false);

  useEffect(() => {
    fetch(baseUrl + '/comics')
    .then(r => r.json())
    .then(data => setComics(data))
  }, [])

  useEffect(() => {
    fetch(baseUrl + '/users')
    .then(r => r.json())
    .then(data => setUsers(data))
  }, [])

  const addComic = comic => {
    setComics([...comics, comic]);
  }

  const deleteComic = comic => {
    setComics(comics.filter(c => c.id !== comic.id))
  }

  const addUser = user => {
    setUsers([...users, user]);
  }

  const deleteUser = user => {
    setUsers(users.filter(u => u.id !== user.id))
  }

  const handleSearch = (newSearch) => {
    setSearch(newSearch)
  }

  const handleSort = () => {
    setSortBy(!sortBy)
  }

  const addErrors = errors => {
    setErrors(errors);
  }

  const clearErrors = () => {
    setErrors([]);
  }

  const displayedComics = sortBy ? [...comics].sort((a, b) => 
  a.name.localeCompare(b.name)) : comics

  return (
    <Router>
      <Navbar />
      <ErrorList errors={ errors } /> 
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/comics" element={ <ComicList comics = { displayedComics } deleteComic={ deleteComic} search={ search } onSearch={ handleSearch } onSort={ handleSort } />} />
        <Route path="/comics/new" element={ <ComicForm addComic={ addComic } addErrors={ addErrors } clearErrors={ clearErrors } />} />
        <Route path="/users" element={ <UserList users={ users } deleteUser={ deleteUser } />} />
        <Route path="/users/new" element={ <UserForm addUser={ addUser } addErrors={ addErrors } clearErrors={ clearErrors } />} />
        <Route path="/comics/:id" element={ <Users deleteComic={ deleteComic}/>} />
        <Route path="/users/:id" element={ <Comics />} />
        <Route path="/users/update/:id" element={ <UserUpdate />} />
      </Routes>
    </Router>
  );
}

export default App;
