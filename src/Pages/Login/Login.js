import React from 'react';
import { useForm } from 'react-hook-form';

import { Link } from 'react-router-dom';

const Login = () => {

    const {register, formState: {errors}, handleSubmit} = useForm();
    const handleLogin = data => {
        console.log(data);
    }
    

    return (
        <div className="hero bg-base-200">
            <div className="hero-content  flex justify-center items-center">
                <div className="card flex-shrink-0 shadow-2xl bg-base-100">
                    <h1 className="text-2xl font-bold text-center">Login</h1>
                    <form onSubmit={handleSubmit(handleLogin)} className="card-body">
                        <div className="form-control">
                            <label className="label"><span className="label-text">Email</span></label>
                            <input type="text" {...register("email", {
                                required: "Email Address is Required"
                                })} 
                                className="input input-bordered" />
                                {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label"><span className="label-text">Password</span></label>
                            <input type="text" {...register("password", {
                                required: "Password Address is Required"
                                })} 
                                className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        </div>
                        <input className="btn btn-primary" type="submit" value='Login' />
                    </form>
                    <p className='p-1'>New to Mobile World <Link className='text-primary' to='/signup'>Create New Account</Link></p>
                    <div className="divider w-50"></div>
                    <button className='btn btn-outline w-2/3 mb-2 mx-14'>Google Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Login;