import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../contextAPI/ContextAPI";

const Register = () => {
  const createUser = useContext(authContext)
  

  const handleRegister = e =>{
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password)
  }
    return (
        <div>
        <div className="hero bg-base-200 min-h-screen">
<div className="hero-content flex-col ">
<div className="text-center lg:text-left">
  <h1 className="text-5xl font-bold">Register Here</h1>
 
</div>
<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
  <form className="card-body" onSubmit={handleRegister}>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Name</span>
      </label>
      <input type="text" name="name" placeholder="name" className="input input-bordered" required />
    </div>
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
      <button className="btn btn-primary">Submit</button>
    </div>
  </form>
<p className="m-4">If you have an account? <Link to='/login' className="font-bold text-blue-600 underline">Login Please</Link></p>
</div>
</div>
</div>
    </div>
    );
};

export default Register;