// import React from 'react';
import { useState, useEffect } from 'react';
import moment  from 'moment';

export default function Timeline() {

    const [postData, setPostData] = useState([]);
    const [timestamp, setTimestamp] = useState();
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
          
                // use moment.js to format the time with .fromNow
                const postDate = moment().format(posts[0].createdAt);
                let postDateValues = postDate.split("-")
                if (postDateValues[2]) {
                    let othervalue = postDateValues[2].split('T');
                    postDateValues[2] = othervalue[0]
                    postDateValues.pop();
                }
                // console.log (postDateValues);
                let nowTime = moment().format('YYYY-MM-DD');
                let fromNowValues = nowTime.split("-")
                // console.log(fromNowValues)
                // console.log(nowTime);
                // console.log postDate);
                // console.log(moment postDateValues).fromNow());
                console.log(moment (postDateValues).from(moment(fromNowValues)))
                setTimestamp(moment (postDateValues).from(moment(fromNowValues)));
                // console.log(time);

                // console.log(moment().posts[0].createdAt.fromNow())

                // const timestamp = moment().startOf('day').fromNow();
                // console.log(timestamp)

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
                setPostData([...postsArray]);


                // setResponseData(posts[i].responses[0]);
            }
            
            })
            .catch(err => {
                console.error(err);
            }); 
            
}, []); 


    return (
    <div> 
     {postData && postData.map((postData) => {
         return  <div className="post full-width mt-4" key={postData._id}>
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
                   {postData.responses.map((response) => {
                       return (<div key={response._id}><p>{response.username}</p>
                       <p><small>Responded at {response.createdAt} </small></p>
                       <p>responsebody  {response.responseBody}</p>
                       </div>
                       )
                    }) } <br></br>
                   
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
})}
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