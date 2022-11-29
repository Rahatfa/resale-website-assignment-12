import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {

    const {register, handleSubmit, formState:{errors}} = useForm();
    const {createUser, updateUser} = useContext(AuthContext)
    const [signUpError, setSignUpError] = useState('')

    const handleSignUp = (data) => {
        console.log(data);
        setSignUpError('')
        createUser(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            toast('User Created Successfully')
            const userInfo = {
                displayName: data.name
            }
            updateUser(userInfo)
            .then(() =>{})
            .catch(err => console.log(err))
        })
        .catch(error => {
            console.log(error)
            setSignUpError(error.message)
            
        
        });
    }

    return (
        <div className="hero bg-base-200">
            <div className="hero-content  flex justify-center items-center">
                <div className="card flex-shrink-0 shadow-2xl bg-base-100">
                    <h1 className="text-2xl font-bold text-center">SignUp</h1>
                    <form onSubmit={handleSubmit(handleSignUp)} className="card-body">
                        <div className="form-control">
                            <label className="label"><span className="label-text">Name</span></label>
                            <input type="text" {...register("name",{
                                required:"Name is Required"
                            })} 
                                className="input input-bordered" />
                                {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label"><span className="label-text">Email</span></label>
                            <input type="text" {...register("email", {
                                required: true
                                })} 
                                className="input input-bordered" />
                                {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label"><span className="label-text">Password</span></label>
                            <input type="password" {...register("password", {
                                required: "Password is Required"
                                })} 
                                className="input input-bordered" />
                            {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        </div>

                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">Seller ?</span> 
                                <span className="label-text">yes</span> 
                                <input type="radio" name="radio-7" className="radio radio-info" checked />
                                <span className="label-text">No</span> 
                                <input type="radio" name="radio-7" className="radio radio-info" />
                            </label>
                        </div>
                        <input className="btn btn-primary" type="submit" value='SignUp' />
                        {signUpError && <p className='text-red-600'>{signUpError}</p>}
                    </form>
                    <p className='p-1 ml-12'>Already Member ! <Link className='text-primary' to='/login'>Login</Link></p>
                    <div className="divider w-50"></div>
                    <button className='btn btn-outline w-2/3 mb-2 mx-14'>Google Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;  