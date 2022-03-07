import React, { useState } from 'react';
import AWS from 'aws-sdk';
import { Button, Form } from "react-bootstrap";
import BackButton from "./BackButton";

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

let mimes = {
    'jpeg': 'data:image/jpeg;base64'
  }

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

        getUrlByFileName({imageName}, mimes.jpeg).then(function(data) {
                document.querySelector('img').src = data;
            });
    } 

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

    function encode(data)
    {
        var str = data.reduce(function(a,b){ return a+String.fromCharCode(b) },'');
        return btoa(str).replace(/.{76}(?=.)/g,'$&\n');
    }

    function getUrlByFileName(fileName,mimeType) {
        return new Promise(
            function (resolve, reject) {
                myBucket.getObject({Key: fileName}, function (err, file) {
                    var result =  mimeType + encode(file.Body);
                    resolve(result)
                });
            }
        );
    }

 


    return (
    <div>
        <div className="input-group dark-background">
            <input className= "white-text form-control" type="file" id="imageName" onChange={handleFileInput} />
            <button className="btn btn-light" onClick={() => uploadFile(selectedFile)}> Upload</button> 
        </div>
            <small className="white-text right-align">{progress}% completed</small>
    </div>
    )
}