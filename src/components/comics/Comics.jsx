import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import UserComicCard from './UserComicCard';
import SelectComic from './SelectComic';
import { baseUrl, headers } from '../../Globals';

const Comics = () => {
    const [user, setUser] = useState({ comics: [] });
    const { id } = useParams()
    const [comics, setComics] = useState([]);
    const [userComics, setUserComics] = useState([]);

    useEffect(() => {
        fetch(baseUrl + '/user_comics')
            .then(r => r.json())
            .then(data => setUserComics(data))
      }, [])

    useEffect(() => {
        fetch(baseUrl + '/users/' + id)
            .then(r => r.json())
            .then(data => setUser(data))
    }, [id])

    const comicCard = user.comics.map(comic => {
        return <UserComicCard 
            comic={ comic }
            user={ user }
            setUser={ setUser }
            userComics={ userComics }
            setUserComics={ setUserComics }
            key={ comic.id }
        />
    })

    const handleChange = (e) => {
        const userObject = {
            user_comic: {
                "quantity": "1", 
                "user_id": id,
                "comic_id": e.target.value
                }
            }

        fetch( baseUrl + "/user_comics", {
            method: "POST",
            headers,
            body: JSON.stringify(userObject)
        })
            .then(r => r.json())
            .then(data => {
                setUser({
                    ...user,
                    comics: [data.comic, ...user.comics]
                })
            })
        }

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


  return (
    <div>
        <h1>{user.name} Subscriptions</h1>
        <div id="subscription">
            <div className="dropdown">
                <select defaultValue="Add title to customer" className="dropbtn" onChange={ handleChange } >
                    { comicSelect }
                </select>
            </div>
            { comicCard }
        </div>
    </div>
  )
}
export default Comics;