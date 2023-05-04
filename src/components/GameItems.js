import React from 'react'

const handleClick = ((id) => {
    if (window.confirm("Do you want to remove?"))
        fetch(`http://localhost:3000/games/${id}`, {
            method: 'DELETE'
        }).then(() => {
        }).catch((err) => {
            console.log(err.message)
        })

})
function GameItems(props,) {
    const { id, image_url, title, developer, genre } = props;
    return (
        <figure>
            <img src={image_url} alt="adventure" className='grid' />
            <figcaption>
                <h4>{title}</h4>
                <h6>{developer}</h6>
                <p>{genre}</p>
                <button onClick={() => handleClick(id)}>DELETE</button>
            </figcaption>
        </figure>
    )
}
export default GameItems;