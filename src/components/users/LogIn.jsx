import { useContext } from "react";
import Navbar from "../navbar/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {authContext} from "../contextAPI/ContextAPI";

const LogIn = () => {
  const {logIn} = useContext(authContext)
  const navigate = useNavigate();
  const location = useLocation();
  
    const handleLog = e =>{
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      console.log('login', email, password)

      // signIn from firebase
      logIn(email, password)
      .then(result => {
        e.target.reset();
        navigate(location?.state ? location.state : '/')
        console.log(result.user)
      })
      .catch(error => {console.log(error.message)})
    }
   
    return (
        <div>
          <Navbar></Navbar>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
     
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body" onSubmit={handleLog}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="m-4">If you are new in Here? Please <Link to='/register' className="font-bold text-green-600 underline">Register Here</Link></p>
    </div>
  </div>
</div>
        </div>
    );
};

export default LogIn;