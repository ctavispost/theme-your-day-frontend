import React from 'react';



const ActCard = (props) => {
    return(
        <article className="actCard">
            <h2>{ props.title }</h2>
            <img src={ props.image } alt="{ props.title } art" className="activityPic"/>
            <p>{ props.description }</p>
            <button onClick={props.onDelete}>delete</button>
            <button onClick={props.onFavorite}>favorite</button>
        </article>
    )
};

export default ActCard;