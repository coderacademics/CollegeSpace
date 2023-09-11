import React, { useEffect, useState } from "react";
import '../../CSS styling/FeaturesPagesCSS/questionpaper.css'
import { useNavigate } from "react-router";
function QuestionPaper() {
    const Navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            Navigate('/signin');
        }
    }, []);
    const [questionpapers, setQuestionPapers] = useState([]);
    const [semester, setSemester] = useState([]);
    const [examination, setExamination] = useState([]);
    function handleSubmit(e) {
        e.preventDefault();
        fetch('/searchquestionpapers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                semester: semester,
                examination: examination
            })
        }
        )
            .then(response => response.json())
            .then(data => {
                console.log(data.data);
                setQuestionPapers(data.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    return (
        <>
            <div className="questionPaperSearchFormContainer">
                <h2>Search your Question Paper</h2>
                <form className="questionPaperSearchForm" onSubmit={handleSubmit}>
                    <div className='mb3 input'>
                        <label for="examtype" class="form-label">Select Examination</label>
                        <select required onChange={(e) => {
                            setExamination(e.target.value)
                        }}>
                            <option value="">-Select-</option>
                            <option value="Sem Exam">Semester Examination</option>
                            <option value="IA Exam">Internal Assessment</option>
                        </select>
                    </div>
                    <div className='mb3 input'>
                        <label for="examtype" class="form-label">Select Semester</label>
                        <select required onChange={(e) =>
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
                    <div className='mb5 mt-3 input'>
                        <button type="submit" class="btn btn-outline-primary" style={{ marginLeft: "0" }} onSubmit={handleSubmit}>Search</button>
                    </div>
                </form>
            </div>
            <br />
            <br />
            <br />
            <table className="table table-bordered border-dark event_table">
                <thead>
                    <tr>
                        <td><b>Question Paper File Name</b></td>
                        <td><b>Semester </b></td>
                        <td><b>Examination</b></td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {questionpapers.map((val, key) => {
                        return <tr key={key} className="">
                            <td className="">{val.questionpaper.name}</td>
                            <td className="">{val.Semester}</td>
                            <td className="">{val.Examination}</td>
                            <td><button className="btn btn-success" onClick={
                                () => {
                                    const filePath = process.env.PUBLIC_URL +`/file_uploads/${val.questionpaper.name}`;
                                    const link = document.createElement('a');
                                    link.href = filePath;
                                    link.download = val.questionpaper.name;
                                    link.click();
                                }
                            }>Download</button></td>
                        </tr>;
                    })
                    }
                </tbody>
            </table>
        </>

    );
}
export default QuestionPaper;