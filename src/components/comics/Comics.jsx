import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ComicCard from './ComicCard';
import SelectComic from './SelectComic';
import { baseUrl, headers } from '../../Globals';

const Comics = ({ deleteComic }) => {
    const [user, setUser] = useState({ comics: [] });
    const { id } = useParams()
    const [comics, setComics] = useState([]);


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
            .then(data => setComics(data))
    }, [])

    const comicSelect = comics.map(comic => 
        <SelectComic
            comic={ comic }
            key={ comic.id }
        />
        )

    const handleChange = (e) => {
        const userObject = {comic_id: e.target.value, user_id: id }
        
        fetch( baseUrl + "/user_comics", {
            method: "POST",
            headers,
            body: JSON.stringify()
        })
            .then(r => r.json())
            .then(data => {
                setComics(userObject);
            })
        }
  return (
    <div>
        <h1>{user.name} Subscriptions</h1>
        <div id="subscription">
            <div className="dropdown">
                <button className="dropbtn">Add title to customer</button>
                <select onChange={ handleChange } className="dropdown-content">
                    { comicSelect }
                </select>
            </div>
            { comicCard }
        </div>
    </div>
  )
}
export default Comics;