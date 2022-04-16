import './register.css'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className="register">
        <span className="registerTitle">Register</span>
        <form className="registerForm">
            <label htmlFor="username">Username</label>
            <input 
            type="text" 
            id="username" 
            className="registerInput"
            placeholder="username..." 
            />

            <label htmlFor="email">Email</label>
            <input 
            type="email" 
            id="email" 
            className="registerInput"
            placeholder="johndoe@gmail.com" 
            />
            
            <label htmlFor="passwd">Password</label>
            <input 
            type="password" 
            id="passwd" 
            className="registerInput"
            placeholder="Enter password..." 
            />
            <button className="registerButton">Register</button>
        </form>
            <button className="registerLoginButton">
            <Link className="link" to="/login">Login</Link>
            </button>
    </div>
  )
}

export default Register