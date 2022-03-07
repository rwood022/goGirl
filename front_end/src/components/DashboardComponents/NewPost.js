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
        <form className="form-group">
            <div className="input-group">
                <textarea type="text" className="form-control" rows="3" placeholder="Tell us about your adventures!"></textarea>
                <button className="btn btn-dark">Add Photo</button>
            </div>
           
            <S3 />
            <button className="btn btn-info w-100">Post to Timeline</button>

        </form>
        
       
    </div>
    )
}