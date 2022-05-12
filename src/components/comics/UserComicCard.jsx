import React, { useState } from 'react'
import { baseUrl, headers } from '../../Globals';
import ComicInfo from "./ComicInfo";

const UserComicCard = ({ comic, userComics, setUserComics, setUser }) => {
    const [visibleDetails, setVisibleDetails] = useState(false);


    const handleClick = () => {
        setVisibleDetails(!visibleDetails)
    }

    const handleDelete = () => {
        fetch(baseUrl + '/user_comics/' + userComics.id, {
            method: "DELETE",
            headers
        })
            .then(r => r.json())
            .then(data => {
                console.log(data)
                setUser(userComics.filter(u => u.id !== userComics.id))
            })
    }

  return (
    <div>
        <li key={ comic.id } id="comic-info">
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