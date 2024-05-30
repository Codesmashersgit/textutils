import './SignUp.css';
import {Link} from'react-router-dom';
function SignUp(){
    return(
        <div className="div">
            <img src="https://img.freepik.com/premium-vector/register-access-login-password-internet-online-website-concept-flat-illustration_385073-108.jpg?w=740"></img>
        <div className="signUp">
            <h6>Signup</h6>
            <div className="username">
                <p>Username</p>
                <input type="text" placeholder="Enter your name"></input>
            </div>
            <div className="signup-email">
                <p>Email</p>
                <input type="email"placeholder="Enter your email "></input>
            </div>
            <div className="password">
                <p>Password</p>
                <input type="password"placeholder='Enter password'></input>
            </div>
            <div className="cnf-pswd">
                <p>Confirm Password</p>
                <input type="password" placeholder='Enter confirm Password'></input>
            </div>
            <Link to="/login">
           <div className="account">
            Already have an account
            <a href='#'>Login</a>
           </div>
           </Link>
           <div className="register">
            <button>Register</button>
           </div>
        </div>
        </div>
    )
}

export default SignUp;