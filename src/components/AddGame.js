import React, {useState} from 'react'

function AddGame(addGame) {
   const [image, setImage]= useState({})

 function handleChange(e){
    let key=e.target.id
    setImage(prevObj=>{
    return {...prevObj,[key]:e.target.value}
    })
    console.log(image)
 }

 const handleSubmit = ((e)=>{
 e.preventDefeaut()
  addGame(image)
 })


  return (
    <div>
        <form id="add-Form" onSubmit={handleSubmit}> 
          <label htmlFor="title">Title:</label> 
          <input type="text" value={image.title}id="title" onChange={handleChange} name="title"/><br/> 
          <label htmlFor="category">Category:</label> 
          <select id="category" name="category"> 
            <option value="Action">Action</option> 
            <option value="racing">Racing</option>
            <option value="acrade">Acrade</option> 
            <option value="motogp">MotoGp</option>
          </select><br/>

          <label htmlFor="developer">Developer:</label> 
          <textarea id="developer" value={image.developer} onChange={handleChange}name="developer"></textarea><br/> 

          <label htmlFor="release_date">Release_date:</label> 
          <input type="text" value={image.release_date} onChange={handleChange} id="release_date" name="release_date"/><br/> 

          <label htmlFor="image_url">Image URL:</label> 
          <input type="text" value={image.image_url} onChange={handleChange} id="image_url" name="image_url"/><br/>

          <input type="submit"  value={image.submitbtn}  onChange={handleChange} id="submitbtn"/>
        </form>
        <form id="comment-form" >
          <label htmlFor="name-input">Name:</label>
          <input value={image.name} onChange={handleChange} id="name-input" type="text" name="name" required/>
          <label htmlFor="comment-input">Comment:</label>
          <textarea id="commentinput"  value={image.commentinput} onChange={handleChange}name="comment" required></textarea>
          <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default AddGame