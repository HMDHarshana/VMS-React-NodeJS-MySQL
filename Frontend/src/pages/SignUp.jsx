import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Background from '../images/img1.jpg';
import Logo from '../images/logo.png';
import validation from './Signupvalidation';
import NavBar from '../componets/Navigation';


const Signup = () => {
  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
  };

  const backgroundImageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    top: 0,
    left: 0,
    zIndex: -1,
  };

  const transparentLayerStyle = {
    backgroundColor: 'rgba(67, 66, 66, 0.9)',
    width: '100%',
    maxWidth: '560px',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '20px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
  };

  const topButtonsStyle = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  };

  const btnStyle = {
    backgroundColor: '#FFCC00',
    border: 'none',
    color: 'black',
    padding: '8px 20px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    borderRadius: '8px',
    cursor: 'pointer',
    marginRight: '10px',
  };

  const signInStyle = {
    ...btnStyle,
    position: 'absolute',
    top: '20px',
    right: '20px',
  };

  const logoSectionStyle = {
    marginTop: '20px',
    display: 'flex',
    alignItems: 'center',
  };

  const logoStyle = {
    width: '50px',
    height: '50px',
  };

  const websiteNameStyle = {
    color: 'white',
    fontSize: '13px',
    marginLeft: '10px',
  };

  const titleStyle = {
    color: 'white',
    fontSize: '25px',
    marginTop: '60px',
    marginLeft: '30px',
  };

  const formStyle = {
    marginTop: '20px',
    marginLeft: '30px',
    marginRight: '30px',
    flex: 1,
  };

  const labelStyle = {
    color: 'white',
    fontSize: '15px',
    display: 'inline-block',
    marginTop: '10px',
    marginBottom: '10px',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginTop: '5px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '6px',
    boxSizing: 'border-box',
  };

  const checkboxesStyle = {
    display: 'flex',
    alignItems: 'center',
    marginTop: '30px',
  };

  const checkboxLabelStyle = {
    color: 'white',
    fontSize: '16px',
    marginRight: '40px',
  };

  const signUpBtnStyle = {
    ...btnStyle,
    width: '100%',
    height: '40px',
    fontSize: '18px',
    marginTop: '70px',
    borderRadius: '6px',
    cursor: 'pointer',
  };

  const errorMessageStyle = {
    color: '#92DCE5', 
    fontSize: '15px',
    fontweight: 'bold',
  };
 
 

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    repassword: '',
    roll: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInput = (event) => {
    const { name, value } = event.target;

    if (name === 'name') {
      // Allow only letters and spaces
      if (/^[A-Za-z\s]*$/.test(value)) {
        setValues(prev => ({ ...prev, [name]: value }));
        setErrors(prevErrors => ({ ...prevErrors, [name]: null }));
      } else {
        setErrors(prevErrors => ({ ...prevErrors, [name]: "Name should only contain letters and spaces" }));
      }
    } else {
      setValues(prev => ({ ...prev, [name]: value }));
      setErrors(prevErrors => ({ ...prevErrors, [name]: null }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validation(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      axios.post('http://localhost:3000/SignUp', values)
        .then(res => {
          if (res.data.message === 'User registered successfully') {
            navigate('/login');
          } else {
            alert(res.data.message);
          }
        })
        .catch(err => console.log(err));
    }
  };

  return (
   
    <div style={containerStyle}>
      
      <img src={Background} alt="Background" style={backgroundImageStyle} />
      <Link to="/login" style={signInStyle}>Sign in</Link>
      <Link to="/" style={topButtonsStyle}>Home</Link>
     
      <div style={transparentLayerStyle}>
        <h1 style={titleStyle}>Create New Account</h1>
        <form onSubmit={handleSubmit} style={formStyle}>
          <label htmlFor="name" style={labelStyle}>NAME</label>
          <input type="text" id="name" onChange={handleInput} name="name" style={inputStyle} value={values.name} />
          {errors.name && <span style={errorMessageStyle}>{errors.name}</span>}<br></br>

          <label htmlFor="email" style={labelStyle}>EMAIL</label>
          <input type="email" id="email" onChange={handleInput} name="email" style={inputStyle} value={values.email} />
          {errors.email && <span style={errorMessageStyle}>{errors.email}</span>}<br></br>

          <label htmlFor="password" style={labelStyle}>PASSWORD</label>
          <input type="password" id="password" onChange={handleInput} name="password" style={inputStyle} value={values.password} />
          {errors.password && <span style={errorMessageStyle}>{errors.password}</span>}<br></br>

          <label htmlFor="repassword" style={labelStyle}>RE-PASSWORD</label>
          <input type="password" id="repassword" onChange={handleInput} name="repassword" style={inputStyle} value={values.repassword} />
          {errors.repassword && <span style={errorMessageStyle}>{errors.repassword}</span>}<br></br>

          <div style={checkboxesStyle}>
            <label htmlFor="volunteer" style={checkboxLabelStyle}><input type="radio" id="volunteer" onChange={handleInput} name="roll" value="volunteer" /> VOLUNTEER</label>
            <label htmlFor="organization" style={checkboxLabelStyle}><input type="radio" id="organization" onChange={handleInput} name="roll" value="organization" /> ORGANIZATION</label>
          </div>
          {errors.roll && <span style={errorMessageStyle}>{errors.roll}</span>}<br></br>

          <button type="submit" style={signUpBtnStyle}>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
