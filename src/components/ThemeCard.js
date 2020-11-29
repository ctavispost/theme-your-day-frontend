import React from 'react';

const ThemeCard = (props) => {
    return(
        <article className="GameCard">
            <h2>{ props.name }</h2>
            <img src={ props.image } alt="{ props.name } art"/>
        </article>
    )
};

export default ThemeCard;