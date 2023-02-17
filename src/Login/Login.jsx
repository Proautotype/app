import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FaUser, FaLock } from 'react-icons/fa';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Username: ${username} Password: ${password}`);
    // You can add your own authentication logic here
  };

  return (
    <div className="login-page">
      <Form onSubmit={handleSubmit} className="login-form">
        <FormGroup className='form-group'>
          <Label for="username"><FaUser /> Username</Label>
          <Input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormGroup>
        <FormGroup className='form-group'>
          <Label for="password"><FaLock /> Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <Button color="primary" type="submit">Login</Button>
        
        <Button color="primary" type="submit">Forgot Password</Button>
      </Form>
    </div>
  );
};

export default Login;