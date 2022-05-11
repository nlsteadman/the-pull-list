import React from 'react';

const SelectComic = ({ comic, onChange }) => {
    
    const handleClick = e => {
        onChange(e.target.value)
        }


  return (
    <option className="dropdown-content" onSelect={ handleClick } value={ comic.id }>
        { comic.name }
    </option>
  )
}

export default SelectComic;