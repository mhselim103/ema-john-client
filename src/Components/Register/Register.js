import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="d-flex justify-content-center">
            <div>
                <h1>Create Account</h1>
                <form onSubmit="">
                    <input type="text" name="yourName" id="yourName" placeholder="Your Name" />
                    <br />
                    <input type="email" name="email" id="email" placeholder="your email" />
                    <br />
                    <input type="password" name="password" id="pasword" placeholder="your password" />
                    <br />
                    <input type="submit" value="Register" />
                </form>
                <br />
                <p>Already have an account? </p>
                <Link to="/login">Log In Here</Link>
                <div>--------------or------------</div>
                <Button variant="primary">Google SignIn</Button>
            </div>
        </div>
    );
};

export default Register;