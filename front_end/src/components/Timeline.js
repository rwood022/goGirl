import React from 'react';
// import { useState, useEffect } from 'react';

export default function Timeline() {

    fetch('http://localhost:3001/api/users', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(),
        })
        .then((res) => res.json())
        .then((userData) => {
        console.log(userData);

        })
        .catch(err => {
            console.error(err);
        }); 
    





    //  const [data, setData] = useState([]);


//     useEffect(() => { 
//     fetch('/api/users/').then(res => {
//         if(res.ok) { return res.json() }
//     }).then(userData => { 
//         setData(userData);
//     }).catch(error => {
//         console.error("error fetching data", error); 
//     }).finally(() => {
//         setData(false); 
//     })
// }, []) 

    
    
    // const [data, setData] = useState([]);

    // useEffect(() => { 
        
    // fetch('/api/users/').then(res => {
    //     if(res.ok) {
    //         return res.json()
    //     }
    // }).then(userData => { setData(userData)});

    // }, []) 
     

    return (
    <div> 
        <div className="post full-width">
            <div className="container card-body mb-2">
                <h5 className="mb-0">Username</h5>
                <small>3 days ago</small><br></br>
            </div>
            
            <div className="card-body">
                <div className="card-body">
                    This is where the message goes...
                </div> 
                <hr></hr>
                <div className="card-body">
                    This is where the responses go...
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
    </div>
    ); 
}
    