
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Login.css';
function Login({ onLoginSuccess }) {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

function handleSubmit(event) {
event.preventDefault();
axios.post('/api/login', { email, password })
  .then(response => {
    onLoginSuccess();
  })
  .catch(error => {
    console.error(error);
    alert('Login failed. Please try again.');
  });
}

return (
<form onSubmit={handleSubmit}>
<div>
<label htmlFor="email">Email:</label>
<input type="email" id="email" value={email} onChange={event => setEmail(event.target.value)} />
</div>
<div>
<label htmlFor="password">Password:</label>
<input type="password" id="password" value={password} onChange={event => setPassword(event.target.value)} />
</div>
<button type="submit">Login</button>
</form>
);
}

export default Login;




