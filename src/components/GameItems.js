import React from 'react'

function GameItems(props) {
    return (

        <figure>
            <img src={props.image_url} alt="adventure" className='grid' />
            <figcaption>
                <h4>{props.title}</h4>
                <h6>{props.developer}</h6>
                <p>{props.genre}</p>
            </figcaption>
        </figure>

    )
}

export default GameItems
