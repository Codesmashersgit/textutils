import './Login.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Login(){
    return(
   
        <div className="log">
            <div className="log-img">
                <img src='https://img.freepik.com/premium-vector/illustration-cartoon-female-user-entering-login_241107-682.jpg'></img>
                </div>
            <div className="head">
                <p>Login</p>

            </div>
            <div className="email-phn">
                <p>Email</p>
                <input type="email" placeholder='Enter your email..'></input>

            </div>
          
            <div className="pswd">
                <p>Password</p>
                <input type="password"placeholder='Enter Password'></input>
            </div>
            <div class="forget">
               Forgot password! 
            </div>
            <div className="submit">
            <input type="submit" value="Login"></input></div>
           
           <Link to='/signUp'><div className="signup">
                Not a member! <a href="#">Signup</a>
            </div>
            </Link>
        <div className="continue">
            <a href="#">Continue With Google</a>
            </div>
            
        </div>
        
        
        
    );
}

export default Login;