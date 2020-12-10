import React from 'react';

const ThemeCard = (props) => {
    return(
        <article className="ThemeCard">
            
            <img src={ props.image } alt="theme art"/>
        </article>
    )
};

export default ThemeCard;