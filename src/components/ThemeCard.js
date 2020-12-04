import React from 'react';

const ThemeCard = (props) => {
    return(
        <article className="ThemeCard">
            <h3 className="margTwoRem">{ props.name }</h3>
            <img src={ props.image } alt="{ props.name } art"/>
        </article>
    )
};

export default ThemeCard;