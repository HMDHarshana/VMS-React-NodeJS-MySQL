function validation(values) {
    let errors = {};
    const name_pattern = /^[A-Za-z\s]+$/;
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;

  
    if (!values.name) {
      errors.name = "Name should not be empty";
    }
    else if (!name_pattern.test(values.name)) {
        errors.name = "Name should only contain letters and spaces";
      }
    
  
    if (!values.roll) {
      errors.roll = "Please select either VOLUNTEER or ORGANIZATION";
    }
  
    if (!values.email) {
      errors.email = "Email should not be empty";
    } else if (!email_pattern.test(values.email)) {
      errors.email = "Email did not match";
    }
  
    if (!values.password) {
      errors.password = "Password should not be empty";
    } else if (!password_pattern.test(values.password)) {
      errors.password = "incorrect format";
    }
  
    if (values.password !== values.repassword) {
      errors.repassword = "Re-Passwords do not match";
    }
  
    return errors;
  }
  
  export default validation;
  