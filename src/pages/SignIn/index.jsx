import React, { useContext } from 'react';
import './SignIn.scss'
import { useNavigate } from 'react-router-dom';
import { ShoppingCartContext } from '../../context';

const SignIn = () => {
  const navigate = useNavigate();
  const { email, setEmail, password, setPassword, setLogin} = useContext(ShoppingCartContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(email && password){
      const data = email;
      localStorage.setItem('datos', JSON.stringify(data));
      setLogin(true)
      navigate('/admin', { state: { data } });
    }
    
  };
  return (
    <div className='container'>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
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
  )
}

export default SignIn
