import React, { useState } from 'react';
import AWS from 'aws-sdk';

const S3_BUCKET = 'gogirlapp';
const REGION = 'us-east-1';

AWS.config.update({
    accessKeyId: 'AKIAQGKT3UZCAOXL6DXQ',
    secretAccessKey: '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'
})

const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET },
    region: REGION,
})


export default function S3() {
    const [progress, setProgress] = useState(0);
    const [selectedFile, setSelectedFile] = useState(0);
    const [imageName, setImageName] = useState(0); 

    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
 
    }

    const uploadFile = (file) => {

        const params = {
            ACL: 'public-read',
            Body: file,
            Bucket: S3_BUCKET,
            Key: file.name
        };

        myBucket.putObject(params)
            .on('httpUploadProgress', (evt) => {
                setProgress(Math.round((evt.loaded / evt.total) * 100))

                if(evt.total === evt.loaded) {
                    setImageName(selectedFile.name)
                }
            })
            .send((err) => {
                if (err) console.log(err)
            })
    } 

    fetch("http://localhost:3001/api/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(`https://gogirlapp.s3.amazonaws.com/${imageName}`),
        })
        .then((res) => res.json())
        .then((posts) => {
        console.log(posts);
    })

    return (
       <div>
        <div className="white-text">Native SDK File Upload Progress is {progress}%</div>
        <input className= "white-text" type="file" id="imageName" onChange={handleFileInput} />
        <button className="btn btn-light" onClick={() => uploadFile(selectedFile)}> Upload to S3</button>

        {imageName !==0 && <img src={`https://gogirlapp.s3.amazonaws.com/${imageName}`} width='200px' height="200px" style={{display: imageName ? 'block' : 'none' }} />}
        
    </div>
    )
}

