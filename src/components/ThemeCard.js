import React from 'react';

const ThemeCard = (props) => {
    <article className="GameCard">
        <h2>{ props.name }</h2>
        <img src={ props.image } alt="{ props.title } art"/>
    </article>
}

export default ThemeCard;