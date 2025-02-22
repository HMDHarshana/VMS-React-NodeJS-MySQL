function validation(values) {
  let errors = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;

  if (!values.email) {
    errors.email = "Email should not be empty";
  } else if (!email_pattern.test(values.email)) {
    errors.email = "Email did not match";
  }

  if (!values.password) {
    errors.password = "Password should not be empty";
  } else if (!password_pattern.test(values.password)) {
    errors.password = "Password did not match";
  }

  return errors;
}

export default validation;
