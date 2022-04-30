import React, { useState } from 'react'
import { baseUrl, headers } from '../../Globals';
// import { Link } from 'react-router-dom';
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
    <div>
        <div key={ comic.id } id="comic-info">
            <img onClick={handleClick} src={ comic.image_url } alt={ comic.name } />
            { visibleDetails ? <ComicInfo comic={ comic } /> : ""}
            <h2>{ comic.name }</h2>
            <p>{ comic.publisher }</p>
            <button onClick={ handleDelete }>Delete</button>
        </div>
        <br/>
        <br/>
    </div>
  )
}

export default ComicCard