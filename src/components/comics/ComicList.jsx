import React from 'react';
import ComicCard from './ComicCard';
import SearchComic from './SearchComic';

const ComicList = ({ comics, deleteComic, search, onSearch, onSort }) => {

    const filteredComics = comics.filter(comic => {

      if (comic.name.toLowerCase().includes(search.toLowerCase())){
        return comic
      }
      if (comic.genre && comic.genre.toLowerCase().includes(search.toLowerCase())){
        return comic
      }
      if (comic.rating && comic.rating.toLowerCase().includes(search.toLowerCase())){
        return comic
      }
      if (comic.publisher && comic.publisher.toLowerCase().includes(search.toLowerCase())){
        return comic
      }
      else {
        return comic
      }
    });

    const comicCards = filteredComics.map((comic) => 
      <ComicCard 
        comic={ comic } 
        key={ comic.id } 
        deleteComic={ deleteComic }
      />
    )

  return (
    <div>
      <div id="comic-card">
          <h1>Available Comic Series</h1>
          <p id="cover">Click cover to see more information</p>
          <SearchComic onSearch={ onSearch } /><br/>
          <label id="sort">
          Sort Alphabetically
            <input
              type="checkbox"
              name="sort"
              onClick={ onSort }
            />
          </label>
          <div class="table">
            <ul id="list-container">
                { comicCards }
            </ul>
          </div>
      </div>
    </div>
  )
}

export default ComicList;