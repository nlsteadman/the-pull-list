import React, { useState, useEffect } from 'react'
import { baseUrl } from '../../Globals';
import { useParams } from 'react-router-dom';
import ComicCard from './ComicCard';
import SelectComic from './SelectComic';

const Comics = ({ deleteComic }) => {
    const [user, setUser] = useState({ comics: [] });
    const [comicOptions, setComicOptions] = useState([]);
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
    useEffect(() => {
        fetch(baseUrl + '/comics')
            .then(r => r.json())
            .then(data => setComicOptions(data))
    }, [])

    const comicSelect = comicOptions.map(comic => 
        <SelectComic
            comic={ comic }
            key={ comic.id }
        />
        )

  return (
    <div>
        <h1>{user.name} Subscriptions</h1>
        <div id="subscription">
            <div className="dropdown">
                <button className="dropbtn">Add title to customer</button>
                <div className="dropdown-content">
                    { comicSelect }
                </div>
            </div>
            { comicCard }
        </div>
    </div>
  )
}
export default Comics;