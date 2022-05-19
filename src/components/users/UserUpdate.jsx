import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { baseUrl, headers } from '../../Globals';
import { useNavigate } from 'react-router-dom';

const UserUpdate = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        fetch(baseUrl + '/users/' + id)
        .then(r => r.json())
        .then(data => setUser(data))
      }, [id]);

    const handleSubmit = e => {
        e.preventDefault();
        const params = {
            user: {
                name: name,
                address: address,
                phone_number: phone,
                email: email
            }
        }

        fetch(baseUrl + "/users/" + id, {
            method: "PATCH",
            headers,
            body: JSON.stringify(params)
        })
            .then(r => r.json())
            .then((data) => setUser({...user, user: data}))
            navigate("/users");
    }

  return (
    <div>
        <h1>Edit {user.name}'s Info</h1>

        <form id="create-user-form" onSubmit={ handleSubmit }>
            <div>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" id="name" placeholder={ user.name } value={name} onChange={ e => setName(e.target.value) } />
            </div><br/>
            <div>
                <label htmlFor="address">Address: </label><br />
                <textarea name="address" id="address" cols="30" rows="10" placeholder={ user.address } value={ address } onChange={ e => setAddress(e.target.value) }></textarea>
            </div><br/>
            <div>
                <label htmlFor="phone_number">Phone Number: </label>
                <input type="text" name="phone_number" id="phone_number" placeholder={ user.phone_number } value={ phone } onChange={ e => setPhone(e.target.value) } />
            </div><br/>
            <div>
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="email" placeholder={ user.email } value={ email } onChange={ e => setEmail(e.target.value) } />
            </div><br/>
            <br />
            <input type="submit" value="Edit Customer" />
        </form><br/><br/>
    </div>
  )
}

export default UserUpdate