import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";
// import { DiApple } from "react-icons/di";
import { DiGithubBadge } from "react-icons/di";
import { RiTwitterXLine } from "react-icons/ri";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const { logInUser, logInWithGoogle, loginWithGithub, loginWithTwitter } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  // With email and password
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    logInUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
        e.currentTarget.reset();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // With Google
  const handleLoginWithGoogle = () => {
    logInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log("Error: " + error.message);
      });
  };

  // With Github
  const handleLoginWithGithub = () => {
    loginWithGithub()
     .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
     .catch((error) => {
        console.log("Error: " + error.message);
      });
  };

  // With Twitter
  const handleLoginWithTwitter = () => {
    loginWithTwitter()
     .then((result) => {
        console.log(result.user);
        navigate(location?.state? location.state : "/");
      })
     .catch((error) => {
        console.log("Error: " + error.message);
      });
  };

  return (
    <div className='flex flex-col h-screen bg-base-200'>
      <div className='flex-shrink-0'>
        <Navbar />
      </div>
      <div className='flex-grow flex items-center justify-center'>
        <div className='max-w-md mx-auto w-full bg-white shadow-xl rounded-3xl sm:p-10 p-6'>
          <div className='text-center mb-6'>
            <p className='text-2xl font-semibold'>Login Your Account</p>
          </div>
          <hr className='mb-6' />
          <form onSubmit={handleLogin}>
            <div>
              <label
                className='text-sm font-semibold text-gray-600'
                htmlFor='email'
              >
                E-mail
              </label>
              <input
                className='w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400'
                type='email'
                name='email'
                required
                placeholder='Enter your email address'
              />
            </div>
            <div className='mt-4'>
              <label
                className='text-sm font-semibold text-gray-600 mt-4'
                htmlFor='password'
              >
                Password
              </label>
              <div className='relative'>
                <input
                  className='w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400'
                  type={showPass ? "text" : "password"}
                  name='password'
                  required
                  placeholder='Enter your password'
                />
                <span
                  onClick={() => setShowPass(!showPass)}
                  className='absolute top-4 right-3 cursor-pointer'
                >
                  {showPass ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>
            <div className='mt-6'>
              <button
                className='w-full py-2 px-4 bg-gray-700 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500'
                type='submit'
              >
                Login
              </button>
            </div>
          </form>
          <div className='flex items-center justify-center mt-6'>
            <p className='text-sm text-gray-500'>
              Don't have an account?
              <Link
                to='/register'
                className='text-red-500 font-medium ml-1 hover:underline'
              >
                Register
              </Link>
            </p>
          </div>

          {/* Other Login Options */}
          <div>
            <p className='flex justify-center text-xs text-slate-500 mt-5'>
              Or Login with
            </p>
            <div>
              <div class='flex gap-3'>
                {/* Login with google */}
                <button
                  onClick={() => handleLoginWithGoogle()}
                  className='mt-2 w-full h-12 rounded-md flex justify-center items-center font-medium gap-2 border border-[#ededef] bg-white cursor-pointer transition duration-200 ease-in-out hover:border-[#2d79f3]'
                >
                  <FcGoogle className='text-xl' />
                </button>

                {/* Login with Apple */}
                {/* <button className='btn-google'>
                            <DiApple className="text-2xl" />
                          </button> */}

                {/* Login with Github */}
                <button
                onClick={() => handleLoginWithGithub()}
                className='mt-2 w-full h-12 rounded-md flex justify-center items-center font-medium gap-2 border border-[#ededef] bg-white cursor-pointer transition duration-200 ease-in-out hover:border-[#2d79f3]'>
                  <DiGithubBadge className='text-2xl' />
                </button>

                {/* Login with X or Twitter */}
                <button
                onClick={() => handleLoginWithTwitter()}
                className='mt-2 w-full h-12 rounded-md flex justify-center items-center font-medium gap-2 border border-[#ededef] bg-white cursor-pointer transition duration-200 ease-in-out hover:border-[#2d79f3]'>
                  <RiTwitterXLine className='text-2xl' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
