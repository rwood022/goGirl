// import React from 'react';
import { useState, useEffect } from "react";

export default function Timeline(props) {
  const [userData, setUserData] = useState("Username");
  const [timestamp, setTimestamp] = useState("Timestamp");
  const [message, setMessage] = useState("Message");
  const [response, setResponse] = useState("Response");

//   useEffect(() => {
//     const { match } = props;
//     const { path = "/" } = match;
//     if (path === "/timeline") {
//       document.body.style.backgroundImage =
//         "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(/images/timeline.jpg)";
//       document.body.style.backgroundSize = "cover";
//       document.body.style.backgroundPosition = "center";
//       document.body.style.height = "100vh"; // vh stands for viewport height
//       document.body.style.backgroundRepeat = "no-repeat";
//     }
//   }, []);

  useEffect(() => {
    fetch("http://localhost:3001/api/posts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((posts) => {
        console.log(posts);
        for (let i = 0; i < posts.length; i++) {
          setUserData(posts[i].username);
          setTimestamp(posts[i].createdAt);
          setMessage(posts[i].message);
          setResponse(posts[i].responses);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="timeline">
      {/* {userData.map((userData) => (  */}
      <div className="post full-width">
        <div className="container card-body mb-2">
          <h5 className="mb-0">{userData}</h5>
          <small>Posted at {timestamp}</small>
        </div>

        <div className="card-body">
          <div className="card-body">{message}</div>
          <hr></hr>
          <div className="card-body">
            {response[0].username} <br></br>
            <p>
              <small>{response[0].createdAt}</small>
            </p>
            <p>{response[0].responseBody}</p>
          </div>
        </div>

        <div className="card-footer">
          <a href="/" className="d-inline-block response-icons">
            <strong>23</strong>
            <small> Likes</small>
          </a>
          <a href="/" className="d-inline-block response-icons">
            <strong>12</strong>
            <small> Comments</small>
          </a>
          <a href="/" className="d-inline-block response-icons">
            <strong>3</strong>
            <small> Shares</small>
          </a>
        </div>
      </div>
      {/* ))}  */}
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
