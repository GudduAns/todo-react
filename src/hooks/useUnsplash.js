import React from 'react'

const UseUnsplash = ({ getData }) => {
    return (
        <img src={`https://api.unsplash.com/search/photos?query=${getData}&client_id=EdmGGsea1qu502jEW5dvBmix6kXzXqPoa0duFi02qDY`} />
    )
}

export default UseUnsplash
