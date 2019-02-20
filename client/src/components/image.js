import React from 'react'

export default ({ image }) => {
    return (
        <a href={image.urls.full}>
            <img className="single-photo" src={image.urls.thumb} alt={image.description} />
        </a>
    )
};
