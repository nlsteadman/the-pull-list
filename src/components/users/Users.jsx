import React, { useState, useEffect } from 'react'
import { baseUrl } from '../../Globals';
import { useParams } from 'react-router-dom';
import UserCard from './UserCard';

const Users = ({ deleteUser }) => {
    const [comic, setComic] = useState({ users: [] });
    const { id } = useParams()

    useEffect(() => {
        fetch(baseUrl + '/comics/' + id)
            .then(r => r.json())
            .then(data => setComic(data))
    }, [id])

    const userCards = comic.users.map(user => {
        return <UserCard 
            user={ user } 
            key={ user.id } 
            deleteUser={ deleteUser }
        />
    })

  return (
    <div>
        <h1>{comic.name} Subscribers</h1>
        { userCards }
    </div>
  )
}

export default Users;