import React, { useState } from 'react';
import { useParams } from "react-router-dom";

const EditGame = () => {

  const [title, setTitle] = useState('');
  const [developer, setDeveloper] = useState('');
  const [release_date, setRelease_Date] = useState('');

  const {id} = useParams()
  
  function handleEdit(e){
        e.preventDefault()

        fetch(`https://game-data.onrender.com/games/${id}`,{
            method:"PUT",
            headers:{'Content-type' : 'Application/json'},
            body:JSON.stringify({
            title:title,
            release_date:release_date,
            developer:developer
            })
})
        .then(res => res.json())
        .then(data => console.log(data))
        // history('/')
    }

  return (
    <form onSubmit={handleEdit}>
      <label>
        Name:
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
      </label>
      <label>
        Developer:
        <input value={developer} onChange={e => setDeveloper(e.target.value)} />
      </label>
      <label>
        Release date:
        <input type="number" value={release_date} onChange={e => setRelease_Date(e.target.value)} />
      </label>
      <button type='submit'>Save</button>
    </form>
  );
};

export default EditGame;
