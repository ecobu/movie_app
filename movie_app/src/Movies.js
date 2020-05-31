import React from 'react';
import PropTypes from 'prop-types';

function Movies ({id, year, summary, title, poster}) {
    return (
        <li key={id}>
            {title}
            {year}
            {summary}
            <img src={poster} alt={title}/>
        </li>
        
    );
}

Movies.propTypes = {
    id : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired
};

export default Movies;