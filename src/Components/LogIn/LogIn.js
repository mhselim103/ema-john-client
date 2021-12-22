import React from "react";
import { Button } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const LogIn = () => {
  const location = useLocation();
  const { signInUsingGoogle, setIsLoading } = useAuth();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/shop";

  const handleSignIn = () => {
    signInUsingGoogle()
      .then((result) => {
        history.push(redirect_uri);
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <div className="d-flex justify-content-center">
      <div>
        <h1>Log In</h1>
        <form onSubmit="">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="your email"
          />
          <br />
          <input type="password" name="password" id="password" />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <p>
          New to ema-john? <Link to="/register">Register</Link>
        </p>
        <div>--------------or------------</div>
        <Button variant="primary" onClick={handleSignIn}>
          Google SignIn
        </Button>
      </div>
    </div>
  );
};

export default LogIn;
