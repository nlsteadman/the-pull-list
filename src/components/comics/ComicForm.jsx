import React, { useState, useEffect } from 'react';
import { headers } from '../../Globals';
import { baseUrl } from '../../Globals';
import { useNavigate } from 'react-router-dom';

const ComicForm = ({ addComic, addErrors, clearErrors }) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [publisher, setPublisher] = useState("");
    const [genre, setGenre] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");
    const [rating, setRating] = useState("");
    

    const navigate = useNavigate();

    useEffect(() => {
        return () => {
            clearErrors();
        };
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        const params = {
            comic: {
                name,
                publisher,
                description,
                genre,
                image_url: image,
                price,
                rating
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
        <h1>Create Comic</h1>

        <form id="create-comic-form" onSubmit={ handleSubmit }>
            <div>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" id="name" value={ name } onChange={ e => setName(e.target.value) } />
            </div><br/>
            <div>
                <label htmlFor="description">Description: </label><br />
                <textarea name="description" id="description" cols="30" rows="10" value={ description } onChange={ e => setDescription(e.target.value) }></textarea>
            </div><br/>
            <div>
                <label htmlFor="publisher">Publisher: </label>
                <input type="text" name="publisher" id="publisher" value={ publisher } onChange={ e => setPublisher(e.target.value) } />
            </div><br/>
            <div>
                <label htmlFor="genre">Genre: </label>
                <input type="text" name="genre" id="genre" value={ genre } onChange={ e => setGenre(e.target.value) } />
            </div><br/>
            <div>
                <label htmlFor="image_url">Image URL: </label>
                <input type="text" name="image_url" id="image_url" value={ image } onChange={ e => setImage(e.target.value) } />
            </div><br/>
            <div>
                <label htmlFor="price">Price: </label>
                <input type="text" name="price" id="price" value={ price } onChange={ e => setPrice(e.target.value) } />
            </div><br/>
            <div>
                <label htmlFor="rating">Age Rating: </label>
                <input type="text" name="rating" id="rating" value={ rating } onChange={ e => setRating(e.target.value) } />
            </div>
            <br />
            <input type="submit" value="Create Comic" />
        </form><br/><br/>
    </div>
  )
}

export default ComicForm