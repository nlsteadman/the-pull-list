import React from 'react'

const ComicCard = ({ comic }) => {
  return (
    <div>
        <h3>{ comic.name }</h3>
        <p>{ comic.publisher }</p>
        <button>Delete</button>
    </div>
  )
}

export default ComicCard