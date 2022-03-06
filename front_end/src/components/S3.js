import React, { useEffect, useState } from 'react';
import AWS from 'aws-sdk';

const S3_BUCKET = 'gogirlapp';
const REGION = 'us-east-1';

let mimes = {
  'jpeg': 'data:image/jpeg;base64'
}

AWS.config.update({
    accessKeyId: 'AKIAQGKT3UZCAOXL6DXQ',
    secretAccessKey: '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'
})

// https://gogirlapp.s3-us-east-1.amazonaws.com/vienna

const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET },
    region: REGION,
})


export default function S3() {


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

      // function openInNewTab(url) {
      //   console.log(url);
      //     var redirectWindow = window.open(url, '_blank');
      //     redirectWindow.location;
      // }

      getUrlByFileName('S3_FILE_PATH', mimes.jpeg).then(function(data) {
          document.querySelector('img').src = data;
      });

  
      const [imageName, setImageName ] = useState("Coco.JPG"); 
 
      useEffect(() => {
        if(selectedFile) {
            // const imageInput =  document.querySelector('#imageName').name;
          setImageName(selectedFile.name);
        } 
     
      }, [progress]); 
       

       return (
       <div>
        <div>Native SDK File Upload Progress is {progress}%</div>
        <input type="file" id="imageName" onChange={handleFileInput} />
        <button onClick={() => uploadFile(selectedFile)}> Upload to S3</button>

        <img src={`https://gogirlapp.s3.amazonaws.com/${imageName}`} width='200px' height="200px" />
    </div>
    )
}

// function downloadFile(file) {

//   const params = {
//     ACL: 'public-read',
//     Body: file,
//     Bucket: S3_BUCKET,
//     Key: "vienna.jpg"
//   };

//   myBucket.getObject(params)
//     // .on('httpUploadProgress', (evt) => {
//     //     setProgress(Math.round((evt.loaded / evt.total) * 100))
//     // })
//     .send((err) => {
//       if (err)
//         console.log(err);
//     });


//   return <div>
//     {/* <div>Native SDK File download Progress is {progress}%</div> */}
//     {/* <input type="file" onChange={handleFileInput} /> */}
//     <button onClick={() => downloadFile("vienna.jpg")}> Download</button>
//   </div>;

// }

// // var s3 = new AWS.S3();
// // s3.getObject(
// //   { Bucket: "gogirlapp", Key: "wallpaper.jpg" },
// //   function (error, data) {
// //     if (error != null) {
// //       alert("Failed to retrieve an object: " + error);
// //     } else {
// //       alert("Loaded " + data.ContentLength + " bytes");
// //       // do something with data.Body
// //     }
// //   }
// // );

// // const InputDownload = () => {
// //     const [template, setTemplate] = useState('Choose Template');
  
// //     AWS.config.update({
// //         accessKeyId: 'AKIAQGKT3UZCAOXL6DXQ',
// //         secretAccessKey: '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'
// //     });
  
// //     const handleDownload = () => {
// //       const s3 = new AWS.S3();
  
// //       const params = {
// //         Bucket: process.env.gogirlapp,
// //         Key: `templates/${template}`,
// //       };
  
// //       s3.getObject(params, (err, data) => {
// //         if (err) {
// //           console.log(err, err.stack);
// //         } else {
// //           console.log(data.Body.toString());
// //         }
// //       });
  
// //   }
  
// //     return (
// //       <>
// //         <form className='bg-white my-4'>
        
// //           <input
// //             type='submit'
// //             value='Download'
// //             className='btn btn-primary btn-block mt-3'
// //             onClick={handleDownload}
// //           />
        
// //         </form>
// //       </>
// //     );
// //   };
// // InputDownload();
  