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
import FileUpload from "react-mui-fileuploader";

function ImageUploader() {
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
    console.log(imageUrls)
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
//   console.log(imageUrls);
  return (
    
    <div className="App">
      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <button onClick={uploadFile}> Upload Image</button>
      {/* {imageUrls.map((url) => {
        return <img src={url} />;
      })} */}
    </div>

  );
}

export default ImageUploader;

    // <>
    // <FileUpload
    //   multiFile={true}
    //   disabled={false}
    //   header="[Drag to drop]"
    //   leftLabel="or"
    //   rightLabel="to select files"
    //   buttonLabel="click here"
    //   buttonRemoveLabel="Remove all"
    //   maxFileSize={10}
    //   maxUploadFiles={0}
    //   maxFilesContainerHeight={357}
    //   errorSizeMessage={'fill it or move it to use the default error message'}
    //   allowedExtensions={['jpg', 'jpeg', 'png']}
    //   type="file"
    //   onFilesChange={setImageUpload}
    //   // onFilesChange={imgUploadHandler}
    //   id="uploadImg"
    //   bannerProps={{ elevation: 0, variant: "outlined" }}
    //   containerProps={{ elevation: 0, variant: "outlined" }}
    // />
    // <button onClick={uploadFile}> Submit </button>
    // </>