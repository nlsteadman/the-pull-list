import React from 'react'
import { baseUrl, headers } from '../../Globals';
// import { Link } from 'react-router-dom';

const UserCard = ({ user, deleteUser }) => {

    const handleDelete = () => {
        fetch(baseUrl + '/users/' + user.id, {
            method: "DELETE",
            headers
        })
            .then(r => r.json())
            .then(data => {
                deleteUser(data);
            })
    }
  return (
    <div>
        <div key={ user.id } id="user-card">
            <h2>{ user.name }</h2>
            <h3>User ID: { user.id }</h3>
            <p>{ user.address }</p>
            <p>{ user.phone_number }</p>
            <p>{ user.email }</p>
            <button onClick={ handleDelete }>Delete</button>
        </div>
        <br/>
        <br/>
    </div>
  )
}

export default UserCard