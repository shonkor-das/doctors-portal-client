import React,{useContext, useState} from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const Login = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const {signIn} = useContext(AuthContext);
  const [loginError, setLoginError] = useState('');
  const location = useLocation();
  const navaigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

  // console.log(data);

  const handleLogin = data =>{
    console.log(data);
    
    // console.log(errors);
    setLoginError('');
    signIn(data.email, data.password)
    .then(result =>{
      const user = result.user;
      console.log(user);
      navaigate(from, {replace: true});
    })
    .catch(error => {
      console.log(error.message)
      setLoginError(error.message)
    });
  }

  return (
    <div className="h-[700px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-xl text-center font-bold">Login</h2>
        <form onSubmit={handleSubmit((handleLogin))}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { 
                required: "Email Address is required" 
            })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && <p role="alert" className="text-red-500">{errors.email?.message}</p>}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", { 
                required: "Password is required",
               minLength: {value: 6, message: 'Password must be 6 characters'}
            })}
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              <span className="label-text">Forget Password</span>
            </label>
            {errors.password && <p role="alert" className="text-red-500 mb-1">{errors.password?.message}</p>}
          </div>
          <input className="btn btn-drak text-white w-full" type="submit" />
          <div>
            {loginError && <p className="text-red-500">{loginError}</p>}
          </div>
        </form>
        <p>
          New to Doctors Portal{" "}
          <Link className="text-accent" to="/signup">
            Create new account
          </Link>{" "}
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-drak w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Login;
