import React from 'react';
import ComicCard from './ComicCard';
import SearchComic from './SearchComic';

const ComicList = ({ comics, deleteComic, search, onSearch }) => {

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
      <SearchComic onSearch={ onSearch } />
      <div id="comic-card">
          <h1>Available Comic Series</h1>
          <h2>Click image to see more information</h2>
          <ul>
              { comicCards }
          </ul>
      </div>
    </div>
  )
}

export default ComicList;