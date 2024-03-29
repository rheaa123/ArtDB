// SubmissionForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './SubmissionForm.css'
import {Link} from "react-router-dom";
import { useHistory } from 'react-router-dom';

const SubmissionForm = () => {

  const [formData,setFormData] = useState({
    paintingName: '',
    paintingId: 0,
    painter: '',
    year: 0,
    style: '',
    medium: '',
    dimensions: '',
    description: '',
  });
  
  const history = useHistory(); 
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    set FormData({ ...formData, [name]: value });
  };

  const handleSubmit =  async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/submit', formData, { headers: {
        'Content-Type': 'application/json' }});
      console.log(response.data); // Log API response
      // Optionally reset form fields after successful submission
      setFormData({
        paintingName: '',
        paintingId: 0,
        painter: '',
        year: 0,
        style: '',
        medium: '',
        dimensions: '',
        description: '',
        // Reset other fields as needed
      });
    history.push('/output');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return(
    <div className="container">

      <div className="headerContainer">
        <div className="titleHeader">Submission Form</div>
      </div>

      <div className="bodyContainer"> 
      <form onSubmit={handleSubmit}>
      <div className="row0"><div className="input"></div></div>
      <div className="row1">
        <div className="input">Painting Name: <input type="text" 
        name="paintingName" value={formData.paintingName} onChange={handleChange}
        /></div>
        <div className="input">Painting ID: <input type="number" name="paintingId" 
        value={formData.paintingId} onChange={handleChange} 
        /></div></div>
        <div className="row2">
        <div className="input">Painter: <input type="text" 
        name="painter" value={formData.painter} onChange={handleChange} 
        /></div></div>
        <div className="row3">
        <div className="input">Year: <input type="number" 
        name="year" value={formData.year} onChange={handleChange} 
        /></div>
        <div className="input">Style: <input type="text" 
        name="style" value={formData.style} onChange={handleChange} 
        /></div></div>
        <div className="row4">
        <div className="input">Medium: <input type="text" 
        name="medium" value={formData.medium} onChange={handleChange}
         /></div></div>
        <div className="row5">
        <div className="input">Dimensions: <input type="text" 
        name="dimensions" value={formData.dimensions} onChange={handleChange} 
        /></div></div>
        <div className="row6">
        <div className="input">Description: <input type="text" 
        name="description" value={formData.description} onChange={handleChange} 
        /></div></div>
        {/* <textarea className="input">Description: </textarea></div> */}
        <div className="row7"> 
        <div className="input">Media: <input type="file" /></div></div>
        <div className="row8">
        <div className="submitContainer">
        <button type="submit" className='submit'>submit</button>
        <div className="link"><nav><Link to="/OutputScreen">Search</Link></nav></div>

        {/* WC */}
        </div></div>
        <div className="row9"></div>
      </form>
      </div>
    </div>
  )
};

export default SubmissionForm;
