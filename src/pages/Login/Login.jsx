import { useState } from 'react';
import './Login.css';

import Button from '../../components/Button/Button';

import { GrView } from 'react-icons/gr';
import { BiHide } from 'react-icons/bi';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {};

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className='login-wrapper'>
      <div className='login-container'>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter your email'
              required
            />
          </div>

          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <div className='password-wrapper'>
              <input
                type={showPassword ? 'text' : 'password'}
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Enter your password'
                required
              />
              <button
                type='button'
                className='toggle-password'
                onClick={togglePasswordVisibility}
                aria-label='Toggle password visibility'
              >
                {showPassword ? <GrView /> : <BiHide />}
              </button>
            </div>
          </div>

          {error && <p className='error-message'>{error}</p>}

          {/* <button type="submit" className="btn-login">
            Login
          </button> */}
          <div className='btn-login'>
            <Button
              name='Login'
              type='submit'
              paddingXL='5vw'
              paddingXM='5.5vw'
              widthL='8.2vw'
              widthM='39.3vw'
              bacgrounClr='#ffff'
              bacgrounArrow='#022447'
              colorArrow='#ffff'
              colorText='#022447'
              colorTextHover='#fff'
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
