import React from 'react'
import Error from './Error';

const ErrorList = ({errors}) => {
    const errorCards = errors.map((error, idx) => <Error key={idx} error={ error }/>)
  return (
    <ul>
        { errorCards }
    </ul>
  )
}

export default ErrorList