import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Signup.css';

function SignUp() {
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [emailId, setEmailId] = useState('');
const [password, setPassword] = useState('');
const [errorMessage, setErrorMessage] = useState('');

function handleFirstNameChange(event) {
setFirstName(event.target.value);
}

function handleLastNameChange(event) {
setLastName(event.target.value);
}

function handleEmailIdChange(event) {
setEmailId(event.target.value);
}

function handlePasswordChange(event) {
setPassword(event.target.value);
}

function handleSubmit(event) {
event.preventDefault();

axios.post('/api/signup', { firstName, lastName, emailId, password })
  .then(response => {
    // Redirect the user to the login page
    // window.location.href = '/login';
  })
  .catch(error => setErrorMessage(error.response.data.message));
}

return (
<div className="signup-container">
{/* <h1>Sign Up</h1> */}
{errorMessage && (
<div className="error-message">{errorMessage}</div>
)}
<form onSubmit={handleSubmit}>
<div className="form-group">
<label htmlFor="firstName">First Name:</label>
<input type="text" id="firstName" value={firstName} onChange={handleFirstNameChange} />
</div>
<div className="form-group">
<label htmlFor="lastName">Last Name:</label>
<input type="text" id="lastName" value={lastName} onChange={handleLastNameChange} />
</div>
<div className="form-group">
<label htmlFor="emailId">Email Id:</label>
<input type="email" id="emailId" value={emailId} onChange={handleEmailIdChange} />
</div>
<div className="form-group">
<label htmlFor="password">Password:</label>
<input type="password" id="password" value={password} onChange={handlePasswordChange} />
</div>
<button type="submit">Sign Up</button>
</form>
</div>
);
}

export default SignUp;



