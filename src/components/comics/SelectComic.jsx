import React from 'react';

const SelectComic = ({ comic, onChange }) => {
    
    const handleClick = e => {
        
        }


  return (
    <option onSelect={ handleClick } value={ comic.id }>
        { comic.name }
    </option>
  )
}

export default SelectComic;