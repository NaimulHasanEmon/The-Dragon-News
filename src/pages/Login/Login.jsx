import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className='bg-base-200'>
      <div className='py-3 flex flex-col justify-center min-h-screen sm:max-w-xl sm:mx-auto'>
        <div className='px-4 py-10 bg-white mx-8 md:mx-0 shadow-xl rounded-3xl sm:p-10'>
          <div className='max-w-md mx-auto'>
            <div className='mb-8 mt-2 flex items-center space-x-5 justify-center'>
              <p className="text-2xl poppins-semibold">Login Your Account</p>
            </div>
            <hr />
            <div className='mt-5'>
              <label
                className='font-semibold text-sm text-gray-600 pb-1 block'
                htmlFor='email'
              >
                E-mail
              </label>
              <input
                className='border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full'
                type='email'
                name='email'
                required
                placeholder='Enter your email address'
              />
              <label
                className='font-semibold text-sm text-gray-600 pb-1 block'
                htmlFor='password'
              >
                Password
              </label>
              <input
                className='border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full'
                type='password'
                name='password'
                required
                placeholder='Enter your password'
              />
            </div>
            <div className='mt-5'>
              <button
                className='py-2 px-4 w-full rounded-[4px] bg-gray-700 text-white hover:bg-gray-600'
                type='submit'
              >
                Login
              </button>
            </div>
            <div className='flex items-center justify-between mt-4'>
              <span className='w-1/5 border-b dark:border-gray-600 md:w-1/4' />
              <span>Don't have an account? </span>
              <Link
                to='/register'
                className='text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline'
              >
                <span className='text-red-500'>Register</span>
              </Link>
              <span className='w-1/5 border-b dark:border-gray-400 md:w-1/4' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
