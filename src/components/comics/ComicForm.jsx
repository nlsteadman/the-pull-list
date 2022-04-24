import React, { useState, useEffect } from 'react';
import { headers } from '../../Globals';
import { baseUrl } from '../../Globals';
import { useNavigate } from 'react-router-dom';

const ComicForm = ({ addComic, addErrors, clearErrors }) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [publisher, setPublisher] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        return () => {
            clearErrors();
        }
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        const params = {
            comic: {
                name: name,
                publisher: publisher,
                description: description
            }
        }
        fetch(baseUrl + "/comics", {
            method: "POST",
            headers,
            body: JSON.stringify(params)
        })
            .then(r => r.json())
            .then(data => {
                if(data.errors) {
                    addErrors(data.errors);
                } else {
                addComic(data);
                navigate("/comics");
                }
            })
    }

  return (
    <div>
        <h1>Comic Form</h1>

        <form onSubmit={ handleSubmit }>
            <div>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" id="name" value={ name } onChange={ e => setName(e.target.value) } />
            </div>
            <div>
                <label htmlFor="description">Description: </label><br />
                <textarea name="description" id="description" cols="30" rows="10" value={ description } onChange={ e => setDescription(e.target.value) }></textarea>
            </div>
            <div>
                <label htmlFor="publisher">Publisher: </label>
                <input type="text" name="publisher" id="publisher" value={ publisher } onChange={ e => setPublisher(e.target.value) } />
            </div>
            <br />
            <input type="submit" value="Create Comic" />
        </form>
    </div>
  )
}

export default ComicForm