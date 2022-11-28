import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Link } from 'react-router-dom';

const Login = () => {

    const {register, handleSubmit} = useForm();
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
                            <input type="text" {...register("email")} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label"><span className="label-text">Password</span></label>
                            <input type="text" {...register("password")} className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        {/* <div className="form-control mt-1">
                            <input className="btn btn-primary" type="submit" value='Login' />
                        </div> */}
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