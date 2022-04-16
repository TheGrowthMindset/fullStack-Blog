import './login.css'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm">
            <label htmlFor="email">Email</label>
            <input 
            type="email" 
            id="email" 
            className="loginInput"
            placeholder="johndoe@gmail.com" 
            />
            <label htmlFor="passwd">Password</label>
            <input 
            type="password" 
            id="passwd" 
            className="loginInput"
            placeholder="Enter password..." 
            />
            <button className="loginButton">Login</button>
        </form>
          <button className="loginRegisterButton">
            <Link className="link" to="/register">Register</Link>
          </button>
    </div>
  )
}

export default Login