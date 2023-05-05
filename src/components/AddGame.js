import React, {useState} from 'react'

function AddGame({AddGames}) {
   const [image, setImage]= useState({})

 function handleChange(e){
    let key=e.target.id
    setImage(prevObj=>{
    return {...prevObj,[key]:e.target.value}
    })
    setTimeout(()=>{
    console.log(image)
 },0);
 }


 const handleSubmit = (e)=>{
 e.preventDefault()
  AddGames({ ...image, submitbtn: 'Submit' });
    setImage({});
 }


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
          <input id="developer" value={image.developer} onChange={handleChange}name="developer"></input><br/> 

        

          <label htmlFor="image_url">Image URL:</label> 
          <input type="text" value={image.image_url} onChange={handleChange} id="image_url" name="image_url"/><br/>

          <input type="submit"  value={image.submitbtn}  onChange={handleChange} id="submitbtn"/><br/>
          
        </form>
        <form id="comment-form"  onSubmit={handleSubmit}>
           <h4>Please add your comment here</h4> 
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