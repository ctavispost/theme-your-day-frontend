import React from 'react';

const ActCard = (props) => {
    return(
        <article className="ActCard">
            <h2>{ props.title }</h2>
            <img src={ props.image } alt="{ props.title } art"/>
            <p>{ props.description }</p>
        </article>
    )
};

export default ActCard;