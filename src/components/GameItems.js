import React from 'react'
import { Link } from "react-router-dom";

function GameItems(props,) {
    const { id, image_url, title, developer, genre } = props;
    return (
        <figure>
            <img src={image_url} alt="adventure" className='grid' />
            <figcaption>

                <h4>{props.title}</h4>
                <h6>{props.developer}</h6>
                <p>{props.genre}</p>
 <Link className = "detail-link" to={`/${props.id}`}>show more...</Link>


            </figcaption>
        </figure>
    )
}
export default GameItems;