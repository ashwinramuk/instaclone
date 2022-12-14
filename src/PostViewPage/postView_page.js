import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PostView(){
    const [posts, setPosts] = useState([{"name":"Siva",
    "location":"Bengaluru",
    "likes":64,
    "description": "Kick start your career with a bang",
    "PostImage": "/assets/10x.png",
    "date": "12/02/2022"
    },
    {"name":"Neeraj",
    "location":"Pune",
    "likes":30,
    "description": "Beatiful sun set",
    "PostImage": "/assets/bridge-sun.jpg",
    "date": "15/05/2022"
    }])
    useEffect(()=>{fetch("/api/posts",{method:'get'}).then((res)=>res.json()).then((data)=>setPosts(data))},[])
    return(
        <div>
            <header>
                <div>
                    <img src='./assets/icon.png'/>
                    <h1>instaclone</h1>
                </div>
                <div>
                    <Link to='/createPost'><img src='./assets/camera_icon.png'/></Link>
                </div>
            </header>
            <div className="cards-container">
                {posts.map((e)=>{
                    return(
                        <div className='card-container'>
                            <div>
                                <p><b>{e.name}</b></p>
                                <p>{e.location}</p>
                                <img src='./assets/more_icon.png'/>
                            </div>
                            <div>
                                <img src={e.PostImage}/>
                            </div>
                            <div>
                                <div>
                                    <img src='./assets/heart_icon.png'/>
                                    <img src='./assets/share_icon.png'/>
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

export default PostView