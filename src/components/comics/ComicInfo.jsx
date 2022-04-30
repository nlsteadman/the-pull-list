import React from 'react';

const ComicInfo = ({ comic }) => {
  return (
    <div>
        <p>Description: { comic.description }</p>
        <p>Genre: { comic.genre }</p>
        <p>Age Rating: { comic.rating }</p>
        <p>Price: ${ comic.price }</p>
    </div>
  )
}

export default ComicInfo;