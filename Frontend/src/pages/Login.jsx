import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Background2 from '../images/img2.jpg';
import Logo from '../images/logo.png';
import validation from './LoginValidation';


const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  const navigate=useNavigate();
  const [errors, setErrors] = useState({});
  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validation(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      axios.post('http://localhost:3000/login', values)
        .then(res => {
          if (res.data.message === 'Success') {
           
            if (res.data.roll === "organizati") {
              navigate('/organizationhome');
            } else if (res.data.roll === "volunteer") {
              navigate('/Volunteerhome');
            } else {
              alert("Invalid role");
            }
          } else {
            alert("Invalid credentials");
          }
        })
        .catch(err => {
          console.log(err);
          alert("Internal server error");
        });
    }
  };

  return (
    <div style={styles.container}>
      <div><img src={Background2} alt="Background" style={styles.backgroundImage} /></div>
      <Link to="/signup" style={{ ...styles.btn, ...styles.signUp }}>Sign Up</Link>
      <div style={styles.transparentLayer}>
        <div style={styles.topButtons}>
         <Link to="/"> <button style={styles.btn}>Home</button></Link>
        </div>
        <div style={styles.logoSection}>
          <img src={Logo} alt="Logo" style={styles.logo} />
          <div style={styles.websiteName}>SECONDMOTHERLAND.ORG</div>
        </div>
        <h1 style={styles.title}>Welcome back</h1>
        <h2 style={styles.subtitle}>Please login to your account</h2>
        <form  onSubmit={handleSubmit}  style={styles.form}>
          <label htmlFor="email" style={styles.label}>EMAIL</label>
          <input type="email" id="email" onChange={handleInput} name="email" style={styles.input} />
          {errors.email && <span className='text-danger'>{errors.email}</span>}<br></br>
          <label htmlFor="password" style={styles.label}>PASSWORD</label>
          <input type="password" id="password" onChange={handleInput} name="password" style={styles.input} />
          {errors.password && <span className='text-danger'>{errors.password}</span>}<br></br>
          <button type="submit" style={{ ...styles.btn, ...styles.signInBtn }}>Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

const styles = {
  container: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  
  

  backgroundImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    top: 0,
    left: 0,
    zIndex: -1,
  },
  transparentLayer: {
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
  },
  topButtons: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  btn: {
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
  },
  signUp: {
    position: 'absolute',
    top: '20px',
    right: '20px',
  },
  logoSection: {
    marginTop: '20px',
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: '50px',
    height: '50px',
  },
  websiteName: {
    color: 'white',
    fontSize: '13px',
    marginLeft: '10px',
  },
  title: {
    color: 'white',
    fontSize: '25px',
    marginTop: '60px',
    marginLeft: '30px',
  },
  subtitle: {
    color: 'white',
    fontSize: '15px',
    marginTop: '10px',
    marginLeft: '30px',
  },
  form: {
    marginTop: '20px',
    marginLeft: '30px',
    marginRight: '30px',
    flex: 1,
  },
  label: {
    color: 'white',
    fontSize: '15px',
    display: 'inline-block',
    marginTop: '10px',
    marginBottom: '10px',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginTop: '5px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '6px',
    boxSizing: 'border-box',
  },
  signInBtn: {
    width: '100%',
    height: '40px',
    fontSize: '18px',
    marginTop: '30px',
    borderRadius: '6px',
    cursor: 'pointer',
  },
};
