import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Login = () => {
  const [showPass, setShowPass] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    console.log(form.get("email"));
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
            <div>
              <label
                className='text-sm font-semibold text-gray-600 mt-4'
                htmlFor='password'
              >
                Password
              </label>
              <div className="relative">
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
        </div>
      </div>
    </div>
  );
};

export default Login;
