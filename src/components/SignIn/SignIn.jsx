import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { AuthContext } from '../Auth/AuthProvider';


const SignIn = () => {

  const { signIn } = useContext(AuthContext) 
  const navigate = useNavigate()

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
        signIn(email, password);
        navigate('/')
    }

    return (
        <from className="hero min-h-screen">
        <div className="hero-content flex-col md:flex">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl text-base-400 font-bold">Login now!</h1>
          </div>
          <div className="card shrink-0 w-[450px]  shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
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
                <input className="btn bg-base-500 text-base-500" type="submit" value='Login' />
              </div>
            <p className='text-center my-2 text-xl'><small>New Here? <Link to='/signup' className='text-blue-600'>Create an Account</Link></small></p>
            </form>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </from>
    );
};

export default SignIn;