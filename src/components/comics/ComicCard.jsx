import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { baseUrl, headers } from '../../Globals';
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
        <li key={ comic.id } id="comic-info">
            <img onClick={handleClick} src={ comic.image_url } alt={ comic.name } />
            { visibleDetails ? <ComicInfo comic={ comic } /> : ""}
            <h2>{ comic.name }</h2>
            <p>{ comic.publisher }</p>
            { comic.users ? <p><Link to={`/comics/${comic.id}`}>Click here to see list of subscribers</Link></p> : null }
            <button onClick={ handleDelete }>Delete Title</button>
        </li>
    </div>
  )
}

export default ComicCard;