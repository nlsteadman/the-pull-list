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
        <div id="subscription">
            <div className="dropdown">
                <button className="dropbtn">Add title to customer</button>
                <div className="dropdown-content">
                    <p>item 1</p>
                    <p>item 2</p>
                    <p>item 3</p>
                </div>
            </div><br/><br/>
            { comicCard }
        </div>
    </div>
  )
}
export default Comics