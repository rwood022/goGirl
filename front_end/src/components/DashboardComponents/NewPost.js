import React from 'react'; 
import S3 from '../S3';

export default function NewPost() {

    // fetch("http://localhost:3001/api/posts", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(`https://gogirlapp.s3.amazonaws.com/${imageName}`),
    //     })
    //     .then((res) => res.json())
    //     .then((posts) => {
    //     console.log(posts);
    // })

    return(
    <div>
        <S3 />
       
    </div>
    )
}