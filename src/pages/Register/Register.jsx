import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";
// import { DiApple } from "react-icons/di";
import { DiGithubBadge } from "react-icons/di";
import { RiTwitterXLine } from "react-icons/ri";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const { createUser, logInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.currentTarget.reset();
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGoogleRegister = () => {
    logInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log("Error: " + error.message);
      });
  };

  return (
    <div className='flex flex-col h-screen bg-base-200'>
      <Navbar></Navbar>
      <div className='flex flex-col justify-center items-center h-screen'>
        <div className='max-w-md mx-auto w-full bg-white shadow-xl rounded-3xl sm:p-10 p-6'>
          <div className='text-center mb-4'>
            <p className='text-2xl font-semibold'>Register Your Account</p>
          </div>
          <hr className='mb-3' />

          {/* Form */}
          <form onSubmit={handleRegister}>
            {/* Name */}
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
            {/* <div className='mt-3'>
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
            </div> */}

            {/* Email */}
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

            {/* Password */}
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

            {/* Terms and Conditions */}
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

            {/* Register button */}
            <div className='mt-6'>
              <button
                className='w-full py-2 px-4 bg-gray-700 text-white rounded-md hover:bg-gray-600'
                type='submit'
              >
                Register
              </button>
            </div>
          </form>

          {/* Already have an account */}
          <div className='flex items-center justify-center mt-4'>
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

          {/* Other Register Options */}
          <div>
            <p className='flex justify-center text-xs text-slate-500 mt-4'>
              Or Login with
            </p>
            <div>
              <div class='flex gap-3'>
                {/* Login with google */}
                <button
                  onClick={() => handleGoogleRegister()}
                  className='mt-2 w-full h-12 rounded-md flex justify-center items-center font-medium gap-2 border border-[#ededef] bg-white cursor-pointer transition duration-200 ease-in-out hover:border-[#2d79f3]'
                >
                  <FcGoogle className='text-xl' />
                </button>

                {/* Login with Apple */}
                {/* <button className='btn-google'>
                            <DiApple className="text-2xl" />
                          </button> */}

                {/* Login with Github */}
                <button className='mt-2 w-full h-12 rounded-md flex justify-center items-center font-medium gap-2 border border-[#ededef] bg-white cursor-pointer transition duration-200 ease-in-out hover:border-[#2d79f3]'>
                  <DiGithubBadge className='text-2xl' />
                </button>

                {/* Login with X or Twitter */}
                <button className='mt-2 w-full h-12 rounded-md flex justify-center items-center font-medium gap-2 border border-[#ededef] bg-white cursor-pointer transition duration-200 ease-in-out hover:border-[#2d79f3]'>
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

export default Register;
