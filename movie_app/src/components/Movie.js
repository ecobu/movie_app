import React from 'react';
import propTypes from 'prop-types';

function Movie ({title, poster, summary, rating, year}){

    return (
    <div>
        <img src={poster} alt={title}/>
        <div>{title}</div>
        <div>{year}</div>
        <div>{rating}</div>
        <div>{summary}</div>
    </div>
    );
}

Movie.propTypes = {
 poster : propTypes.string.isRequired
}

export default Movie;