import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";



function ShowMore() {
    const [game, setGame] = useState([])

    const history = useNavigate()
    //declare variables that will display data
    const { image_url, title, developer, release_date, rating, genre } = game

    const { id } = useParams()

    console.log(id)
    //fetch data by id
    useEffect(() => {
        fetch(`https://game-data.onrender.com/games/${id}`)
            .then(r => r.json())
            .then(data => setGame(data))
    }, [id])

    //delete data by its id
    function handleDelete(e) {
        e.preventDefault()

        fetch(`https://game-data.onrender.com/games/${id}`, {
            method: "DELETE",

        })
            .then(res => res.json())
            .then(data => setGame(data))
        history('/')
    }

    //display details of each item
    return (
        <div>
            <div className="image-details">
                <img src={image_url} alt={title} />
                {/* <img src={image_url} alt={title} /> */}
            </div>

            <h2>{title}</h2>
            <h4>{developer}</h4>
            <p>release_date: {release_date}</p>
            <p>rating: {rating}</p>
            <p>{genre}</p>
            {/* <p>Kshs. {price}</p> */}
            <button className="buy">Buy Now</button>

            <div>
                <Link className="detail-link" to={`/editgame/${id}`}>Edit Game</Link><br />
                <button onClick={handleDelete} className="deletegame">Delete</button>

            </div>


        </div>
    )

}

export default ShowMore