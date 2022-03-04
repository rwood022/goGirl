import React, { useState, useEffect } from "react";
import moment from "moment";

export default function Timeline(props) {
  const [postData, setPostData] = useState([]);
  const [timestamp, setTimestamp] = useState([]);

  useEffect(() => {
    const { match } = props;
    const { path = "/" } = match;
    if (path === "/timeline") {
      document.body.style.background = "#bdbaba";
    }
  }, []);

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

        let postsArray = [];
        let timestampArray = [];

        for (let i = 0; i < posts.length; i++) {
          postsArray.push(posts[i]);
          setPostData([...postsArray]);

          // use moment.js to format the time with .fromNow
          const postDate = moment().format(posts[i].createdAt);
          let postDateValues = postDate.split("-");
          if (postDateValues[2]) {
            let othervalue = postDateValues[2].split("T");
            postDateValues[2] = othervalue[0];
            postDateValues.pop();
          }

          let nowTime = moment().format("YYYY-MM-DD");
          let fromNowValues = nowTime.split("-");
          console.log(moment(postDateValues).from(moment(fromNowValues)));
          timestampArray.push(
            moment(postDateValues).from(moment(fromNowValues))
          );
          setTimestamp([...timestampArray]);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="timeline">
      {postData &&
        postData.map((postData) => {
          return (
            <div className="post full-width mt-4" key={postData._id}>
              <div className="container card-body mb-2">
                <h5 className="mb-0">{postData.username}</h5>
                {timestamp.shift((time) => {
                  return <small>Posted {time}</small>;
                })}
              </div>

              <div className="card-body">
                <div className="card-body">{postData.message}</div>
                <hr></hr>
                <div className="card-body">
                  {postData.responses.map((response) => {
                    return (
                      <div key={response._id}>
                        <p>{response.username}</p>
                        <p>
                          <small>Responded at {response.createdAt} </small>
                        </p>
                        <p>responsebody {response.responseBody}</p>
                      </div>
                    );
                  })}{" "}
                  <br></br>
                </div>
              </div>

              <div className="card-footer">
                <a
                  href="/"
                  className="d-inline-block text-muted response-icons"
                >
                  <strong>23</strong>
                  <small> Likes</small>
                </a>
                <a
                  href="/"
                  className="d-inline-block text-muted response-icons"
                >
                  <strong>12</strong>
                  <small> Comments</small>
                </a>
                <a
                  href="/"
                  className="d-inline-block text-muted response-icons"
                >
                  <strong>3</strong>
                  <small> Shares</small>
                </a>
              </div>
            </div>
          );
        })}
    </div>
  );
}
