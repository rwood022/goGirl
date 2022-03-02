// import React from 'react';
import { useState, useEffect } from 'react';

export default function Timeline() {

    const [postData, setPostData] = useState([]);
    // const [responseData, setResponseData] = useState([]);
    // const [timestamp, setTimestamp] = useState(['Timestamp']);
    // const [message, setMessage] = useState([]);
    // const [response, setResponse] = useState(['Response']);

    useEffect(() => { 
        
        fetch('http://localhost:3001/api/posts', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(),
            })
            .then((res) => res.json())
            .then((posts) => {
                console.log(posts);
                let postsArray = []; 
            // for(let i = 0; i < posts.length; i++) {
            //     setUserData(posts[i].username);
            //     setTimestamp(posts[i].createdAt);

            //     messageArray.push(posts[i].message);
            //     setMessage(messageArray);

            //     console.log(message);
            //     setResponse(posts[i].responses);
            // }    
            for(let i= 0; i < posts.length; i++) {
                postsArray.push(posts[i]);
                setPostData(postsArray);


                // setResponseData(posts[i].responses[0]);
            }
            

            })
            .catch(err => {
                console.error(err);
            }); 
            
}, []); 



    return (
    <div> 
     {postData && postData.map((postData) => (
        <div className="post full-width">
            <div className="container card-body mb-2">
                <h5 className="mb-0">{postData.username}</h5>
                <small>Posted at {postData.createdAt}</small>
            </div>
            
            <div className="card-body">
                <div className="card-body">
                    {postData.message}
                </div> 
                <hr></hr>
                <div className="card-body">
                   {postData.responses[0].username} <br></br>
                    <p><small>Responded at {postData.responses[0].createdAt} </small></p>
                    <p>responsebody  {postData.responses[0].responseBody}</p>
                </div>
            </div>

            <div className="card-footer">
                <a href="/" className="d-inline-block text-muted response-icons">
                    <strong>23</strong>
                    <small >  Likes</small>
                </a>
                <a href="/" className="d-inline-block text-muted response-icons">
                    <strong>12</strong><small>  Comments</small>
                </a>
                <a href="/" className="d-inline-block text-muted response-icons">
                <strong>3</strong><small> Shares</small>
                </a>
            </div>
        </div>
      ))}
    </div>
    ); 
}
    

    // const [data, setData] = useState([]);

    // useEffect(() => { 
        
    // fetch('/api/users/').then(res => {
    //     if(res.ok) {
    //         return res.json()
    //     }
    // }).then(userData => { setData(userData)});

    // }, []) 