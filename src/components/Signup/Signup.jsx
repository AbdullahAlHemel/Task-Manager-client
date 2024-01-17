import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthProvider';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Signup = () => {
    const {register,handleSubmit ,reset , formState: { errors }} = useForm();
    const {createUser} = useContext(AuthContext) 
    const navigate = useNavigate()

    
  useEffect(() => {
    AOS.init({duration:"1000"})
},[])

    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
        .then(result => console.log(result))
        navigate('/')
    }

    return (
        <div data-aos="zoom-in-down">
            <div className="hero min-h-screen pt-12">
    <div className="hero-content flex-col md:flex">
        <div className="text-center lg:text-left">
        <h1 className="text-3xl font-semibold text-base-400">Sign up now!</h1>
        </div>
        <div className="card w-[500px] shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
            <label className="label">
                <span className="label-text">Name</span>
            </label>
            <input type="text" {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered"  />
            {errors.name && <span className="text-red-500 mt-1">name is required</span>}
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Email</span>
            </label>
            <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered"  />
            {errors.email && <span className="text-red-500 mt-1">email is required</span>}
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Password</span>
            </label>
            <input type="password" {...register("password", 
            { required: true ,
             minLength: 6, 
             maxLength: 20,
             pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6}/
             })} placeholder="password" className="input input-bordered" />
            {errors.password ?. type==='required'  && <span className="text-red-500 mt-1">password is required</span>}
            {errors.password ?. type==='minLength' && <span className="text-red-500 mt-1">password must be more then 6 character</span>}
            {errors.password ?. type==='maxLength' && <span className="text-red-500 mt-1">password must be less then 20 character</span>}
            {errors.password ?. type==='pattern' && <span className="text-red-500 mt-1">password must have one uppercase, one lowercase, one number, one special character</span>}
            <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
            </div>
            <div className="form-control mt-6">
                <input  className="btn " type="submit" value='SignUp'/>
            </div>
            <p className='text-center my-2 text-xl'><small>Already a account? <Link to='/signin' className='text-blue-600'>Login</Link></small></p>
        </form>
        </div>
    </div>
   </div> 
        </div>
    );
};

export default Signup;