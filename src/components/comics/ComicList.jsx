import React from 'react';
import ComicCard from './ComicCard';

const ComicList = ({comics}) => {

    const comicCards = comics.map(comic => <ComicCard comic={ comic } key={ comic.id } />)
  return (
    <div>
        <h1>Comic List</h1>
        <ul>
            { comicCards }
        </ul>
    </div>
  )
}

export default ComicList