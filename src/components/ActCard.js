import React from 'react';

const ActCard = (props) => {
    return(
        <article className="actCard margTwoRem">
            <h2>{ props.title }</h2>
            <img src={ props.image } alt="{ props.title } art" className="activityPic"/>
            <p>{ props.description }</p>

            { props.pathname === "/profile" && props.currentUser ? 
                <>
                <button onClick={props.onDelete}>delete</button>
                </>
            :
                props.currentUser ?
                <>
                <button onClick={props.onDelete}>delete</button>
                <button onClick={props.onFavorite}>favorite</button>
                </>
                :
                <>
                </>
            }
            
        </article>
    )
};

export default ActCard;