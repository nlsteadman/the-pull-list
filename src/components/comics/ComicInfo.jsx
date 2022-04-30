import React from 'react';

const ComicInfo = ({ comic }) => {
  return (
    <div>
        <h2>{ comic.name }</h2>
        <p>{ comic.publisher }</p>
        <p>{ comic.description }</p>
        <p>{ comic.genre }</p>
        <p>{ comic.price }</p>
        <p>{ comic.rating }</p>
    </div>
  )
}

export default ComicInfo;