import React, { useState } from 'react';

const SearchComic = ({ onSearch }) => {
    const [currentSearch, setCurrentSearch] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        onSearch(currentSearch);
    }

    const handleChange = e => {
        setCurrentSearch(e.target.value);
    }
  return (
    <div>
        <form action="/search" method="get" onSubmit={ handleSubmit }>
            <label htmlFor="search">Search Title/Publisher/Genre/Age Rating    </label>
            <input
                id="search"
                type="text"
                value={ currentSearch }
                onChange={ handleChange }
            />
            <button type="submit">Search</button>
        </form>
    </div>
  );
}

export default SearchComic;