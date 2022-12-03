import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const {register, handleSubmit, formState: { errors }} = useForm();

    const handleSignUp = (data) =>{
        console.log(data);
        // console.log(errors);
    }

    return (
        <div className="h-[700px] flex justify-center items-center">
        <div className="w-96 p-7">
          <h2 className="text-xl text-center font-bold">Sign Up</h2>
          <form onSubmit={handleSubmit(handleSignUp)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type='text' 
              {...register("name")} 
              className="input input-bordered w-full max-w-xs"/>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type='email' 
              {...register("email", { 
                required: "Email Address is required"
            })} 
              className="input input-bordered w-full max-w-xs"/>
              {errors.email && <p role="alert" className='text-red-500'>{errors.email?.message}</p>}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type='password' 
              {...register("password",{ 
                required: "Password is required",
                minLength: {value: 6, message: 'Password must be 6 characters'} 
            })} 
              className="input input-bordered w-full max-w-xs"/>
              {errors.password && <p role="alert" className='text-red-500'>{errors.password?.message}</p>}
              <label className="label">
                <span className="label-text">Forget Password</span>
              </label>
            </div>
            <input className="btn btn-drak text-white w-full" type="submit" />
          </form>
          <p>
            Already have an account{" "}
            <Link className="text-accent" to="/login">
              Please Login
            </Link>{" "}
          </p>
          <div className="divider">OR</div>
          <button className="btn btn-drak w-full">CONTINUE WITH GOOGLE</button>
        </div>
      </div>
    );
};

export default SignUp;