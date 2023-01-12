import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {

    const {register, formState: {errors}, handleSubmit} = useForm();
    const {signIn} = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const location  = useLocation();
    const navigate = useNavigate();
    const {providerLogin} = useContext(AuthContext)


    const googleProvider = new GoogleAuthProvider()

    const from = location.state?.from?.pathname || '/';


    const handleLogin = data => {
        console.log(data);
        setLoginError('')
        signIn(data.email, data.password)
        .then(result => {
            const user = result.user;
            
            const currentUser ={
                email: user.email
            }
            console.log(currentUser)

            fetch('http://localhost:5000/jwt',{
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                localStorage.setItem('firstToken', data.token);
                navigate(from, {replace: true})
            });
            
        })
        .catch(error => {
            console.log(error.message)
            setLoginError(error.message)
        });
    }

    const handleGoogleSignIn = () =>{
        providerLogin(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user)
            navigate(from, {replace: true})
        })
        .catch(error => console.error (error))

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
                            <input type="password" {...register("password", {
                                required: "Password Address is Required"
                                })} 
                                className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        </div>
                        <input className="btn btn-primary" type="submit" value='Login' />
                        <div>
                            {loginError && <p className='text-red-600'>{loginError}</p>}
                        </div>
                    </form>
                    <p className='p-1'>New to Mobile World <Link className='text-primary' to='/signup'>Create New Account</Link></p>
                    <div className="divider w-50"></div>
                    <button onClick={handleGoogleSignIn} className='btn btn-outline w-2/3 mb-2 mx-14'>Google Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Login;