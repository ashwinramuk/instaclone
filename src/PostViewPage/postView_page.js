import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PostView(){
    const [posts, setPosts] = useState([])
    useEffect(()=>{fetch("https://instaclone-backened-api.onrender.com/api/posts").then((res)=>res.json()).then((data)=>{setPosts(data);console.log(posts)}).catch((e)=>console.log(e))},[])
    return(
        <div>
            <header>
                <div>
                    <img src='./assets/icon.png' alt='logo'/>
                    <h1>instaclone</h1>
                </div>
                <div>
                    <Link to='/createPost'><img src='./assets/camera_icon.png' alt='cameraIcon'/></Link>
                </div>
            </header>
            <div className="cards-container">
                {posts.map((e)=>{
                    return(
                        <div className='card-container'>
                            <div>
                                <p><b>{e.name}</b></p>
                                <p>{e.location}</p>
                                <img src='./assets/more_icon.png' alt='moreIcon'/>
                            </div>
                            <div>
                                <img src={e.PostImage} alt='postImage'/>
                            </div>
                            <div>
                                <div>
                                    <img src='./assets/heart_icon.png' alt='heartIcon'/>
                                    <img src='./assets/share_icon.png' alt='shareIcon'/>
                                </div>
                                <div><p>{e.date}</p></div>
                            </div>
                            <div>
                                <p>{e.likes} likes</p>
                            </div>
                            <div>
                                <p><b>{e.description}</b></p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default PostView;