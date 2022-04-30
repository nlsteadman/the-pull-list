import React from 'react';
import ComicCard from './ComicCard';

const ComicList = ({comics, deleteComic}) => {

    const comicCards = comics.map(comic => <ComicCard comic={ comic } key={ comic.id } deleteComic={ deleteComic }/>)
  return (
    <div>
        <h1>Available Comic Series</h1>
        <h3>Click image to see more information</h3>
        <ul>
            { comicCards }
        </ul>
    </div>
  )
}

export default ComicList