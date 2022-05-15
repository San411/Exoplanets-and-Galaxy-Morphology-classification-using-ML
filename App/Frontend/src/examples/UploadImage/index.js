import React from "react";
import MKTypography from "components/MKTypography";
import "./styles.css";

function UploadImage() {
  // State to store uploaded file
  const [file, setFile] = React.useState("");

  // Handles file upload event and updates state
  function handleUpload(event) {
    setFile(event.target.files[0]);

    // Add code here to upload file to server
    // ...
  }

  return (
    <div id="upload-box">
      <input type="file" onChange={handleUpload} />
      <MKTypography variant="body1" color="text">
        <p>Filename: {file.name}</p>
        <p>File type: {file.type}</p>
        <p>File size(Bytes): {file.size} </p>
        {/* {file && <ImageThumb image={file} />} */}
      </MKTypography>
    </div>
  );
}

// function ImageThumb(image) {
//   return <img src={URL.createObjectURL(image)} alt="Galaxy Thumbnail" />;
// }

export default UploadImage;
