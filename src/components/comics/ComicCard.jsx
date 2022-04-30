import React, { useState } from 'react'
import { baseUrl, headers } from '../../Globals';
import { Link } from 'react-router-dom';
import ComicInfo from "./ComicInfo";

const ComicCard = ({ comic, deleteComic }) => {
    const [visibleDetails, setVisibleDetails] = useState(false);

    const handleClick = () => {
        setVisibleDetails(!visibleDetails)
    }

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
    <div key={ comic.id } id="comic-info">
        <img onClick={handleClick} src={ comic.image_url } alt={ comic.name } />
        { visibleDetails ? <ComicInfo comic={ comic } /> : ""}
        <h3>{ comic.name }</h3>
        <p>{ comic.publisher }</p>
        <button onClick={ handleDelete }>Delete</button>
    </div>
  )
}

export default ComicCard