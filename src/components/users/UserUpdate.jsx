import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { baseUrl, headers } from '../../Globals';

const UserUpdate = (selectedUser, onChange, onEdit ) => {
    const { id } = useParams();
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch(baseUrl + '/users/' + id)
        .then(r => r.json())
        .then(data => setUser(data))
      }, [id]);

    const handleChange = e => {
        onChange(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        const params = {
            user: {
                name: user.name,
                address: user.address,
                phone_number: user.phone_number,
                email: user.email
            }
        }

        fetch(baseUrl + "/users/" + id, {
            method: "PATCH",
            headers,
            body: JSON.stringify(params)
        })
            .then(r => r.json())
            .then(onEdit)
    }

  return (
    <div>
        <h1>Edit {user.name}'s Info</h1>

        <form id="create-user-form" onSubmit={ handleSubmit }>
            <div>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" id="name" value={user.name} onChange={ handleChange } />
            </div><br/>
            <div>
                <label htmlFor="address">Address: </label><br />
                <textarea name="address" id="address" cols="30" rows="10" value={ user.address } onChange={ handleChange }></textarea>
            </div><br/>
            <div>
                <label htmlFor="phone_number">Phone Number: </label>
                <input type="text" name="phone_number" id="phone_number" value={ user.phone_number } onChange={ handleChange } />
            </div><br/>
            <div>
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="email" value={ user.email } onChange={ handleChange } />
            </div><br/>
            <br />
            <input type="submit" value="Edit Customer" />
        </form><br/><br/>
    </div>
  )
}

export default UserUpdate