import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const trueUsername = 'admin';
  const truePassword = 'password';

  const handleLogin = () => {
    if (username === trueUsername && password === truePassword) {
      setMessage('Login successful!');
    } else {
      setMessage('Invalid username or password. Please try again.');
    }
  };

  return (
    <div className="App d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', backgroundColor: '#f0f0f0' }}>
      <div className="login-form col-md-6" style={{ background: 'white', padding: '20px', borderRadius: '8px' }}>
        <h2 className="text-center">Login</h2>
        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn btn-success btn-block w-100" onClick={handleLogin}>Login</button>
        <p className="text-center mt-3">{message}</p>
      </div>
    </div>
  );
}

export default App;
