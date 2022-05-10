import React, { useState } from 'react';
import { headers } from '../../Globals';
import { baseUrl } from '../../Globals';

const SelectComic = ({ comic }) => {
    const [id, setId] = useState("");
    const [comics, setComics] = useState([]);

    const addComicOption = comic => {
        setComics([...comics, comic]);
      }

    const handleClick = e => {
        e.preventDefault();
        const params = {
            comic: {
                comic_id: id
            }
        }

        fetch(baseUrl + "/user_comics", {
            method: "POST",
            headers,
            body: JSON.stringify(params)
        })
            .then(r => r.json())
            .then(data => {
                addComicOption(data);
            })
    }
  return (
    <div onClick={ handleClick }>
        { comic.name }
    </div>
  )
}

export default SelectComic;