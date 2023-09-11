import React, { useState, useEffect } from 'react';
// import '../../CSS styling/FeaturesPagesCSS/ImageUploadForm.css';
import { useNavigate } from 'react-router';
function QuestionPaperUploadForm() {
    const Navigate = useNavigate();
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileName, setfileName] = useState("");
    const [previewUrl, setPreviewUrl] = useState('');
    const [Semester, setSemester] = useState("");
    const [Examination, setExamination] = useState("");

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            Navigate('/signin');
        }
    }, [])
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const allowedTypes = 'application/pdf';
        const maxSize = 10 * 1024 * 1024; // 10 MB

        if (file && allowedTypes.includes(file.type) && file.size <= maxSize) {
            setSelectedFile(file);
            setfileName(file.name);
            setPreviewUrl(URL.createObjectURL(file));
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
        formdata.append('questionpaper', selectedFile);
        formdata.append('filename', fileName);
        formdata.append('semester',Semester);
        formdata.append('examination',Examination);
        await fetch('/questionpaperupload', {
            method: 'POST',
            body: formdata
        })
            .then((response) => {
                console.log(response.json());
            })
            .then((data) => {
                alert("Question Paper uploaded successfully!!");
                // setfileName("");
                Navigate('/admindashboard')
 
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <div className="imageuploadFormContainer">
            <h2 style={{ fontSize: '2.5em' }}>QuestionPaper Upload Form</h2>
            <form onSubmit={handleSubmit} className='questionPaperUploadForm'>
                <div className='mb3 input'>
                    <label for="examtype" class="form-label">Select Examination</label>
                    <select onChange={(e) => {
                        setExamination(e.target.value)
                    }}>
                        <option value="">-Select-</option>
                        <option value="Sem Exam">Semester Examination</option>
                        <option value="IA Exam">Internal Assessment</option>
                    </select>
                </div>
                <div className='mb3 input'>
                    <label for="examtype" class="form-label">Select Semester</label>
                    <select onChange={(e) =>
                        setSemester(e.target.value)}>
                        <option value="">-Select-</option>
                        <option value="Semester1">Semester 1</option>
                        <option value="Semester2">Semester 2</option>
                        <option value="Semester3">Semester 3</option>
                        <option value="Semester4">Semester 4</option>
                        <option value="Semester5">Semester 5</option>
                        <option value="Semester6">Semester 6</option>
                    </select>
                </div>
                <div>
                    <input type="file" accept=".pdf" onChange={handleFileChange} class="form-control" aria-describedby='fileType' name={fileName} required></input>
                    <div id='fileType' className='form-text'>Only .pdf format supported with file size less than 10 MB</div>
                </div>
                {previewUrl == "" ? "" : <div><h4>Preview:</h4> <embed src={previewUrl} type="application/pdf" width="100%" height="300" /></div>}
                <div className='mb5 mt-3 input'>
                    <button type="submit" class="btn btn-outline-primary" style={{ marginLeft: "0" }} disabled={!selectedFile} onSubmit={handleSubmit}>Upload</button>
                </div>
            </form>
        </div>
    );
};

export default QuestionPaperUploadForm;
