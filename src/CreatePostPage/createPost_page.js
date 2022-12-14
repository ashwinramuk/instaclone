import React, { useState } from "react";
import { Link } from "react-router-dom";

function CreatePost(){
    const [imgFile, setImgFile]= useState()
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [description, setDescription] = useState('')
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('img',imgFile)
        formData.append('name',name)
        formData.append('location',location)
        formData.append('description',description)
        const result = await fetch.post('/api/posts', {method:'post',body:formData}).then((res)=>res.text()).then((text)=>console.log(text))

    }
    return (
        <div>
            <header>
                <div>
                    <img src='./assets/icon.png'alt='Instaclone logo'/>
                    <h1>instaclone</h1>
                </div>
                <div>
                    <Link to='/postview'><img src='./assets/camera_icon.png' alt='camera_icon'/></Link>
                </div>
            </header>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div>
                <input type='file' onChange={(e)=> {debugger;setImgFile(e.target.files[0])}} accept='image/*'/>
                </div>
                <div>
                <input type='text' placeholder="Author" name='name' value={name} onChange={(e)=>setName(e.target.value)}/>
                <input type='text' placeholder="Location" name='location' value={location} onChange={(e)=>setLocation(e.target.value)}/>
                </div>
                <div>
                <input type='text' placeholder="Description" name='description' value={description} onChange={(e)=>setDescription(e.target.value)}/>
                </div>
                <input type='submit' value="Post"/>
            </form>
        </div>
    )
}

export default CreatePost;