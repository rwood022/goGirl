import React, { useState } from 'react'; 
import S3 from "../S3";

export default function NewPost() {

    const [postData, setPostData] = useState({
        username: "steph123",
        message: "",
    })

    function submit(e) {
        e.preventDefault();
        fetch('http://localhost:3001/api/posts', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(postData)
        })
        .then((res) => res.json())
        .then((newPost) => {
            console.log(newPost);
            window.location.reload();
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
        <form className="form-group new-post-container full-width mb-4" onSubmit= {(e) => submit(e)}>
            <textarea type="text" className="form-control rounded-0" rows="3" placeholder="Tell us about your adventures!" onChange={(e)=>handleNewPost(e)} id="message" value={postData.message}></textarea>
            <button className="btn post-timeline w-100 post-button">Post to Timeline</button>
        </form>
        <S3 />
    </div>
    )
}

