import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../contextAPI/ContextAPI";
import { sendEmailVerification, updateProfile } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';

const Register = () => {
  const {createUser} = useContext(authContext)
  const navigate = useNavigate();
  const [successful, setSuccessful] = useState([])

  const toastSuccessful = () =>{
    toast("Succesfully submitted the Registration");
  }

  const handleRegister = e =>{
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    setSuccessful('')

    // create user in firebase
    console.log(name, email, password)
    createUser(email, password)
    .then(result =>{
      console.log(result.user)
      // Update profile Name
      updateProfile(result.user, {
      displayName: name
      })
      .then()
      .catch(error=> console.log(error.message))
      // Email varification
      const userForVerify = result.user
      console.log(userForVerify)
      sendEmailVerification(userForVerify)
      .then(()=>{
        alert ('Please login your email and verify')
      })
      setSuccessful(result.user)
      e.target.reset();
       navigate('/')
    })
    .catch(error=>{console.log(error.message)})
    
  }
    return (
        <div>
  
        <div className="hero bg-base-200 min-h-screen">
<div className="hero-content flex-col ">
<div className="text-center lg:text-left">
  <h1 className="text-5xl font-bold">Register Here</h1>
 
</div>
<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
  <form className="card-body"  onSubmit={handleRegister}>
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
      <button  className="btn btn-primary">Submit</button>
   

    </div>
  </form>
  <p className="m-4">If you have an account? <Link to='/login' className="font-bold text-blue-600 underline">Login Please</Link></p>
</div>
</div>
</div>
<ToastContainer />
    </div>
    );
};

export default Register;