
import React, { useState } from 'react';
import AWS from 'aws-sdk';

const S3_BUCKET = 'gogirlapp';
const REGION = 'us-east-1';


AWS.config.update({
    accessKeyId: 'AKIAQGKT3UZCAOXL6DXQ',
    secretAccessKey: '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'
})

// https://gogirlapp.s3-us-east-1.amazonaws.com/vienna

const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET },
    region: REGION,
})


export default function PlacesTraveled() {


    const [progress, setProgress] = useState(0);
    const [selectedFile, setSelectedFile] = useState(null);

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
            })
            .send((err) => {
                if (err) console.log(err)
            })
    }

    const getFile = (file) => {

      const params = {
          ACL: 'public-read',
          Body: file,
          Bucket: S3_BUCKET,
          Key: file.name
      };
      myBucket.getObject(params)
      .

    }
    }


    return <div>
        <div>Native SDK File Upload Progress is {progress}%</div>
        <input type="file" onChange={handleFileInput} />
        <button onClick={() => uploadFile(selectedFile)}> Upload to S3</button>
    </div>



}

// var s3 = new AWS.S3();
// s3.getObject(
//   { Bucket: "gogirlapp", Key: "wallpaper.jpg" },
//   function (error, data) {
//     if (error != null) {
//       alert("Failed to retrieve an object: " + error);
//     } else {
//       alert("Loaded " + data.ContentLength + " bytes");
//       // do something with data.Body
//     }
//   }
// );

const InputDownload = () => {
    const [template, setTemplate] = useState('Choose Template');
  
    AWS.config.update({
        accessKeyId: 'AKIAQGKT3UZCAOXL6DXQ',
        secretAccessKey: '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'
    });
  
    const handleDownload = () => {
      const s3 = new AWS.S3();
  
      const params = {
        Bucket: process.env.gogirlapp,
        Key: `templates/${template}`,
      };
  
      s3.getObject(params, (err, data) => {
        if (err) {
          console.log(err, err.stack);
        } else {
          console.log(data.Body.toString());
        }
      });
  
  }
  
    return (
      <>
        <form className='bg-white my-4'>
        
          <input
            type='submit'
            value='Download'
            className='btn btn-primary btn-block mt-3'
            onClick={handleDownload}
          />
        
        </form>
      </>
    );
  };
InputDownload();
  