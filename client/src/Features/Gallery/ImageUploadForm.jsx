import React, { useState,useEffect } from 'react';
import '../../CSS styling/FeaturesPagesCSS/ImageUploadForm.css';
import { useNavigate } from 'react-router';
function ImageUploadForm() {
  const Navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setfileName] = useState("");
  const [imageData, setImageData] = useState("");
  const [imageCaption, setImageCaption] = useState("");

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      Navigate('/signin');
    }
  }, [])
  function convertToBase64(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImageData(reader.result);
    }
  }
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg'];
    const maxSize = 9 * 1024 * 1024; // 9MB

    if (file && allowedTypes.includes(file.type) && file.size <= maxSize) {
      setSelectedFile(file);
      setfileName(file.name);
      convertToBase64(file);
    }
    else if (file.size >= maxSize) {
      alert("File limit exceeds !!");
      setSelectedFile(null);
    }
    else {
      setSelectedFile(null);
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    let formdata = new FormData();
    formdata.append('image', selectedFile);
    formdata.append('caption', imageCaption);
    await fetch('/imageupload', {
      method: 'POST',
      body: formdata
    })
      .then((response) => {
        console.log(response.json());
      })
      .then((data) => {
        alert("Image Uploaded successfully!!");
        setfileName("");
        setImageCaption("");
        setImageData("");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="imageuploadFormContainer">
      <h2 style={{ fontSize: '2.5em' }}>Image Upload Form</h2>
      <form onSubmit={handleSubmit} className='imageUploadForm'>
        <div className='mb3 input'>
          <label for="imageCaption" class="form-label">Image Caption</label>
          <input type="text" name="imageCaption" class="form-control" value={imageCaption} id="imageCaption" required onChange={(e) => {
            setImageCaption(e.target.value);
          }}></input>
        </div>
        <div>
          <input type="file" accept=".png, .jpg, .jpeg" onChange={handleFileChange} class="form-control" aria-describedby='fileType' name={fileName} required></input>
          <div id='fileType' className='form-text'>Only .jpeg , .jpg ,.png format supported with file size less than 9 MB</div>
        </div>
        <div>
          {imageData == "" || imageData == null ? "" : <img className="image_upload_preview" src={imageData} />}
        </div>
        <div className='mb5 mt-3 input'>
          <button type="submit" class="btn btn-outline-primary" style={{ marginLeft: "0" }} disabled={!selectedFile} onSubmit={handleSubmit}>Upload</button>
        </div>
      </form>
    </div>
  );
};

export default ImageUploadForm;
