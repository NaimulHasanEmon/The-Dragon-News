import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Register = () => {
  const [showPass, setShowPass] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, email, password);
  };

  return (
    <div className='flex flex-col h-screen bg-base-200'>
      <Navbar></Navbar>
      <div className='flex flex-col justify-center items-center h-screen'>
        <div className='max-w-md mx-auto w-full bg-white shadow-xl rounded-3xl sm:p-10 p-6'>
          <div className='text-center mb-6'>
            <p className='text-2xl font-semibold'>Register Your Account</p>
          </div>
          <hr className='mb-6' />
          <form onSubmit={handleRegister}>
            <div>
              <label
                className='text-sm font-semibold text-gray-600'
                htmlFor='name'
              >
                Name
              </label>
              <input
                className='w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm'
                type='text'
                name='name'
                required
                placeholder='Enter your name'
              />
            </div>
            <div className='mt-3'>
              <label
                className='text-sm font-semibold text-gray-600'
                htmlFor='url'
              >
                Photo URL
              </label>
              <input
                className=' w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm'
                type='url'
                name='photoUrl'
                required
                placeholder='Enter your photo URL'
              />
            </div>
            <div className='mt-3'>
              <label
                className=' text-sm font-semibold text-gray-600 mt-4'
                htmlFor='email'
              >
                E-mail
              </label>
              <input
                className=' w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm'
                type='email'
                name='email'
                required
                placeholder='Enter your email address'
              />
            </div>
            <div className='mt-3'>
              <label
                className=' text-sm font-semibold text-gray-600 mt-4'
                htmlFor='password'
              >
                Password
              </label>
              <div className='relative'>
                <input
                  className=' w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm'
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
            <div className='flex items-start mt-4'>
              <div className='flex items-center h-5'>
                <input
                  className='w-4 h-4 border-gray-300 rounded'
                  type='checkbox'
                  required
                  id='terms'
                />
              </div>
              <div className='ml-3 text-sm'>
                <label className='font-light text-gray-500'>
                  I accept the
                  <a
                    href='/terms'
                    className='font-medium text-primary-600 hover:underline text-primary-500 ml-1'
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>
            <div className='mt-6'>
              <button
                className='w-full py-2 px-4 bg-gray-700 text-white rounded-md hover:bg-gray-600'
                type='submit'
              >
                Register
              </button>
            </div>
          </form>
          <div className='flex items-center justify-center mt-6'>
            <p className='text-sm text-gray-500'>
              Already have an account?
              <Link
                to='/login'
                className='text-red-500 font-medium ml-1 hover:underline'
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
