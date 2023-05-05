import React from 'react'
import { Link } from "react-router-dom";

function GameItems(props) {
    return (

        <figure>
            <img src={props.image_url} alt="adventure" className='grid' />
            <figcaption>
                <h4>{props.title}</h4>
                <h6>{props.developer}</h6>
                <p>{props.genre}</p>
 <Link className = "detail-link" to={`/${props.id}`}>show more...</Link>
            </figcaption>
        </figure>

    )
}

export default GameItems
