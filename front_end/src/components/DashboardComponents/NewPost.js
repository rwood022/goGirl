import React, { useState, useEffect } from 'react'; 
import S3 from '../S3';

export default function NewPost() {

    const [postData, setPostData] = useState({
        username: "",
        message: "",
        imageLink: ""
    })

    function submit(e) {
        e.preventDefault();
        fetch('/api/posts', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(postData)
        })
        .then((res) => res.json())
        .then((newPost) => {
            console.log(newPost);
        })
        .catch(err => {
            console.error(err);
        })    
    }

    function handleNewPost(e) {
        const newPostData = {...postData}
        newPostData[e.target.id] = e.target.value 
        setPostData(newPostData)
        console.log(newPostData);
        
    }

    return(
    <div>
        <form className="form-group new-post-container full-width" onSubmit= {(e) => submit(e)}>
            <textarea type="text" className="form-control rounded-0" rows="3" placeholder="Tell us about your adventures!" onChange={(e)=>handleNewPost(e)} id="message" value={postData.message}></textarea>
            <S3 onChange={(e)=>handleNewPost(e)} id="imageLink" value={postData.imageLink}/>
            <button className="btn post-timeline w-100 post-button" onClick={(e)=>handleNewPost(e)} id="username" value={postData.username}>Post to Timeline</button>
        </form>
    </div>
    )
}