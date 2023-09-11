import React, { useEffect, useState } from 'react'
import NavBar from './NavBar';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import ENews from '../Epaper/ENews';
import 'bootstrap/dist/css/bootstrap.min.css';
const ENewsPaper = (props) => {
  const Navigate = useNavigate();
  useEffect(()=>{
      if(!localStorage.getItem('token'))
      {
          Navigate('/signin');
      }
  },[])
  const pageSize = 6;
  const apiKey = '8bac747eceff47288e484eae55d5b2d5';
  const [progress, setProgress] = useState(0)

  return (
    <div>
      <NavBar />
      <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />
      <ENews setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category={props.category} />

    </div>
  )

}

export default ENewsPaper;