import React from 'react'
import { baseUrl, headers } from '../../Globals';
import { Link } from 'react-router-dom';

const ComicCard = ({ comic, deleteComic }) => {

    const handleDelete = () => {
        fetch(baseUrl + '/comics/' + comic.id, {
            method: "DELETE",
            headers
        })
            .then(r => r.json())
            .then(data => {
                deleteComic(data);
            })
    }

  return (
    <div>
        <h3>{ comic.name }</h3>
        <p>{ comic.publisher }</p>
        <button onClick={ handleDelete }>Delete</button>
    </div>
  )
}

export default ComicCard