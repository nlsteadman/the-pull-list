import React, { useState } from 'react'
import { baseUrl, headers } from '../../Globals';
import ComicInfo from "./ComicInfo";

const UserComicCard = ({ comic, user, setUser, userComics, setUserComics }) => {
    const [visibleDetails, setVisibleDetails] = useState(false);


    const handleClick = () => {
        setVisibleDetails(!visibleDetails)
    }
    

    const handleDelete = () => {
        let deleteUserComic = userComics.find(userComic => {
            return userComic.comic.id === comic.id && userComic.user.id === user.id
        })

        let updatedComics = user.comics.filter(comic => comic.id !== deleteUserComic.comic.id)
            setUser({...user, comics: updatedComics})

        fetch(baseUrl + '/user_comics/' + deleteUserComic.id, {
            method: "DELETE",
            headers
        })
            .then(r => r.json())
            .then(updatedComics)
    }

  return (
    <div>
        <li key={ comic.id } id="comic-info" value={ comic.id }>
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