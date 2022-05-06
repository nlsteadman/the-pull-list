import React, { useState, useEffect } from 'react'
import { baseUrl } from '../../Globals';
import { useParams } from 'react-router-dom';
import ComicCard from './ComicCard';

const Comics = ({ deleteComic }) => {
    const [user, setUser] = useState({ comics: [] });
    const { id } = useParams()

    useEffect(() => {
        fetch(baseUrl + '/users/' + id)
            .then(r => r.json())
            .then(data => setUser(data))
    }, [id])

    const comicCard = user.comics.map(comic => {
        return <ComicCard 
            comic={ comic } 
            key={ comic.id } 
            deleteComic={ deleteComic }
        />
    })

  return (
    <div>
        <h1>{user.name} Subscriptions</h1>
        { comicCard }
    </div>
  )
}
export default Comics