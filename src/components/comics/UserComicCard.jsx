import React, { useState } from 'react'
import { baseUrl, headers } from '../../Globals';
import ComicInfo from "./ComicInfo";

const UserComicCard = ({ comic, userComics, setUserComics }) => {
    const [visibleDetails, setVisibleDetails] = useState(false);


    const handleClick = () => {
        setVisibleDetails(!visibleDetails)
    }

    const handleDelete = (userComic) => {
        fetch(baseUrl + '/user_comics/' + userComic.id, {
            method: "DELETE",
            headers
        })
            .then(r => r.json())
            .then(data => {
                setUserComics(userComics.filter(u => u.id !== userComic.id))
            })
    }

  return (
    <div>
        <li key={ userComics.id } id="comic-info" value={ userComics.id }>
            <img onClick={handleClick} src={ comic.image_url } alt={ comic.name } />
            { visibleDetails ? <ComicInfo comic={ comic } /> : ""}
            <h2>{ comic.name }</h2>
            <p>{ comic.publisher }</p>
            <button onClick={ handleDelete }>Remove title from Customer</button>
        </li>
    </div>
  )
}

export default UserComicCard;