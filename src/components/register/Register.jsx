import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Register = () => {
  // State to store the input field values
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here (e.g., send login request to server)
    console.log('Logging in with:', { username, password });
    // Reset input fields after submission (optional)
    setUsername('');
    setPassword('');
  };

  return (
    <div>
        <Link to="/login">
                    Log in
                </Link>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Register;
