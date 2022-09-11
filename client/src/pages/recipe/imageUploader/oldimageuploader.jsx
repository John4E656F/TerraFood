// import React, {useState} from 'react';
// import FileUpload from 'react-mui-fileuploader';
// import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
// import storage from '../../firebase';

// export default ImageUploader = () => {
    
//   const [ image, setImage ] = useState(null);
//   const [imageUrl, setImageUrl] = useState('');
//   const [imgFileName, setImgFileName] = useState('');
//   const[progress,setProgress]=useState(0);

//   const imgUploadHandler = (e) => {

//     // const img = document.getElementById("uploadImg").files[0];
//     const file = e.target[0]?.files[0]
//     if (!file) return;
//       // setImgFileName(image.name); //set filename
//       setImage(image); //set file

//       const uploadTask = storage.ref(`recipes/images/${file.name}`).put(image);

//     // if (!img) return;

//     // const storageRef = ref(storage, `recipes/images/${img.name}`);
//     // const uploadTask = uploadBytesResumable(storageRef, img);

//     uploadTask.on("state_changed",
//       (snapshot) => {
//         //file upload progress report
//         const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
//         setProgress({progress});
//       },
//       //file upload failed
//       (error) => {
//         console.log(error);
//       },
//       //file upload completed
//       () => {
//         storage.ref(`recipes`).child(`${imgFileName}`).getDownloadURL()
//         .then(
//           //get download url
//           (downloadURL) => {
//           setImageUrl(downloadURL);
//           console.log(downloadURL);
//           console.log(imageUrl);
//         },
//         //failed to get download url
//         (error) => {
//           console.log(error);
//         }
//         );
//       }
//     )
//   }

// }


import React, { useState, useEffect } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import storage from "../../../firebase";
import { v4 } from "uuid";
import FileUpload from "react-material-file-upload";

function imageUploader() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const imagesListRef = ref(storage, "images/");
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);
  console.log(imageUrls);
  return (
    <>
    <FileUpload 
    value={imageUpload}
    onChange={uploadFile}
    multiFile={true}
    leftLabel="or"
    rightLabel="to select files"
    buttonLabel="click here"
    buttonRemoveLabel="Remove all"
    maxFileSize={10}
    maxUploadFiles={0}
    bannerProps={{ elevation: 0, variant: "oulined" }}
    containerProps={{ elevation: 0, variant: "outlined" }}
    />
    </>
    // <div className="App">
    //   <input
    //     type="file"
    //     onChange={(event) => {
    //       setImageUpload(event.target.files[0]);
    //     }}
    //   />
    //   <button onClick={uploadFile}> Upload Image</button>
    //   {/* {imageUrls.map((url) => {
    //     return <img src={url} />;
    //   })} */}
    // </div>
  );
}

export default imageUploader;