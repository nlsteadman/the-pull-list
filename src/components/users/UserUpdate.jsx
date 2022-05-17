import React, { useState } from 'react'
import { baseUrl, headers } from '../../Globals';

const UserUpdate = (user, onChange, onEdit ) => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const handleChange = e => {
        onChange(e.target.name, e.target.value)
    }


    const handleSubmit = e => {
        e.preventDefault();
        const params = {
            user: {
                name,
                address,
                phone_number: phone,
                email
            }
        }
        fetch(baseUrl + "/users/" + user.id, {
            method: "PATCH",
            headers,
            body: JSON.stringify(params)
        })
            .then(r => r.json())
            .then(onEdit)
    }

  return (
    <div>
        <h1>Edit Customer</h1>

        <form id="create-user-form" onSubmit={ handleSubmit }>
            <div>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" id="name" value={ name } onChange={ e => setName(e.target.value) } />
            </div><br/>
            <div>
                <label htmlFor="address">Address: </label><br />
                <textarea name="address" id="address" cols="30" rows="10" value={ address } onChange={ e => setAddress(e.target.value) }></textarea>
            </div><br/>
            <div>
                <label htmlFor="phone_number">Phone Number: </label>
                <input type="text" name="phone_number" id="phone_number" value={ phone } onChange={ e => setPhone(e.target.value) } />
            </div><br/>
            <div>
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="email" value={ email } onChange={ e => setEmail(e.target.value) } />
            </div><br/>
            <br />
            <input type="submit" value="Edit Customer" />
        </form><br/><br/>
    </div>
  )
}

export default UserUpdate